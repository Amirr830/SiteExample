'use client'
import React from 'react';
import "./supportstyle.css";
import Link from 'next/link';
import PrivateRoute from "../auth/private";
import { getCookie, setCookie } from 'cookies-next';

export default function index() {
  return (
    <PrivateRoute>
      <div className="mt-3 container" style={{ direction: "rtl" }}>


        <div class="hstack gap-3">
          <div class="p-1">
          <div className="navbar">
            <div className="account-info">
              <img src="/111.jpg" alt="Profile Picture" className="profile-pic" />
              <span className="text-black username">username </span>
            </div>
          </div>
          </div>
          <div class="p-2 ms-auto"></div>
          <div class="p-2">
          <Link href="/login">
            <button className='btn btn-danger' onClick={(e) => {
              setCookie('login', '')
              console.log('AAAAAAAAAAAAAAA', getCookie('login'))
            }}>خروج</button>
          </Link>
          </div>
        </div>


        <main>
          <section id="support" className="section support-section">
            <Link href="/ticket" style={{ textDecoration: "none" }}><p className='text-white text-5xl text-center mt-14 ' style={{ textDecoration: "none" }}>پشتیبانی</p></Link>
            <p className='text-white text-center text-lg' style={{ textDecoration: "none" }}>ارسال تیکت جدید و پیگیری تیکت </p>
          </section>
          <Link href="/finance" style={{ textDecoration: "none" }}><section id="financial" className="section financial-section" style={{ textDecoration: "none" }}>
            <p className='text-white text-5xl text-center mt-12' style={{ textDecoration: "none" }}>مالی</p>
            <p className='text-white text-center text-lg' style={{ textDecoration: "none" }}>مدیریت و بررسی امور مالی</p>
          </section></Link>
          <Link href="/ip" className='text-white text-center' style={{ textDecoration: "none" }}><section id="change-ip" className='text-white section change-ip-section text-center' style={{ textDecoration: "none" }}>
            <p className='text-white text-5xl text-center mt-14' style={{ textDecoration: "none" }}>تغییر IP</p>
            <p className='text-white text-lg text-center' style={{ textDecoration: "none" }}>امکان تغییر آدرس IP</p>
          </section></Link>
          <Link href="/question" className='text-white text-center mt-14' style={{ textDecoration: "none" }}><section id="faq" className='text-white section faq-section text-center' style={{ textDecoration: "none" }}>
            <p className='text-white text-5xl text-center mt-12' style={{ textDecoration: "none" }}>سوالات متداول</p>
            <p className='text-white text-lg text-center' style={{ textDecoration: "none" }}>پاسخ به سوالات پر تکرار کاربران</p>
          </section></Link>

        </main>






      </div>
    </PrivateRoute>
  )
}

