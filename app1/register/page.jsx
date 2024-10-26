import React from 'react';
import "./style.css";

export default function page() {



    return (
        <div className='container mt-20 bg-zinc-200' style={{ direction: "rtl" , height:700 , borderRadius:5}}>
            <h1 className='mt-2'>ثبت‌نام</h1>

            <div className="container">
                <form className='mt-5'>
                    <div className="form-group">
                        <label for="first-name">نام</label>
                        <input type="text" id="first-name" placeholder="نام خود را وارد کنید" required/>
                    </div>
                    <div className="form-group">
                        <label for="last-name">نام خانوادگی</label>
                        <input type="text" id="last-name" placeholder="نام خانوادگی خود را وارد کنید" required/>
                    </div>
                    <div className="form-group">
                        <label for="email">ایمیل</label>
                        <input type="email" id="email" placeholder="ایمیل خود را وارد کنید" required/>
                    </div>
                    <div className="form-group">
                        <label for="phone">شماره موبایل</label>
                        <input type="tel" id="phone" placeholder="شماره موبایل خود را وارد کنید" required/>
                    </div>
                    <div className="form-group">
                        <label for="password">رمز عبور</label>
                        <input type="password" id="password" placeholder="رمز عبور خود را وارد کنید" required/>
                    </div>
                    <div className="form-group">
                        <label for="confirm-password">تأیید رمز عبور</label>
                        <input type="password" id="confirm-password" placeholder="رمز عبور را مجدد وارد کنید" required/>
                    </div>
                    <button className="form-button" type="submit">ثبت‌نام</button>
                </form>

            </div>


        </div>
    )
}
