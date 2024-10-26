import React from 'react'
import "./style.css"


export default function page() {
  return (
    <div className='container mt-5' style={{direction:"rtl"}}>

      <div className="ticket-container">
        <header className="ticket-header">
          <h1>پاسخ به تیکت</h1>
          <p>اینجا می‌توانید به تیکت‌های خود پاسخ دهید و آن‌ها را پیگیری کنید.</p>
        </header>

        <section className="ticket-history">

          <div className="ticket-message user-message">
            <div className="message-info">
              <p className="text-2xl message-author">کاربر </p>
              <span className=" message-date">1402/06/17</span><br />
              <span className=" message-date">14:21</span>

            </div>
            <p className="message-content">سلام، من مشکلی با ورود به حساب کاربری‌ام دارم. لطفاً راهنمایی کنید.</p>
          </div>
<br />
          <div className="ticket-message admin-message">
            <div className="message-info">
              <p className="text-2xl message-author">پشتیبان</p>
              <span className=" message-date">1403/04/22</span><br />
              <span className=" message-date">10:20</span>

            </div>
            <p className="message-content">سلام علی عزیز، لطفاً مطمئن شوید که رمز عبور خود را به درستی وارد کرده‌اید و اگر مشکل ادامه داشت، با ما تماس بگیرید.</p>
          </div>
        </section>

        <section className="ticket-response">
          <p className='text-right text-3xl'>ارسال پاسخ</p>
          <form action="#" method="POST">
            <p for="response-message" className='text-right'>پیام شما</p>
            <textarea id="response-message" name="response-message" rows="6" placeholder="پاسخ خود را اینجا بنویسید..."></textarea>
            <button type="submit">ارسال پاسخ</button>
          </form>
        </section>
      </div>

    </div>
  )
}
