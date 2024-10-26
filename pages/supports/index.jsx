

"use client"
import Link from 'next/link';
import React from 'react';
import PrivateRoute from "../auth/private";
import Header from "../component/header/index";
import Footer from '../component/footer/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../styles/support.module.css";
import { setCookie } from 'cookies-next';



function supports() {
  return (
    <PrivateRoute>

      <div className=' mt-24'>
        <Header />
        <div className='container'>

          <div className="hstack gap-3 mt-20">
            <div className="p-2">
              <Link href="/login">
                <button className='btn btn-danger' onClick={()=>{
                  setCookie("login","")
                }}>خروج</button>
              </Link>
            </div>
            <div className="p-2 ms-auto">
              <h5 className="text-black username mt-3">username </h5>

            </div>
            <div className="p-2">
              <img src="./111.jpg" width={50} height={50} className='rounded-full img-fluid' alt="" />

            </div>
          </div>




          <div className="row g-0 text-center">
            <div className="col-1 col-md-1"></div>
            <div className="col-sm-10 col-md-10">
              <h1>درخواست خود را انتخاب کنید</h1>
              <h3><Link href={"./ticket"} style={{ textDecoration: "none", color: "white" }}>
                <div className={styles.back}><br />
                  <h1>ارسال تیکت</h1>
                  <p className='text-white text-center text-lg' style={{ textDecoration: "none" }}>ارسال تیکت جدید و پیگیری تیکت </p>
                </div>
              </Link>
              </h3>
              <br />

              <h3><Link href={"./finance"} style={{ textDecoration: "none", color: "white" }}>
                <div className={styles.image}><br />
                  <h1> مالی</h1>
                  <p className='text-white text-center text-lg' style={{ textDecoration: "none" }}>مدیریت و بررسی امور مالی</p>

                </div>
              </Link>
              </h3>
              <br />

              <h3><Link href={"./ip"} style={{ textDecoration: "none", color: "white" }}>
                <div className={styles.imagee}><br />
                  <h1> تغییر IP</h1>
                  <p className='text-white text-lg text-center' style={{ textDecoration: "none" }}>امکان تغییر آدرس IP</p>

                </div>
              </Link>
              </h3>
              <br />

              <h3><Link href={"./question"} style={{ textDecoration: "none", color: "white" }}>
                <div className={styles.imageee}><br />
                  <h1> سوالات متداول</h1>
                  <p className='text-white text-lg text-center' style={{ textDecoration: "none" }}>پاسخ به سوالات پر تکرار کاربران</p>

                </div>
              </Link>
              </h3>


            </div>
            <div className="col-1 col-md-1"></div>
          </div>



          <br />











        </div>
        <Footer />
      </div>
    </PrivateRoute>

  )
}

export default supports;