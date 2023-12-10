// components/LoginCard.js
import React from 'react';
import Header from '../header/Header';

const LoginPage = () => {
  return (
    <>   
    
    <Header />
    
     <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <form style={{textAlign : 'center'}}>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="username">
            Username
          </label>
          <input
          style={{marginLeft : "5px"}}
            type="text"
            id="username"
            name="username"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
          style={{marginLeft : "5px"}}
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <button
        style={{marginLeft : "700px", marginRight : "700px"}}
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
    </>

  );
};

export default LoginPage;
