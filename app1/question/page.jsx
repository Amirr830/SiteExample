import React from 'react'
import "./style.css"



export default function page() {
    return (
        <div className='container' style={{ direction: "rtl" }}>

            <main>
                <p className='text-center text-5xl'>سوالات متداول</p>
                <section className="faq-section">
                    <div className="faq-item">
                        <input type="checkbox" id="faq1" />
                        <label for="faq1">سوال اول: چگونه می‌توانم محصولی را سفارش دهم؟</label>
                        <div className="faq-answer">
                            <p>برای سفارش محصول، به صفحه محصولات بروید، محصول مورد نظر خود را انتخاب کنید و سپس مراحل پرداخت را دنبال کنید.</p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <input type="checkbox" id="faq2" />
                        <label for="faq2">سوال دوم: هزینه ارسال چقدر است؟</label>
                        <div className="faq-answer">
                            <p>هزینه ارسال بر اساس موقعیت جغرافیایی شما محاسبه می‌شود و در مرحله پرداخت نمایش داده خواهد شد.</p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <input type="checkbox" id="faq3" />
                        <label for="faq3">سوال سوم: آیا می‌توانم سفارش خود را لغو کنم؟</label>
                        <div className="faq-answer">
                            <p>بله، تا قبل از ارسال محصول، می‌توانید سفارش خود را لغو کنید. برای این کار به بخش پیگیری سفارشات مراجعه کنید.</p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <input type="checkbox" id="faq4" />
                        <label for="faq4">سوال چهارم: آیا محصولات شما ضمانت دارند؟</label>
                        <div className="faq-answer">
                            <p>بله، تمامی محصولات ما دارای ضمانت یک ساله هستند و در صورت بروز مشکل می‌توانید با پشتیبانی تماس بگیرید.</p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <input type="checkbox" id="faq5" />
                        <label for="faq5">سوال پنجم: چگونه می‌توانم با پشتیبانی تماس بگیرم؟</label>
                        <div className="faq-answer">
                            <p>شما می‌توانید از طریق تلفن، ایمیل و یا فرم تماس موجود در سایت با پشتیبانی ما در ارتباط باشید.</p>
                        </div>
                    </div>
                </section>
            </main>

            <div className="chat-button-container">
                <label for="chat-toggle" className="chat-button">💬</label>
            </div>

            <input type="checkbox" id="chat-toggle" className="chat-toggle" />


            <div className="chat-window">
                <div className="chat-header">
                    <span>چت با ما</span>
                    <label for="chat-toggle" className="close-button">×</label>
                </div>
                <div className="chat-content">
                    <p>سلام! چطور می‌توانیم به شما کمک کنیم؟</p>
                </div>
                <div className="chat-input">
                    <textarea placeholder="پیام خود را وارد کنید..."></textarea>
                </div>
            </div>  















        </div>
    )
}
