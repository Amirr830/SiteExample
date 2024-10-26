import React from 'react'
// import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../component/header/index"
import Footer from "../component/footer/index"
import styles from "../../styles/fiance.module.css"


export default function page() {
    return (

        <div className="mt-24 ">
            <Header />
            <header className={styles.header}>
                <h1>بخش مالی شما</h1>
            </header>
            <section className={styles.balance}>
                <h2>مانده حساب</h2>
                <p>10,000,000 تومان</p>
            </section>
            <br />
            <p className='text-center text-3xl'>جزئیات</p>
            <section className={styles.balance}>
                <h2> هزینه</h2>
                <p>10,000,000 تومان</p>
            </section>
            <section className={styles.balance}>
                <h2>درآمد</h2>
                <p>10,000,000 تومان</p>
            </section>


            <div className={styles.chatbuttoncontainer}>
                <label for="chat-toggle" className={styles.chatbutton}>💬</label>
            </div>

            <input type="checkbox" id="chat-toggle" className={styles.chattoggle} />


            <div className={styles.chatwindow}>
                <div className={styles.chatheader}>
                    <span>چت با ما</span>
                    <label for="chat-toggle" className={styles.closebutton}>×</label>
                </div>
                <div className={styles.chatcontent}>
                    <p>سلام! چطور می‌توانیم به شما کمک کنیم؟</p>
                </div>
                <div className={styles.chatinput}>
                    <textarea placeholder="پیام خود را وارد کنید..."></textarea>
                </div>
            </div>






















        <br /><br />

        <Footer />  

        </div>


    )
}
