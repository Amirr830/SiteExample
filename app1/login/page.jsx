"use client"
import React from 'react';
import './stylee.css';
import Link from 'next/link';
import PublicRoute from '../../app1/auth/public';

import { getCookie, setCookie } from "cookies-next";


const SupportSection = () => {
  return (
    <PublicRoute>
      <div className="support-section container mt-5" style={{ direction: "rtl" }}>

        <br /><br />



        <div className="container">
          <p className='text-center text-5xl mb-3'>لطفا ابتدا وارد شوید</p>
          <div className="login-container locati">
           
            <p className='text-2xl'>ورود</p>
            <label for="username" >نام کاربری:</label>
            <input type="text" id="username" name="username" required autoComplete='off' />

            <label for="password">رمز عبور:</label>
            <input type="password" id="password" name="password" required />
 
            <Link href="/supports">
              <button
                type="submit"
                onClick={(e) => {
                  console.log(getCookie('login'))
                  setCookie("login", { username: 'asfasas', password: 'ssafsf' })
 


                }}
              >ورود</button>
            </Link>


            <div className="container px-4 text-center">
              <div className="row gx-5">
                <div className="col">
                  <div className="p-3">
                    <Link href="/forgotpass" style={{ textDecoration: "none", fontSize: 15 }} className="forgot-password">فراموشی رمز عبور</Link>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <Link href="/register" style={{ textDecoration: "none", fontSize: 15 }} className="forgot-password">ثبت نام</Link>
                  </div>
                </div>
              </div>
            </div>







         
          </div>
        </div>



































        <div className="chat-button-container">
          <label for="chat-toggle" className="chat-button">💬</label>
        </div>

        <input type="checkbox" id="chat-toggle" className="chat-toggle" />


        <div className="chat-window">
          <div className="chat-header">
            <span>چت با ما</span>
            <label for="chat-toggle" className="close-button">×</label>
          </div>
          <div className="chat-content">
            <p>سلام! چطور می‌توانیم به شما کمک کنیم؟</p>
          </div>
          <div className="chat-input">
            <textarea placeholder="پیام خود را وارد کنید..."></textarea>
          </div>
        </div>















      </div>
    </PublicRoute>
  );
};

export default SupportSection;
