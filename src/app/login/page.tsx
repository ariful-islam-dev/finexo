'use client'
import SignUp from '@/components/Authentication/SignUp';
import LoginCom from '@/components/Authentication/Login';
import Footer from '@/components/Footer';
import HeroArea from '@/components/HeroArea';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const Login = () => {
    const [login, setLogin]=useState<boolean>(false)

    const handleLogin=()=>{
        setLogin(!login)
    }

    return (
        <div>
            <HeroArea path="/login">
                <Navbar path='/login' />
            </HeroArea>
           {
            login ? <SignUp handleLogin={handleLogin} /> : <LoginCom handleLogin={handleLogin} />
           }
            <Footer />
        </div>
    );
};

export default Login;