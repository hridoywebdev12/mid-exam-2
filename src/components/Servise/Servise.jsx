import React from 'react';
import './Servise.css'
import word from '../../assets/imges/word.png'
import excel from '../../assets/imges/excel.png'
import powerpoint from '../../assets/imges/powerpoint.png'
import exces from '../../assets/imges/microsoft execs.png'



const Servise = () => {
    return (
        <div className='service pb-7'>
            <div className='container mx-auto'>
                <h1 className=' font-bold text-6xl text-center pt-10'>What We Do</h1>
                <div className=' boy flex gap-5 justify-between items-center text-justify my-10 bg-white p-10'>
                <div className='cart gap-5'>
                    <img className='w-1/5 ms-28 ' src={word} alt="" />
                    <h1 className='text-2xl font-semibold my-4'>Wordpress</h1>
                    <p>
Microsoft is a technology company that develops and supports software, services, and devices. It operates through three segments: Productivity and Business Processes, Intelligent Cloud, and More Personal Computing.</p>
<button className='botton border rounded my-5 p-3'>Learn more</button>

                   
                </div>
                <div>
                <img className='w-1/5 ms-28' src={excel} alt="" />
                    <h1 className='text-2xl font-semibold my-4'>HTML</h1>
                    <p>
Microsoft is a technology company that develops and supports software, services, and devices. It operates through three segments: Productivity and Business Processes, Intelligent Cloud, and More Personal Computing.</p>
<button className='botton border rounded my-5 p-3'>Learn more</button>
                </div>
                <div>
                <img className='w-1/5 ms-28' src={powerpoint} alt="" />
                    <h1 className='text-2xl font-semibold my-4'>CSS</h1>
                    <p>
Microsoft is a technology company that develops and supports software, services, and devices. It operates through three segments: Productivity and Business Processes, Intelligent Cloud, and More Personal Computing.</p>
<button className='botton border rounded my-5 p-3'>Learn more</button>
                </div>
                <div>
                <img className='w-1/5 ms-28' src={exces} alt="" />
                    <h1 className='text-2xl font-semibold my-4'>React</h1>
                    <p>
Microsoft is a technology company that develops and supports software, services, and devices. It operates through three segments: Productivity and Business Processes, Intelligent Cloud, and More Personal Computing.</p>
<button className='botton border rounded my-5 p-3'>Learn more</button>
                </div>
                </div>
        
            </div>
        </div>
    );
};

export default Servise;