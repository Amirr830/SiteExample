// "use client"


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import './ServicesSection.css';
// import styles from "../../styles/servicemain.module.css"
// import Header from "../component/header/index"
// import Footer from "../component/footer/index"


// const services = [
//   { title: 'خدمات طراحی وب', description: 'طراحی و توسعه وبسایت‌های واکنشگرا و زیبا.' },
//   { title: 'خدمات سئو', description: 'بهینه‌سازی وبسایت برای موتورهای جستجو و افزایش رتبه.' },
//   { title: 'خدمات بازاریابی دیجیتال', description: 'کمپین‌های تبلیغاتی آنلاین و تحلیل داده‌ها.' },
// ];

// function ServicesSection() {
//   return (
//     <div  >

//       <Header /><br /><br />
//       <div className="main mt-24" style={{ direction: "rtl" }}>

//         <p className='text-center text-6xl'>خدمات ما</p>

//         <div class="container text-center">
//           <div class="row align-items-center">
//             <div class="col-lg-4 col-md-6 col-12">
//               <a href="##" style={{ textDecoration: "none" }}>
//                 <div class="service-box text-black">
//                   <h1>خدمات 1</h1>
//                   <p>توضیحات خدمات 1</p>
//                 </div>
//               </a>
//             </div>
//             <div class="col-lg-4 col-md-6 col-12">
//             <a href="##" style={{ textDecoration: "none" }}>
//                 <div class="service-box text-black">
//                   <h1>خدمات 2</h1>
//                   <p>توضیحات خدمات 2</p>
//                 </div>
//               </a>
//             </div>

//             <div class="col-lg-4 col-md-6 col-12">
//             <a href="##" style={{ textDecoration: "none" }}>
//                 <div class="service-box text-black">
//                   <h1>خدمات 3</h1>
//                   <p>توضیحات خدمات 3</p>
//                 </div>
//               </a>
//             </div>

//           </div>
//         </div>
//         <br /><br /><br />






//       </div>
//       <Footer />
//     </div>

//   );
// }

// export default ServicesSection;


import { useEffect, useState } from 'react';

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services');
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Our Services</h1>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={service.image} className="card-img-top" alt={service.title} />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
  