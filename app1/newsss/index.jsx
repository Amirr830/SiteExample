import React from 'react'
import Link from 'next/link'
export default function index() {
    return (
        <div className='container'>

            <div className="ml-6 container text-center">
                <div className="ml-6 row align-items-center">
                    <div className="ml-6 col">
                        <div className="card" className='ml-9   ' style={{ width: 288 }}>
                            <img src="/111.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="text-blue-600 text-xl card-title" style={{ color: "blue" }}>سه راه برای حفظ انرژی در محیط کار
                                </p>
                                <p className="card-text">در اين سيستم تلاش بر اين است که تسهيلات لازم براي مديريت بهينه‌ وجوه نقد و کنترل وضعيت نقدينگي سازمان‌ مهيا شود.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mt-4 ml-9 card" style={{ width: 288 }}>
                            <img src="/222.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: "blue" }}>چگونه  پیشرفت کنیم؟
                                </h5>
                                <p className="card-text">.یک تیم قوی و با استعداد در ابتکار، انگیزه زیادی دارند که ایده های شما را به واقعیت تبدیل کنند</p>
                            </div>
                        </div>
                        <br />
                    </div>
                    <div className="col">
                        <div className="mb-2 ml-9 card" style={{ width: 288 }}>
                            <img src="/333.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title" style={{color:"blue"}}>چگونه خلاق باشیم؟</h5>
                                <p className="card-text">.یک تیم قوی و با استعداد در ابتکار، انگیزه زیادی دارند که ایده های شما را به واقعیت تبدیل کنند</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href={"/news"}><button type="button" className="btn btn-primary">مشاهده همه</button></Link>

            </div>

        </div>
    )
}
