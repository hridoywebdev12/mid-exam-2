import React from 'react';
import imaleabout from '../../../../assets/imges/create-you.png'

const Foter = () => {
    return (
        <div className='bg-black text-white py-10'>
          
          <div className='container mx-auto flex justify-between py-10 '>
           <div className='text-justify pr-5'>
           <h1 className='text-2xl my-6 font-bold '>About</h1>
            <img className='w-2/5' src={imaleabout} alt="" />
         <p>Every business and its requirements are unique when it comes to software development. Therefore, understanding and working accordingly becomes crucial. We, at Webixy Technologies Private Limited not only comply with client’s requirements but convert it into reality.</p>
           </div>
           <div className='w-full'>
           <h1  className='text-2xl my-6 font-bold '>Quick links</h1>
           <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Secure Pay</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href=""></a>Blog</li>
           </ul>
            
           </div>
           <div className='w-full'>
           <h1 className='text-2xl my-6 font-bold '>Address</h1>

           <p>Kanpur (Head Office)
Second Floor, 13/391, Green Park, Civil Lines, Kanpur, Uttar Pradesh 208001 <br />
Delhi (Branch)
55 , 2nd floor , lane 2 ,Westend Marg , Saidullajab ,near saket metro station,new delhi, Delhi , 110030 <br />
USA (Branch)
3 Germay Dr, Unit 4 #2174 Wilmington, US</p>
            
           </div>
           <div className='w-full ps-5'>
           <h1  className='text-2xl my-6 font-bold '>Get in Touch</h1>
           <p>
            +91-8368532479
            support@webixytech.com
            hr@webixytech.com</p>
            
           </div>

          </div>


            
        </div>
    );
};

export default Foter;