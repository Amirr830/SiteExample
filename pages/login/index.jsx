

"use client"
import React from 'react';
import Link from 'next/link';
import PublicRoute from '../../app1/auth/public';
import { getCookie, setCookie } from "cookies-next";
import Header from "../component/header/index"
import Footer from "../component/footer/index"
import { useState } from 'react';
import { useRouter } from 'next/router';


export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      router.push('/supports');
    } else {
      alert(data.message || 'Login failed');
    }
  };
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (

    <PublicRoute>

      <div>

        <Header />
        <div className=" support-section container mt-20" style={{ direction: "rtl" }}>

          <br /><br /><br />

          <div className='container' style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
            <div className="login-container ">
              <p className='text-center text-5xl '>لطفا ابتدا وارد شوید</p>
              <br /><br />
              <form onSubmit={handleSubmit}>
                <p className='text-2xl'>ورود</p>
                <label htmlFor="username" >نام کاربری:</label>
                <input type="text" name="username" placeholder="نام کاربری خود را وارد کنید..." onChange={handleChange} autoComplete='off' />

                <label htmlFor="password">رمز عبور:</label>
                <input type="password" name="password" placeholder="رمز عبور خود را وارد کنید..." onChange={handleChange} autoComplete='off' />

                <button type="submit" onClick={(e) => {
                  setCookie("login", { username, password })

                }}>ورود</button >
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="p-3">
                        <Link href="/forgotpass" style={{ textDecoration: "none", fontSize: 15 }} className="forgot-password">فراموشی رمز عبور</Link>
                      </div>






              </form>
            </div>
          </div>





        </div><br /><br /><br /><br />

        <Footer />
      </div>
    </PublicRoute>






  );
}
