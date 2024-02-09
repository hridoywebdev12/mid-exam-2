import React from 'react';
import './About.css'
import companyImage from '../../assets/imges/company.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className='container mx-auto'>
            <h1 className='font-bold text-6xl text-[#FFF] text-center py-5 m-5'>About Us</h1>
                <div className='flex justify-between '>
                <div className= ' py-10 text-white'>
                    
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, temporibus.</p> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, architecto cupiditate tenetur inventore magnam recusandae veniam commodi itaque quos similique!</p> <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus iusto architecto nesciunt tempore fugiat assumenda? Sunt minus voluptatibus dolorem non nobis voluptate corrupti, a animi, officiis doloribus nam enim fugit!</p>
                    <button className='aboutboton border rounded my-5 p-3'>learn more</button>

                </div>
                <div>
                    <img className='mt-5 ps-5' src={companyImage} alt="" />
                </div>
                </div>

            </div>
        </div>
    );
};

export default About;