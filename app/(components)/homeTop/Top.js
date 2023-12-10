import React from 'react'
import img1 from "../../assests/slider_1.jpg"
import img2 from "../../assests/slider_2.jpg"
import Image from 'next/image';
export default function Top() {
  return (
    <>
    <div>
    <div>
      <div className="slider-detail">

          
            <div style={{display :'flex'}}>
                <div>
              <Image className="d-block w-100" src={img1} alt="First slide" style={{padding : "100px"}} />
              </div>              
              <div className="carousel-caption fvgb d-none d-md-block">
                <h5 className="animated bounceInDown" style={{fontSize : "40px"}}>Doctor Bio-Data</h5>
                <p className="animated bounceInLeft"> Dr. Sarah Thompson is a highly skilled and experienced cardiologist with a passion for providing
          comprehensive cardiovascular care. With over 15 years of practice, she has successfully treated
          numerous patients and has earned a reputation for her commitment to excellence.

          Dr. Thompson completed her medical education at the prestigious University Medical School, where
          she specialized in cardiology. Her dedication to staying at the forefront of medical advancements
          is evident through her continuous pursuit of knowledge and certifications, including being Board Certified in Cardiology.

          Known for her empathetic approach, Dr. Thompson takes the time to understand each patient's unique
          needs and concerns. She believes in fostering open communication and collaboration to ensure the best
          possible outcomes for her patients.

          Whether it's preventive care, diagnostic procedures, or advanced treatments, Dr. Sarah Thompson
          is committed to providing the highest standard of care. Patients appreciate her warm demeanor, expertise,
          and the personalized attention she brings to every consultation.</p>
                <div className="row vbh">
                  <div className="btn btn-info animated bounceInUp"> Book an Appointment </div>
                </div>
              </div>
            </div>
        
              <div style={{display : "flex"}} >

                
                <p className="animated bounceInLeft" style={{marginLeft : "50px"}}>
                <h3 className="animated bounceInDown" style={{fontSize : "30px"}}>Best  Clinic Sourecs</h3><br/>
 
                    
                    
                    A doctor's clinic is a crucial component of the healthcare system, serving as a primary point of contact for individuals seeking medical care. These clinics come in various forms, ranging from general practitioners' offices to specialized clinics focusing on specific medical fields. The primary goal of a doctor's clinic is to provide comprehensive and accessible healthcare services to patients, promoting both preventive care and the treatment of various medical conditions.

Key Features of a Doctor's Clinic:

Medical Staff:

General Practitioners (GPs) or family doctors are often the first point of contact in a clinic. They diagnose and treat a wide range of health issues and may refer patients to specialists when needed.
Specialized clinics may have doctors with expertise in specific areas such as pediatrics, dermatology, cardiology, or orthopedics.
Facilities:

Clinics are equipped with examination rooms, diagnostic equipment, and facilities for minor procedures. Some may also have partnerships with external laboratories for tests and imaging services.
Waiting areas provide a comfortable space for patients before their appointments.
Administrative Staff:

Receptionists manage appointments, handle patient inquiries, and maintain medical records. They play a crucial role in the smooth functioning of the clinic.
Billing and administrative staff handle insurance claims and ensure the financial aspects of healthcare services are managed efficiently.</p>
               
                <div><Image className="d-block w-100" src={img2} alt="Third slide" style={{marginLeft : "100px" ,width :"1090px"}}  /></div>
              </div>
          
              <div style={{display :'flex'}}>
                <div>
              <Image className="d-block w-100" src={img1} alt="First slide" style={{padding : "100px"}} />
              </div>              
              <div className="carousel-caption fvgb d-none d-md-block">
                <h5 className="animated bounceInDown" style={{fontSize : "40px"}}>Doctor Bio-Data</h5>
                <p className="animated bounceInLeft"> Dr. Sarah Thompson is a highly skilled and experienced cardiologist with a passion for providing
          comprehensive cardiovascular care. With over 15 years of practice, she has successfully treated
          numerous patients and has earned a reputation for her commitment to excellence.

          Dr. Thompson completed her medical education at the prestigious University Medical School, where
          she specialized in cardiology. Her dedication to staying at the forefront of medical advancements
          is evident through her continuous pursuit of knowledge and certifications, including being Board Certified in Cardiology.

          Known for her empathetic approach, Dr. Thompson takes the time to understand each patient's unique
          needs and concerns. She believes in fostering open communication and collaboration to ensure the best
          possible outcomes for her patients.

          Whether it's preventive care, diagnostic procedures, or advanced treatments, Dr. Sarah Thompson
          is committed to providing the highest standard of care. Patients appreciate her warm demeanor, expertise,
          and the personalized attention she brings to every consultation.</p>


        </div>
      </div>

     </div>
    </div>
    </div>
</>
);
};

