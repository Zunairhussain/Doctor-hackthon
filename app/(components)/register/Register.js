"use client"
import Image from 'next/image';
import { useState } from 'react';
import img1 from "../../assests/doctor.jpg"

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    specialty: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to the server)

    // For demonstration purposes, let's just log the form data for now
    console.log('Form Data:', formData);
  };

  return (
    <div  style={{ display : 'flex' , marginTop : "30px"}}>
      <h1 className='heading1'>Doctor Registration</h1>
      <form onSubmit={handleSubmit} style={{marginLeft : "40px", marginTop : "60px"}}>
        <label>
          First Name:
        </label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />

        <label>
          Last Name:

        </label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        
        <label>
          Email:
          </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>
          Specialty:

        </label>
        <input type="text" name="specialty" value={formData.specialty} onChange={handleChange} />
        {/* Add more fields as needed */}

        <button style={{borderBlock: "5px",marginBottom : "30px", borderRadius : "5px"}}>Register</button>
       </form>
       <div><Image style={{marginLeft : "20px" , marginTop : "30px"}} src={img1}/></div>
    </div>
  );
};

export default Register;
