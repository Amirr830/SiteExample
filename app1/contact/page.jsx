"use client"

import React from 'react';
// import './ContactSection.css'; // فایل CSS برای استایل



const ContactSection = () => {
  return (
    <section className="contact-section" style={{direction:"rtl"}}>
      <div className="contact-content">
        <h1>تماس با ما</h1>
        <div className="contact-form">
          <h2>فرم تماس</h2>
          <form>
            <label htmlFor="name">نام:</label>
            <input type="text" id="name" name="name" placeholder="نام خود را وارد کنید" required />
            
            <label htmlFor="email">ایمیل:</label>
            <input type="email" id="email" name="email" placeholder="ایمیل خود را وارد کنید" required />
            
            <label htmlFor="message">پیام:</label>
            <textarea id="message" name="message" rows="6" placeholder="پیام خود را بنویسید" required></textarea>
            
            <button type="submit">ارسال</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>اطلاعات تماس</h2>
          <p><strong>آدرس:</strong> خیابان مثال، شهر مثال</p>
          <p><strong>تلفن:</strong> 123456789</p>
          <p><strong>ایمیل:</strong> support@example.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
