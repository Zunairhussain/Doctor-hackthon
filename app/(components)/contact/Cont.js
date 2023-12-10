"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import img1 from "../../assests/contact.jpg"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to a server or API)
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{display: "flex"}}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <br/>
        <br/>
        <br/>
        <label>
          Name:
   
        </label>
        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />   

        <label>
          Email:
         
        </label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />


        <label>
          Phone Number:
  
      </label>
      <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

        <label>
          Message:
         </label><textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

        <br />

        <button type="submit" >Submit</button>
           </form>
           <div> <Image src={img1}  style={{width : "600px" , height : "500px", marginTop : "40px", marginLeft : "30px"}} /></div> 
    </div>
  );
};

export default Contact;