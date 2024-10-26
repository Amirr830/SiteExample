import React from 'react'
import "./style.css"

export default function page() {
    return (
        <div className='container mt-7' style={{direction:"rtl"}}>

            <div className="ticket-container mt-3" style={{direction:"rtl"}}>
                <h1>ثبت تیکت جدید</h1>
                <form action="#" method="post" className="ticket-form">
                    <div className="form-group">
                        <label for="subject">موضوع تیکت</label>
                        <input type="text" id="subject" name="subject" placeholder="موضوع تیکت خود را وارد کنید" required />
                    </div>
                    <div className="form-group">
                        <label for="category">دسته‌بندی</label>
                        <select id="category" name="category" required>
                            <option value="">انتخاب کنید</option>
                            <option value="technical">مشکلات فنی</option>
                            <option value="billing">مسائل مالی</option>
                            <option value="general">سایر</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="description">توضیحات</label>
                        <textarea id="description" name="description" placeholder="توضیحات تیکت خود را وارد کنید" rows="5" required></textarea>
                    </div>
                    <div className="form-group">
                        <label for="attachment">فایل پیوست</label>
                        <input type="file" id="attachment" name="attachment"/>
                    </div>
                    <button type="submit" className="submit-btn">ارسال تیکت</button>
                </form>
            </div>




        </div>
    )
}
