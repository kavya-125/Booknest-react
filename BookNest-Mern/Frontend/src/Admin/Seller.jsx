import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Anavbar from './Anavbar';

const Seller = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/sellers`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        // Handle error if needed
      });
  }, []);

  const deleteData = (taskId) => {
    axios.delete(`http://localhost:4000/sellerdelete/${taskId}`);
    window.location.assign('/sellers');
    alert('User is deleted');
  };

  return (
    <div>
      <Anavbar />
      <br />
      <h1 className='text-center'>Vendors</h1> <br />
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
                  <Button as={Link} to={`/sellerorders/${item._id}`} style={{ marginBottom: '12px' }}>
                    view
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Seller;
