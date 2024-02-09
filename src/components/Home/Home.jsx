import React from 'react';
import './Home.css'
import baner from '../../assets/imges/baner2.jpg'
import Slaider from '../Slider/Slaider';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${baner})`}}>
  <div className="hero-overlay bg-opacity-80"></div>
  {/* <div className="hero-content text-center text-neutral-content"> */}

    <div className=' container mx-auto justify-between'>
       <div className='text-center text-white pb-10 mb-10 w-full'>
        <h1 className=' text-5xl font-bold mb-5 text-[#FFF]'>Welcome to digital marketing..</h1>
        <p className='text-2xl'>We all are create you, It company service members. All times we ready to perfect your self, that's it ... </p>
        <button className='bottona border rounded my-5 p-3'>Learn more</button>

       </div>


       {/* swiper  */}
       <div className='w-full'>

       <Slaider></Slaider>
     
       </div>
    </div>
   
  {/* </div> */}
</div>
        </div>
    );
};

export default Home;