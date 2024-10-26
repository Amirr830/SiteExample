import React from 'react'
import "./style.css"


export default function page() {
    return (
        <div className='mt-4 container' style={{ direction: "rtl" }}>


            <div className="lo chat-container">
                <div className="chat-box">
                    <div className="chat-header">
                        <h2>پشتیبانی آنلاین</h2>
                    </div>
                    <div className="chat-content">
                        <div className="message customer-message">سلام، چطور می‌توانم کمک بگیرم؟</div>
                        <div className="message response-message">سلام! چه کمکی از دست من برمیاد؟</div>
                    </div>
                    <div className="chat-input">
                        <textarea placeholder="پیام خود را وارد کنید..."></textarea>
                        <div className="buttons">
                            <button className="send-btn">ارسال</button>
                            <button className="reply-btn"> پاسخ تیکت </button>
                        </div>
                    </div>
                </div>
            </div>





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
