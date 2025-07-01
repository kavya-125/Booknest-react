import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Snavbar from './Snavbar';
import { FaBeer, FaHeart, FaTrash } from "react-icons/fa";
import { Card, Button } from 'react-bootstrap';

function Myproducts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:4000/getitem/${user.id}`)
        .then((response) => {
          console.log('Response data:', response.data); // Log the response data
          const taskData = response.data;
          setItems(taskData);
        })
        .catch((error) => {
          console.error('Error fetching tasks: ', error);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  const deleteItem=((Id)=>{
    axios.delete(`http://localhost:4000/itemdelete/${Id}`);
    window.location.assign('/myproducts');
    alert('Item is deleted');
  })
  return (
    <div>
      <Snavbar/>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Books List</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          {items.map((item) => (
            <Card
              key={item._id}
              className="bg-white p-4 rounded shadow"
              style={{
                width: '100%',
                minWidth: '250px',
                maxWidth: '350px',
                margin: 'auto',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            >
              <div style={{display:"flex",justifyContent:"flex-end",color:"red"}}>
                <button onClick={() => deleteItem(item._id)} style={{ border: 'none', color: 'red', background: 'none' }}>
                  <FaTrash />
                </button>
              </div>
              <Card.Img
                variant="top"
                src={`http://localhost:4000/${item.itemImage.startsWith('uploads') ? item.itemImage : 'uploads/' + item.itemImage}`}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Author: {item.author}
                </Card.Text>
                <Card.Text>
                  Genre: {item.genre}
                </Card.Text>
                <Card.Text className="text-blue-500 font-bold">
                  Price: ${item.price}
                </Card.Text>
                <Card.Text className="text-gray-600">
                  <strong>Description:</strong>{item.description.slice(0,259)}  ...
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Myproducts;
