import React from 'react'
import Image from 'next/image'
import img1 from "../assests/2.jpg"
import Header from '../(components)/header/Header'
export default function Patient () {
  return (
    <>
    <Header />
    <div className='name'>Patient Registration </div>
   <div className='doctor' style={{marginTop : "20px",display : 'flex'}}>
     <form action="#" method="post">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="date">Appointment Date:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="time">Appointment Time:</label>
        <input type="time" id="time" name="time" required />

        <label htmlFor="message">Additional Information:</label>
        <textarea id="message" name="message" rows="4"></textarea>

        <input type="submit" value="Book Appointment" />
      </form>
      <div style={{padding :"10px" , marginLeft : "20px"}}><Image src={img1} />
 </div>
        </div>
    </>
    )
}
