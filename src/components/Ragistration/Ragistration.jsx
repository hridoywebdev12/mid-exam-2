import React, { useContext, useState } from 'react';
import './Ragistration.css'
import { Link, NavLink } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { AuthContext } from '../../Context/UserContext';
import { Result } from 'postcss';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";





const Ragistration = () => {
    // const auth = getAuth(app);

    const {createUser,goggleLogin} = useContext(AuthContext)

    const [success,setSuccess] = useState(false)
    const [error,setError] = useState(null)
    // const [user, getUser] = useState([])



    const handleRegistration =(event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.FullName.value;
        const email =form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user);

        })
        .catch(error =>{
            console.log(error);
        })



        // console.log(name,email,password);


        // registataion athountication farebae
        // createUserWithEmailAndPassword(auth, email, password)
        // .then(result =>{
        //     const user = result.user;
        //     console.log(user);
        //     setSuccess(true)
            
        //     setError(null)
        // })
        // .catch(error => {
        //     const errorCode =error.code;
        //     const errorMassage = error.message;
        //     setError(errorMassage)
        //     setSuccess(false)
        // });



    }
    const handleGoogleLogin=()=>{
        goggleLogin()
        .then(result =>{
            const user = result.user
            console.log(user);

        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className='my-11 py-10'>
            <div className='container mx-auto'>

<div className="boxo">
<span className="borderline"></span>
<form onSubmit={handleRegistration} >
<h2 className=''>Registration </h2>

<div className="inputbox">
    <input type="text" name='FullName' required="required"/>
    <span>User Name</span>
    <i></i>
</div>
<div className="inputbox">
    <input type="text" name='email' required="required"/>
    <span>Email</span>
    <i></i>
</div>

<div className="inputbox flex">
    <input type="text" name='password' required="required"/>
    <span>Password</span>
    <NavLink className='text-[#CBFF00] mt-6 pr-3 z-10'> <FaEye /></NavLink>
   

    <i></i>
</div>

<div class="links">
    <Link to='/login' className='label-text-alt link link-hover' href="#">Already have an acount?  please login</Link>
    {/* <a href="#">Signup </a> */}
    
</div>


{
    success && <p className='text-[#CBFF00]'>Registration done</p>
}

{
    <p className='text-[#CBFF00] py-1'>{error}</p>
}

<div className='icon flex justify-center gap-2 my-2'>
    
<NavLink onClick={handleGoogleLogin} className='text-[#CBFF00] '> <FaGoogle /></NavLink>
<NavLink className='text-[#CBFF00] '><FaGithub /></NavLink>
</div>

<input type="submit" value="registration"/> 





</form>

</div>




</div>
        </div>
        </div>
    );
};

export default Ragistration;