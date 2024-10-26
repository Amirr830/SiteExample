"use client"
import React from 'react';
import './Footer.css';
import Link from 'next/link';
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { SiTelegram } from "react-icons/si";






const Footer = () => {
  return (
    // <footer className="footer" style={{direction:"rtl"}}>
    //   <div className="footer-container">
    //     <div className="footer-section ml-10 mt-20">
    //       <h2>لینک‌های مهم</h2>
    //       <ul>
    //         <Link href={"/"} style={{textDecoration:"none" , color:"white"}}><li className='text-white social-links footer-section'>خانه</li></Link>
    //         <Link href={"/contact"} style={{textDecoration:"none" , color:"white"}}><li className='text-white social-links footer-section'>ارتباط با ما</li></Link>
    //         <Link href={"/about"} style={{textDecoration:"none" , color:"white"}}><li className='text-white social-links footer-section'>درباره ما</li></Link>
    //         <Link href={"/support"} style={{textDecoration:"none" , color:"white"}}><li className='text-white social-links footer-section'>پشتیبانی</li></Link>
    //       </ul>
    //     </div>
    //     <div className="footer-section mt-20">  
    //       <h2 className='justify-end text-right'>شبکه‌های اجتماعی</h2>
    //       <div className="social-links ml-10" >
    //       <a href="https://twitter.com"><FaTwitter className='location' style={{fontSize:"22"}}/></a>
    //       <a href="https://facebook.com"><FaFacebook className='location' style={{fontSize:"22"}}/></a>
    //       <a href="https://instagram.com"><RiInstagramFill className='location' style={{fontSize:"22"}}/></a>
    //       <a href="https://linkedin.com"><SiTelegram className='location' style={{fontSize:"22"}}/></a>

    //       </div>
    //     </div>
    //     <div className="footer-section mt-20">
    //       <h2>اطلاعات تماس</h2>
    //       <p>آدرس: خیابان فرامرز عباسی، شهر مشهد</p>
    //       <p>تلفن: 123-456-7890</p>
    //       <p>ایمیل: info@example.com</p>
    //     </div>
    //     <img src="/logo-ebtekar.svg" alt="dd" className="mb-20 rounded-full " width={180} height={80} />

    //   </div>

    // </footer>



    <div className=' footer'>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col-3 col-md-3">
            <img src="/logo-ebtekar.svg" alt="dd" className="mb-20 rounded-full " width={180} height={80} />
          </div>
          <div className="col-3 col-md-3 footer-section">
            <h2>اطلاعات تماس</h2>
            <p>آدرس: خیابان فرامرز عباسی، شهر مشهد</p>
            <p>تلفن: 123-456-7890</p>
            <p>ایمیل: info@example.com</p>
          </div>
          <div className="col-3 col-md-3 footer-section">
            <h2 className='justify-end ss text-right'>شبکه‌های اجتماعی</h2>
            <div className="social-links">
              <a href="https://twitter.com"><FaTwitter className='location' style={{ fontSize: "22" }} /></a>
              <a href="https://facebook.com"><FaFacebook className='location' style={{ fontSize: "22" }} /></a>
              <a href="https://instagram.com"><RiInstagramFill className='location' style={{ fontSize: "22" }} /></a>
              <a href="https://linkedin.com"><SiTelegram className='location' style={{ fontSize: "22" }} /></a>
            </div>
          </div>
          <div className="col-3 col-md-3">
            <div className="footer-container">
              <div className="footer-section">
                <h2>لینک‌های مهم</h2>
                <ul>
                  <Link href={"/"} style={{ textDecoration: "none", color: "white" }}><li className='text-white social-links footer-section'>خانه</li></Link>
                  <Link href={"/contact"} style={{ textDecoration: "none", color: "white" }}><li className='text-white social-links footer-section'>ارتباط با ما</li></Link>
                  <Link href={"/about"} style={{ textDecoration: "none", color: "white" }}><li className='text-white social-links footer-section'>درباره ما</li></Link>
                  <Link href={"/support"} style={{ textDecoration: "none", color: "white" }}><li className='text-white social-links footer-section'>پشتیبانی</li></Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
</div>




      </div>




      );
};

      export default Footer;
