// "use client"

// import React from 'react';
// // import './ContactSection.css'; // فایل CSS برای استایل
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from "../../styles/contact.module.css";
// import Header from "../component/header/index"
// import Footer from "../component/footer/index"



// const ContactSection = () => {
//   return (
//     <section className={styles.contactsection} >
//       <Header />
//       <div className='mt-24' style={{direction:"rtl"}}>
//       <div className={styles.contactcontent}>
//         <h1>تماس با ما</h1>
//         <div className={styles.contactform}>
//           <h2>فرم تماس</h2>
//           <form>
//             <label htmlFor="name">نام:</label>
//             <input type="text" id="name" name="name" placeholder="نام خود را وارد کنید" required />
            
//             <label htmlFor="email">ایمیل:</label>
//             <input type="email" id="email" name="email" placeholder="ایمیل خود را وارد کنید" required />
            
//             <label htmlFor="message">پیام:</label>
//             <textarea id="message" name="message" rows="6" placeholder="پیام خود را بنویسید" required></textarea>
            
//             <button type="submit">ارسال</button>
//           </form>
//         </div>

//         <div className={styles.contactinfo}>
//           <h2>اطلاعات تماس</h2>
//           <p><strong>آدرس:</strong> خیابان مثال، شهر مثال</p>
//           <p><strong>تلفن:</strong> 123456789</p>
//           <p><strong>ایمیل:</strong> support@example.com</p>
//         </div>
//       </div>
//       </div><br /><br />
//       <Footer />
//     </section>


//   );
// };

// export default ContactSection;


import { useState } from 'react';
import Header from "../component/header/index"
import Footer from "../component/footer/index"



export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    const data = await res.json();
    if (res.ok) {
      setResult({ success: true, message: data.message });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      setResult({ success: false, message: data.message });
    }
  };

  return (
    <div style={{direction:"rtl"}}>
      <Header />
      <div className="container mt-24 contact-container">
      <p className="form-title text-center text-6xl">Contact Us</p><br />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h5><label htmlFor="name" className="form-label">نام و نام خانوادگی</label></h5>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="نام خود را وارد کنید..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <h5><label htmlFor="email" className="form-label">ایمیل</label></h5>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="ایمیل خود را وراد کنید..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <h5><label htmlFor="subject" className="form-label">موضوع</label></h5>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="موضوع خود را وارد کنید..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <h5><label htmlFor="message" className="form-label">پیام</label></h5>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            placeholder="پیام خود را وارد کنید..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-submit">ارسال</button>
        {result && (
          <div className={`mt-3 alert ${result.success ? 'alert-success' : 'alert-danger'}`}>
            {result.message}
          </div>
        )}
      </form>
    </div><br /><br />
    <Footer />
    </div>
  );
}
