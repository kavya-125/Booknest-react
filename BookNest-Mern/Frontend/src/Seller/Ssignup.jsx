import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Ssignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, password };

    axios
      .post("http://localhost:4000/ssignup", payload)
      .then((result) =>{
        alert('Account created')
        console.log(result)
        navigate('/slogin')
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create an account");
      });
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/slogin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-blue-400">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-2xl relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-indigo-700">Seller Registration</h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm"
              placeholder="Email address"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            >
              Signup
            </button>
          </div>
          <p className="text-sm text-gray-600 text-center">
            Already have an account?{' '}
            <button
              onClick={formHandle1}
              className="text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            >
              Login
            </button>
          </p>
        </form>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-400 opacity-10 rounded-xl z-0"></div>
      </div>
    </div>
  );
};

export default Ssignup;
