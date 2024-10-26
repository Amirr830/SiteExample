import React from 'react';
import Link from 'next/link';
import "./style.css";



export default function page() {


    return (


        <div className='container' style={{ direction: "rtl", fontFamily: "pp" }}><br />


            {/* <header className='h-12 mt-4 mr-10'>
                <div className="navbar">
                    <div className="account-info">
                        <img src="/userr.jpg" alt="Profile Picture" className="profile-pic" />
                        <span className="text-black username">علی سلطانی خوش آمدی</span>
                    </div>
                </div>
            </header>









            <div style={{ height: 800, borderRadius: 5 }} className='mt-4 bg-zinc-100'>

                <div className="hstack gap-3">
                    <div className="p-2">
                        <p className='text-blue-600 text-3xl mr-14' >پشتیبانی</p>
                    </div>
                    <div className="p-2 ms-auto"></div>
                    <div className="p-2">
                        <Link href="/newticket"><button type="button" className="location btn btn-primary">ثبت تیکت جدید</button></Link>

                    </div>
                </div>



                <div className="mt-3 hstack">
                    <div className="p-2">
                        <input type="text" className='mr-14' placeholder='جستجو...' style={{ border: "none", borderRadius: 5, height: 40 }} />
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" style={{ height: 40, width: 70 }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            همه
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">عدم ارسال پیامک</a></li>
                            <li><a className="dropdown-item" href="#">قطعی سرویس</a></li>
                            <li><a className="dropdown-item" href="#">...</a></li>
                        </ul>
                    </div>


                    <div className="p-2">

                        <button type="button" className="btn btn-primary">جستجو</button>
                    </div>
                </div>

                <br /><br />




                <div className="ticket-table">
                    <table>
                        <thead>
                            <tr>
                                <th>عنوان تیکت</th>
                                <th>پیام‌های خوانده‌نشده</th>
                                <th>بخش</th>
                                <th>تاریخ ارسال تیکت</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Link href="/answer" style={{ textDecoration: "none" }} className='text-black'><td>مشکل در ورود به سیستم</td></Link>
                                <td><span className="badge">3</span></td>
                                <td>پشتیبانی ورود</td>
                                <td>1402/11/18 - 10:37</td>
                            </tr>
                            <tr>
                                <Link href="/answer" style={{ textDecoration: "none" }} className='text-black'><td>عدم ارسال پیامک</td></Link>
                                <td><span className="badge">1</span></td>
                                <td>پشتیبانی فنی</td>
                                <td>1403/11/02 - 14:05</td>
                            </tr>
                            <tr>
                                <Link href="/answer" style={{ textDecoration: "none" }} className='text-black'><td>آپدیت نرم افزار</td></Link>
                                <td><span className="badge">2</span></td>
                                <td>پشتیبانی خدمات</td>
                                <td>1402/11/17 - 09:33</td>
                            </tr>
                            <tr>
                                <Link href="/answer" style={{ textDecoration: "none" }} className='text-black'><td>عدم دریافت تاکسی</td></Link>
                                <td><span className="badge">5</span></td>
                                <td>پشتیبانی فنی</td>
                                <td>1403/01/12 - 15:23</td>
                            </tr>
                            <tr>
                                <Link href="/answer" style={{ textDecoration: "none" }} className='text-black'><td>تمدید قرارداد</td></Link>
                                <td><span className="badge">7</span></td>
                                <td>پشتیبانی خدمات</td>
                                <td>1403/03/26 - 08:55</td>
                            </tr>
                            <tr>
                                <Link href="/answer" style={{ textDecoration: "none" }} className='text-black'><td>آموزش سرویس</td></Link>
                                <td><span className="badge">3</span></td>
                                <td>پشتیبانی آموزش و فنی</td>
                                <td>1402/10/16 - 16:20</td>
                            </tr>
                            <tr>
                                <Link href="/answer" style={{ textDecoration: "none" }} className='text-black'><td>مشکل پرداخت</td></Link>
                                <td><span className="badge">5</span></td>
                                <td>پشتیبانی فنی</td>
                                <td>1403/05/30 - 11:01</td>
                            </tr>
                            <tr>
                                <Link href="/answer" style={{ textDecoration: "none" }} className='text-black'><td>قطعی نرم افزار</td></Link>
                                <td><span className="badge">1</span></td>
                                <td>پشتیبانی فنی</td>
                                <td>1402/05/28 - 13:55</td>
                            </tr>
                            <tr>
                                <Link href="/answer" style={{ textDecoration: "none" }} className='text-black'><td>مشکل در ورود به سیستم</td></Link>
                                <td><span className="badge">0</span></td>
                                <td>پشتیبانی فنی</td>
                                <td>1403/01/15 - 10:22</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />































































            </div> */}

            <div class="ticket-form-container ww mt-2">
                <h2>ثبت تیکت جدید</h2>
                <form action="#" method="post" class="ticket-form">
                    <label for="subject">موضوع تیکت</label>
                    <input type="text" id="subject" name="subject" placeholder="موضوع تیکت" required />

                    <label for="category">دسته‌بندی</label>
                    <select id="category" name="category">
                        <option value="technical">پشتیبانی فنی</option>
                        <option value="billing">امور مالی</option>
                        <option value="general">سوالات عمومی</option>
                    </select>

                    <label for="description">توضیحات</label>
                    <textarea id="description" name="description" rows="6" placeholder="توضیحات خود را وارد کنید..." required></textarea>

                    <label for="attachment">فایل پیوست</label>
                    <input type="file" id="attachment" name="attachment" />

                    <button type="submit">ارسال تیکت</button>
                </form>
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
