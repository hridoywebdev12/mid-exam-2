import React from 'react';
import contactimg from '../../assets/imges/busnestratigy.jpg'
import mittingRom from '../../assets/imges/mittingrom.jpg'

const Contact = () => {
    return (
        <div className='bg-[#FFF]'>


           <div className=' my-10 py-11 container mx-auto flex justify-between text-white'>

           <div className='w-full text-black'>
                <div>
                    <h1 className='font-bold text-2xl'>Call Us</h1>
                    <p>1254 (4512,)</p>
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>Location</h1>
                    <p>1254 (4512,)</p>
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>Buisnes Hour</h1>
                    <p>1254 (4512,)</p>
                </div>
            </div>


            <div className='w-full text-black'>
                <h1 className='font-bold text-4xl'> Contact || us</h1>

               <div>
                <h1>Name</h1>
               <input type="text" placeholder='name' />
               </div>
               <div>
                <h1>Name</h1>
               <input type="text" placeholder='email' />
               </div>
               <div>
                <h1>Bio</h1>
               <input type="text" placeholder='name' className='w-full' />
               </div>
            </div>

           </div>


           <div className='container mx-auto'>
           <div className=" pb-10 diff aspect-[16/9]">
  <div className="diff-item-1">
    <img alt="daisy" src={mittingRom} />
  </div>
  <div className="diff-item-2">
    <img alt="daisy" src={contactimg} />
  </div>
  <div className="diff-resizer"></div>
</div>
           </div>
           
          
        </div>
    );
};

export default Contact;