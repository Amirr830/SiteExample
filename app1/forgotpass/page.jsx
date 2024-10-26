import React from 'react'
import "./style.css"

export default function page() {
    return (
        <div className="container">
            <div className="form-container">
                <h2>فراموشی رمز عبور</h2>
                <p>ایمیل خود را وارد کنید تا لینک بازیابی رمز عبور برای شما ارسال شود.</p>
                <form action="#" method="post">
                    <label for="email">ایمیل</label>
                    <input type="email" id="email" name="email" required />
                    <button type="submit">ارسال لینک بازیابی</button>
                </form>
                <Link href="/support" className="back-link">بازگشت به صفحه ورود</Link>
            </div>
        </div>
    )
}
