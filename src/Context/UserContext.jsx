import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateCurrentUser, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';



export const AuthContext = createContext();

const auth = getAuth(app);

// goggleloging 
const goggleProvider = new GoogleAuthProvider();



const UserContext = ({children}) => {

        const [user,setUser] = useState({})

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const loginUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const goggleLogin =()=>{
        return signInWithPopup (auth,goggleProvider)
    }

    const logOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('User Observing Running', currentUser);
        })
        return ()=> unsubscrib()
    },[])




    const useInfo = {
        createUser,
        loginUser,
        goggleLogin,
        user,
        logOut
    }

   

    return (
       <AuthContext.Provider value={useInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContext;