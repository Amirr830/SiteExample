// import React from 'react';
// // import "./style.c  ss";

// export default function page() {



//     return (
//         <div className='container mt-20 bg-zinc-200' style={{ direction: "rtl" , height:700 , borderRadius:5}}>
//             <h1 className='mt-2'>ثبت‌نام</h1>

//             <div className="container">
//                 <form className='mt-5'>
//                     <div className="form-group">
//                         <label for="first-name">نام</label>
//                         <input type="text" id="first-name" placeholder="نام خود را وارد کنید" required/>
//                     </div>
//                     <div className="form-group">
//                         <label for="last-name">نام خانوادگی</label>
//                         <input type="text" id="last-name" placeholder="نام خانوادگی خود را وارد کنید" required/>
//                     </div>
//                     <div className="form-group">
//                         <label for="email">ایمیل</label>
//                         <input type="email" id="email" placeholder="ایمیل خود را وارد کنید" required/>
//                     </div>
//                     <div className="form-group">
//                         <label for="phone">شماره موبایل</label>
//                         <input type="tel" id="phone" placeholder="شماره موبایل خود را وارد کنید" required/>
//                     </div>
//                     <div className="form-group">
//                         <label for="password">رمز عبور</label>
//                         <input type="password" id="password" placeholder="رمز عبور خود را وارد کنید" required/>
//                     </div>
//                     <div className="form-group">
//                         <label for="confirm-password">تأیید رمز عبور</label>
//                         <input type="password" id="confirm-password" placeholder="رمز عبور را مجدد وارد کنید" required/>
//                     </div>
//                     <button className="form-button" type="submit">ثبت‌نام</button>
//                 </form>

//             </div>


//         </div>
//     )
// }


//-------------------------------------------------



import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from "../../styles/register.module.css"
import Header from "../component/header/index"
import Footer from "../component/footer/index"


export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        phone: '',
    });

    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (res.ok) {
            router.push('/login');
        } else {
            alert(data.message || 'Signup failed');
        }
    };

    return (
        <div className={styles.a}>
            <Header />
            <div className="container mt-24" style={{ direction: "rtl" }}>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className={styles.card}>
                            <div className=" mt-5">
                                <div className="card-body">
                                    <h1 className="text-center mb-4">ثبت نام</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">نام کاربری</label>
                                            <input type="text" className='form-control' name="username" placeholder="نام کاربری خود را وارد کنید..." onChange={handleChange} autoComplete='off' />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">ایمیل</label>
                                            <input type="email" className='form-control' name="email" placeholder="ایمیل خود را وار کنید..." onChange={handleChange} autoComplete='off' />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">تلفن</label>
                                            <input type="text" name="phone" className='form-control' placeholder="شماره تلفن خود را وارد کنید..." onChange={handleChange} autoComplete='off' />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">رمز عبور</label>
                                            <input type="password" className='form-control' name="password" placeholder="رمز عبور خود را وارد کنید..." onChange={handleChange} autoComplete='off' />
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary btn-block">ثبت نام</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br />
            <Footer />
        </div>
    );
}
