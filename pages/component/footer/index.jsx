"use client"
import React from 'react';
// import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../../styles/footer.module.css";
import Link from 'next/link';
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { SiTelegram } from "react-icons/si";






const Footer = () => {
  return (



    <footer className="bg-dark text-white pt-5 pb-3" style={{ direction: "rtl" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <img src="/logo-ebtekar.svg" alt="" />
          </div>
          <div className="col-md-3 mb-4">
            <h2 className='text-blue-600'>خدمات</h2>

            <p><Link href={"/"} className="text-white text-right" style={{ textDecoration: "none" }}>خانه</Link></p>
            <p><Link href={"/about"} className="text-white text-center" style={{ textDecoration: "none" }}>درباره ما</Link></p>
            <p><Link href={"/contact"} className="text-white text-center" style={{ textDecoration: "none" }}>ارتباط با ما</Link></p>

          </div>
          <div className="col-md-3 mb-4">
            <h2 className='text-blue-600'>تماس با ما</h2>
            <p>ایمیل: info@example.com</p>
            <p>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
          </div>
          <div className="col-md-3 mb-4">
            <h2 className='text-blue-600'>شبکه‌های اجتماعی</h2>

            <div className="container text-center">
              <div className="row align-items-center">
                <div className="col">
                  <a href="##" style={{textDecoration:"none" , color:"white"}}><h4 className={styles.logo}><RiInstagramFill /></h4></a>
                  
                </div>
                <div className="col">
                  <a href="##" style={{textDecoration:"none" , color:"white"}}><h4 className={styles.logo}><SiTelegram /></h4></a>
                </div>
                <div className="col">
                  <a href="##" style={{textDecoration:"none" , color:"white"}}><h4 className={styles.logo}><FaFacebook /></h4></a>
                </div>
                <div className="col">
                  <a href="##" style={{textDecoration:"none" , color:"white"}}><h4 className={styles.logo}><FaTwitter /></h4></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>











































  );
};

export default Footer;
