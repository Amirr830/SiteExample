import React from 'react'
import "./style.css"




export default function page() {
    return (
        <div className='mt-3 container'>

            <header>
                <h1 >تغییر IP</h1>
            </header>
            <section className="change-ip">
                <h2 className='text-right'>IP جدید را وارد کنید</h2>
                <form id="ip-form">
                    <label for="ip-address" className='text-right'>  : IP آدرس</label>
                    <input type="text" id="ip-address" name="ip-address" placeholder="192.168.1.1" required />
                    <button type="submit">تغییر IP</button>
                </form>
                <p className="message" id="message"></p>
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
    )
}
