import React from 'react'
import "./style.css"


export default function page() {
    return (

        <div className="mt-3 container">
            <header>
                <h1>بخش مالی شما</h1>
            </header>
            <section className="balance">
                <h2>مانده حساب</h2>
                <p>10,000,000 تومان</p>
            </section>
            <section className="transactions">
                <h2>جزئیات مالی</h2>
                <div className="transaction">
                    <span>درآمد:</span>
                    <span>15,000,000 تومان</span>
                </div>
                <div className="transaction">
                    <span>هزینه :</span>
                    <span>5,000,000 تومان</span>
                </div>
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
