import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Anavbar from './Anavbar';

const Users = () => {
  const [userbookings, setUserbookings] = useState([]);
  const [users, setUsers] = useState([]);

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        // setError('Failed to fetch projects.');
        // setLoading(false);
      });
  }, []);

  const deleteData = (taskId) => {
    axios.delete(`http://localhost:4000/userdelete/${taskId}`);
    window.location.assign('/users');
    alert('User is deleted');
  };
  const deleteorder = (taskId) => {
    axios.delete(`http://localhost:4000/userorderdelete/${taskId}`);
    window.location.assign('/users');
    alert('deleted');
  };

  const fetchUserBikeData = (userId) => {
    axios.get(`http://localhost:4000/getorders/${userId}`)
      .then((response) => {
        setUserbookings(response.data);
        setSelectedUserId(userId); // Set the selected user
        setShowDetails(true);      // Show the modal
      })
      .catch((error) => {
        console.error('Error fetching user bike data:', error);
      });
  };
  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);

    if (formattedDeliveryDate >= currentDate) {
      return "ontheway";
    } else {
      return "delivered";
    }
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedUserId(null);
  };

  return (
    <div>
      <Anavbar />
      <br />
      <h1 className='text-center'>Users</h1> <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Table striped bordered hover variant="dark" style={{ width: "70%" }}>
          <thead>
            <tr>
              <th>sl/no</th>
              <th>UserId</th>
              <th>User name</th>
              <th>Email</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button style={{ border: 'none', background: 'none' }}>
                    <Link to={`/useredit/${item._id}`} style={{ color: 'blue', textDecoration: 'none' }}>
                      <FaEdit />
                    </Link>
                  </button>
                  <button onClick={() => deleteData(item._id)} style={{ border: 'none', color: 'red', background: 'none' }}>
                    <FaTrash />
                  </button>{' '}
                  <Button as={Link} to={`/userorders/${item._id}`} style={{ marginBottom: '12px' }}>
                    view
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>

  )
}

export default Users
