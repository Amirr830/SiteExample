"use client"


import React from 'react';
import './ServicesSection.css';

const services = [
  { title: 'خدمات طراحی وب', description: 'طراحی و توسعه وبسایت‌های واکنشگرا و زیبا.' },
  { title: 'خدمات سئو', description: 'بهینه‌سازی وبسایت برای موتورهای جستجو و افزایش رتبه.' },
  { title: 'خدمات بازاریابی دیجیتال', description: 'کمپین‌های تبلیغاتی آنلاین و تحلیل داده‌ها.' },
];

function ServicesSection() {
  return (
    <section id="services" className="services" style={{direction:"rtl"}}>
      <h2>خدمات ما</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service">
            <a href="#####" style={{textDecoration:"none" , color:"black"}}><h3>{service.title}</h3></a>
            <a href='####' style={{textDecoration:"none" , color:"black"}}><p>{service.description}</p></a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
