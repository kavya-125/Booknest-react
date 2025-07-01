import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Unavbar from './Unavbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import booksData from '../books.json';

function Products() {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Fetch all items from backend
    axios
      .get(`http://localhost:4000/item`)
      .then((response) => {
        const taskData = response.data;
        // If no books in backend, use local books.json
        if (Array.isArray(taskData) && taskData.length > 0) {
          setItems(taskData);
        } else {
          setItems(booksData);
        }
      })
      .catch((error) => {
        // If backend fails, use local books.json
        setItems(booksData);
        console.error('Error fetching tasks: ', error);
      });

    // Fetch wishlist items
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      axios.get(`http://localhost:4000/wishlist/${user.id}`)
      .then((response) => {
        const wishlistData = response.data;
        setWishlist(wishlistData);
      }) 
    } 
    else{
      console.log('ERROR');
    }
  }, []);

  const addToWishlist = async (itemId) => {
    try {
      console.log('itemId before find:', itemId);
      // Find the selected item by itemId
      const selectedItem = items.find((item) => {
        console.log('item._id:', item._id);
        console.log('itemId in find:', itemId);
        return item._id === itemId;
      });
  
      console.log('selectedItem:', selectedItem);
  
      if (!selectedItem) {
        throw new Error('Selected item not found');
      }
  
      // Destructure the needed properties
      const { title, itemImage, _id: itemId2 } = selectedItem;
  
      const userId = JSON.parse(localStorage.getItem('user')).id;
      const userName = JSON.parse(localStorage.getItem('user')).name;
      console.log('itemId2:', itemId2);
      console.log('itemId2:', title);
  
      // Add item to the wishlist
      await axios.post(`http://localhost:4000/wishlist/add`, { itemId: itemId2, title, itemImage,userId,userName });
      // Refresh the wishlist items
      const user = JSON.parse(localStorage.getItem('user'));
      if(user){
      axios.get(`http://localhost:4000/wishlist/${user.id}`)
      .then((response) => {
        const wishlistData = response.data;
        setWishlist(wishlistData);
      }) 
    } 
    else{
      console.log('ERROR');
    }
    } catch (error) {
      console.error('Error adding item to wishlist: ', error);
    }
  };
  
  
  const removeFromWishlist = async (itemId) => {
    try {
      // Remove item from the wishlist
      await axios.post(`http://localhost:4000/wishlist/remove`, { itemId }); // Adjust the endpoint accordingly

      // Refresh the wishlist items
      const user = JSON.parse(localStorage.getItem('user'));
      if(user){
      const response = await axios.get(`http://localhost:4000/wishlist/${user.id}`,); // Adjust the endpoint accordingly
      setWishlist(response.data);
    } 
    else{
      console.log('ERROR');
    }}
    catch (error) {
      console.error('Error removing item from wishlist: ', error);
    }
  };

  const isItemInWishlist = (itemId) => {
    return wishlist.some((item) => item.itemId === itemId);
  };

  return (
    <div>
      <Unavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Books List</h2>
        {items.length === 0 ? (
          <div className="text-center text-gray-500 text-xl mt-10">No books found.</div>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {items.map((item) => (
              <div key={item._id} className="bg-white p-4 rounded shadow" style={{ width: '24rem', marginBottom: '30px' }}>
                <img
                  src={
                    item.itemImage
                      ? `http://localhost:4000/${item.itemImage.startsWith('uploads') ? item.itemImage : 'uploads/' + item.itemImage}`
                      : 'https://via.placeholder.com/350x500?text=No+Image'
                  }
                  alt={item.title}
                  className="rounded-t-lg"
                  style={{ height: '400px', width: '100%', objectFit: 'cover' }}
                />
                <div>
                  <p className="text-xl font-bold mb-2">{item.title}</p>
                  <p className="text-gray-700 mb-2">Author: {item.author}</p>
                  <p className="text-gray-700 mb-2">Genre: {item.genre}</p>
                  <p className="text-blue-500 font-bold">Price: ${item.price}</p>
                  {isItemInWishlist(item._id) ? (
                    <Button
                      style={{ backgroundColor: 'red', border: 'none' }}
                      onClick={() => removeFromWishlist(item._id)}
                    >
                      Remove from Wishlist
                    </Button>
                  ) : (
                    <Button
                      style={{ backgroundColor: 'rebeccapurple', border: 'none' }}
                      onClick={() => addToWishlist(item._id)}
                    >
                      Add to Wishlist
                    </Button>
                  )}
                  <Button style={{ backgroundColor: 'rebeccapurple', border: 'none', marginLeft: '30px' }}>
                    <Link to={`/uitem/${item._id}`} style={{ color: 'white', textDecoration: 'none' }}>
                      View
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;

