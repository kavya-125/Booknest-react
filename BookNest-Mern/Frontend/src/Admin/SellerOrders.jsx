import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Anavbar from './Anavbar';

const SellerOrders = () => {
  const { sellerId } = useParams();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (sellerId) {
      fetch(`http://localhost:4000/getsellerorders/${sellerId}`)
        .then(res => res.json())
        .then(data => setOrders(data))
        .catch(err => console.error('Error fetching seller orders:', err));
    }
  }, [sellerId]);

  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);
    return formattedDeliveryDate >= currentDate ? 'ontheway' : 'delivered';
  };

  return (
    <div>
      <Anavbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-center text-blue-300">Seller Orders</h1>
        {orders.length === 0 ? (
          <div className="text-center text-gray-500 text-xl mt-10">No orders found for this seller.</div>
        ) : (
          orders.map((item) => {
            const status = calculateStatus(item.Delivery);
            return (
              <Card
                key={item._id}
                style={{
                  width: '90%',
                  margin: '30px auto',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  paddingTop: '15px',
                  marginBottom: '35px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <div>
                    <img src={`http://localhost:4000/${item?.itemImage}`} alt={item.itemtype + ' Image'} style={{ height: '80px' }} />
                  </div>
                  <div>
                    <p>Product Name:</p>
                    <p>{item.booktitle}-{item._id.slice(3, 7)}</p>
                  </div>
                  <div>
                    <p>Order id:</p>
                    <p>{item._id.slice(0, 10)}</p>
                  </div>
                  <div>
                    <p>Address:</p>
                    {item.flatno},<br />{item.city},({item.pincode}),<br />{item.state}.
                  </div>
                  <div>
                    <p>Buyer</p>
                    <p>{item.userName}</p>
                  </div>
                  <div>
                    <p>Seller</p>
                    <p>{item.seller}</p>
                  </div>
                  <div>
                    <p>BookingDate</p>
                    <p>{item.BookingDate}</p>
                  </div>
                  <div>
                    <p>Delivery By</p>
                    <p>{item.Delivery}</p>
                  </div>
                  <div>
                    <p>Warranty</p>
                    <p>1 year</p>
                  </div>
                  <div>
                    <p>Price</p>
                    <p>{item.totalamount}</p>
                  </div>
                  <div>
                    <p>Status</p>
                    <p>{status}</p>
                  </div>
                </div>
                {/* <Button as={Link} to={`/sellerorders/${item._id}`} style={{ marginBottom: '12px' }}>
                  view
                </Button> */}
              </Card>
            );
          })
        )}
        <div className="text-center mt-4">
          <Button as={Link} to="/sellers" variant="primary">Close</Button>
        </div>
      </div>
    </div>
  );
};

export default SellerOrders;
