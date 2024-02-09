import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, NavLink } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { AuthContext } from '../../Context/UserContext';
import { Result } from 'postcss';

// import { Input } from 'postcss';
// import { Form } from 'react-router-dom';

const Login = () => {
    // const auth = getAuth(app);
const {loginUser} = useContext(AuthContext)

    // massage error 
    const [error,setError] = useState(null)
    const [success,setSuccess] = useState(false)
    // const [already,setAlready]= useState(false)





// login athontication
    const handleLogin =(event)=>{
        event.preventDefault()
        const form = event.target;
     
        const email =form.email.value;
        const password = form.password.value;
        loginUser(email,password)
        .then(result=>{
            const user = result.user
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })

        // console.log(email,password);


        // login athountication farebae
        // signInWithEmailAndPassword(auth, email, password)
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


    return (
        <div className='my-11 py-10'>
            <div className='container mx-auto'>

<div className="box">
<span className="borderline"></span>
<form onSubmit={handleLogin}>
<h2>Sign in</h2>

<div className="inputbox">
    <input type="text" name='email' required="required"/>
    <span>Email</span>
    <i></i>
</div>

<div className="inputbox flex">
    <input type="text" name='password' required="required"/>
    <span>Pasword</span>
    <NavLink className='text-[#CBFF00] mt-6 pr-3 z-10'> <FaEye /></NavLink>
    <i></i>
</div>

<div class="links">
    <Link to='/ragistration' href="#">Don't have an account? Please Register</Link>
    <a href="#">Signup </a>
</div>

{
    <p className='text-[#CBFF00] py-1'>{error}</p>
}

{
    success && <p className='text-[#CBFF00]'>Login done</p>
}

{/* {
    already && <p className='text-[#CBFF00]'>Already exgist</p>
} */}

<input type="submit" value="Login"/> 
</form>

</div>




</div>
        </div>
    );
};

export default Login;