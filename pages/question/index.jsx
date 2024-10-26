import React from 'react'
// import "./style.css"
import styles from "../../styles/question.module.css"
import Header from "../component/header/index"
import Footer from "../component/footer/index"



export default function page() {
    return (
        <div  >
            <Header />
            <div>
                <main className={styles.main} style={{direction:"rtl" , marginTop:"100px"}}>
                    <p className='text-center text-5xl'>سوالات متداول</p>
                    <section className={styles.faqsection}>
                        <div className={styles.faqitem}>
                            <input type="checkbox" id="faq1" />
                            <label for="faq1">سوال اول: چگونه می‌توانم محصولی را سفارش دهم؟</label>
                            <div className={styles.faqanswer}>
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















            </div><br /><br />
            <Footer />
        </div>
    )
}
