import React from 'react'
// import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../component/header/index"
import Footer from "../component/footer/index"
import styles from "../../styles/ip.module.css"




export default function page() {
    return (

        <div className='mt-3 '>
            <Header /><br /><br />
            <div className='mt-24 conatiner'>
                <header className={styles.header}>
                    <h1 >تغییر IP</h1>
                </header>
                <section className={styles.changeip}>
                    <h2 className='text-right'>IP جدید را وارد کنید</h2>
                    <form id="ip-form" className={styles.form}>
                        <label for="ip-address" id={styles.label} className='text-right'>  : IP آدرس</label>
                        <input type="text" id="ip-address" name="ip-address" className= {styles.input} placeholder="192.168.1.1" required />
                        <button type="submit" className={styles.button}>تغییر IP</button>
                    </form>
                    <p className={styles.message} id="message"></p>
                </section>




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
            <br /><br /><br /><br />
            <Footer />
        </div>
    )
}
