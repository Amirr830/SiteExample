"use client"

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={{direction:"rtl"}}>
      <header className="header">
        <h1 className='text-3xl items-center justify-center flex flex-col'>درباره ما</h1>
      </header>
      <main className="main-content">
        <section className="introduction">
          <h2>معرفی شرکت</h2>
          <p>
            ما یک شرکت پیشرو در صنعت فناوری اطلاعات هستیم که در ارائه راهکارهای نوآورانه و با کیفیت به مشتریان خود تخصص داریم. تیم ما متشکل از افراد با تجربه و خلاق است که به دنبال ایجاد راه‌حل‌های منحصر به فرد برای چالش‌های شما هستند.
          </p>
        </section>
        
        <section className="history">
          <h2>تاریخچه ما</h2>
          <p>
            از زمان تأسیس در سال 2010، ما به طور مداوم در حال رشد و توسعه بوده‌ایم. در این سال‌ها، ما پروژه‌های موفق زیادی را به اتمام رسانده و به اعتماد مشتریان خود پاسخ داده‌ایم.
          </p>
        </section>
        
        <section className="team">
          <h2>تیم ما</h2>
          <div className="team-member">
            <img src="/userr.jpg" alt="Team Member" />
            <div>
              <h3>علی رضا</h3>
              <p>مدیر عامل</p>
            </div>
          </div>
          <div className="team-member">
            <img src="/userr.jpg" alt="Team Member" />
            <div>
              <h3>فاطمه احمدی</h3>
              <p>مدیر پروژه</p>
            </div>
          </div>
          {/* تیم اعضای دیگر را اضافه کنید */}
        </section>
        
        <section className="testimonials">
          <h2>نظرات مشتریان</h2>
          <div className="testimonial">
            <p>"این شرکت بهترین خدمات را ارائه می‌دهد. بسیار راضی هستیم!"</p>
            <h4>- محمد</h4>
          </div>
          <div className="testimonial">
            <p>"تجربه کار با این تیم بسیار لذت‌بخش بود. همیشه حرفه‌ای و پاسخگو هستند."</p>
            <h4>- سارا</h4>
          </div>
 
        </section>
        
        <section className="contact">
          <h2>تماس با ما</h2>
          <p>
            برای ارتباط با ما، لطفاً از طریق اطلاعات زیر با ما تماس بگیرید:
          </p>
          <p>
            <strong>ایمیل:</strong> info@example.com
          </p>
          <p>
            <strong>تلفن:</strong> +123 456 7890
          </p>
          <p>
            <strong>آدرس:</strong> خیابان نمونه، تهران، ایران
          </p>
        </section>
      </main>

    </div>
  );
}

export default App;
