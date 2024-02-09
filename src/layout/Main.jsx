import React from 'react';
import Header from '../components/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Foter from '../components/Shared/Header/Foter/Foter';
import Servise from '../components/Servise/Servise';
import About from '../components/About/About';
import Faq from '../components/Faq/Faq';
import Contact from '../components/Contact/Contact';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
           
            
            <Foter></Foter>
            
        </div>
    );
};

export default Main;