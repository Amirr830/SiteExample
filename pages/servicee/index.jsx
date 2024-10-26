import React from 'react'
// import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../styles/service.module.css" ;


export default function index() {
    return (
        <div className='container' >


            <section className={styles.services}>
                <div className="service-card">
                    <img src="moneyy.jpg" alt="خدمت 1" />
                    <div className="service-content">
                        <h2>مالی</h2>
                        <p>.در دنیای پررقابت امروز، تمرکز اطلاعات مالی یک مجموعه اقتصادی و دسترسی بی درنگ به آن به منظور رسیدن به تصمیمات راهبردی و به‌هنگام حائز اهمیت است . نرم افزار ابتکاربا توجه به سابقه درخشان شرکت در زمینه تولید و گسترش نرم افزارهای مالی و حسابداری تخصصی و با توجه به شناخت نیاز مشتریان تولید شده است . از چندین زیرسیستم مختلف تشکیل شده که شامل مالی ، خرید و فروش ، اموال ، پرسنلی ، انبار ، نقد و بانک ، تولید می باشد که به صورت یکپارچه باهم درارتباط بوده و تامل گردش اطلاعات دارند </p>
                    </div>
                </div>

                <div className="service-card">
                    <img src="docor.png" alt="خدمت 2" />
                    <div className="service-content">
                        <h2>پزشکی </h2>
                        <p>یک نرم‌افزار کلینیکی خوب باید در عین سادگی بتواند نیازهای پیچیده مربوط به یک مطـب و کلینیک را به خوبی برآورده سازد. نرم‌افزار کلینیک پوست، لیزر و زیبایی محصول شرکت ابتکار در عیـن سادگی و کـاربر پسـند بودن، کامل‌ترین امکانات جهت رفع نیازهای کاربری مطب و کلینیک‌های پوست، مو و زیبایی را دارا می‌باشد . این نرم‌افزار برای سهولت و دسترسی سریع به پرونده بیماران طراحی شده است و به راحتی امکان تعریف فرمول‌های مختلف برای محاسبه سهم و تعریف دستگاه های مختلف را دارا می‌باشد</p>
                    </div>
                </div>

                <div className="service-card">
                    <img src="tt.jpg" alt="خدمت 3" />
                    <div className="service-content">
                        <h2>حمل و نقل </h2>
                        <p> با توجه به نیاز های جامع و پیشرفت های روز افزون در حوزه تکنولوژی پکیج حمل ونقل ابتکار با دارا بودن از پتانسیل بالا و پشتیبانی از تمام پلتفرم ها برای نیاز شبکه های بزرگ حمل ونقل ارائه و مورد توسعه قرار گرفت. امروز با گذشت بیش از 8 سال یکی از معدود نرم افزار های مرکز تماس به همراه درخواست سرویس آنلاین در کنار هم را دارا میباشیم که قادر به پاسخ به تمام مشتریان در تمام سطوح هستیم. و امروز مفتخریم با تکیه بر دانش فنی توانسته ایم نیاز هر گونه شبکه بزرگ حمل و نقلی در حوزه های تاکسیرانی ،باربری ،پیک، سرویس مدارس و سفر های اشتراکی را مرتفع سازیم</p>
                    </div>
                </div>
            </section>

<br />



            <section className={styles.services}>
                <div className="service-card">
                    <img src="lockk.png" alt=" خدمت 4" />
                    <div className="service-content">
                        <h2> امنیت شبکه </h2>
                        <p> امروز با وجود هکر ها و سیستم های تخریب گر بیش از هر زمان دیگر محافظت از اطلاعات و پایدار نگه داشتن شبکه اهمیت دارد. امنیت بخش جدا ناپذیر از شبکه های بزرگ حمل ونقل و مالی و دیگر کسب و کار های اینترنتی میباشد. مجموعه ابتکار پس از تلاش های فراوان برای تکمیل خدمات خود تصمیم بر ارائه خدمات FireWall نمود که هم اکنون در بیش از 10 شرکت بزرگ در حوزه کسب و کار های اینترنتی فعال میباشد.
                        </p>
                    </div>
                </div>

                <div className="service-card">
                    <img src="docor.png" alt="خدمت 6" />
                    <div className="service-content">
                        <h2>مجازی سازی و شبکه  </h2>
                        <p>تصور کنید شما در سازمان خود صدها سرور فیزیکی دارید خارج از میزان برقی که برای روشن نگه داشتن سرورها استفاده می شود باید هزینه های از جمله سیستم خنک سازی و تامیین و نگهداری قطعات سرور ها را نیز متحمل شوید ، حالا تصور کنید این 100 سرور فیزیکی تبدیل به 10 سرور فیزیکی بشوند که هر کدام از آنها ده عدد سرور مجازی داخل خود داشته باشند شما دقیقا هم گرمای تولید شده را 10 برابر کمتر کرده اید و هم میزان برق مصرفی سرورهای فیزیکی را 10 برابر کاهش داده اید</p>
                    </div>
                </div>

                <div className="service-card">
                    <img src="phne.png" className='mt-11' alt="خدمت 6" />
                    <div className="service-content">
                        <h2 className='mt-12'> پروتکل اینترنتی  </h2>
                        <p>امروزه با توجه به حرکت سازمان ها و شرکت ها به سمت یکپارچه سازی و متمرکز کردن سیستم های اطلاعاتی، این نیاز احساس می شود که ارتباطات آنها نیز به نحوی متمرکز و یکپارچه شوند. برای پیاده سازی این نوع از ارتباطات، بسترهای سنتی تلفنی نظیر سانترال و هایبرید پاسخگو نیست و باید به سراغ تکنولوژی جدیدتری برویم که علاوه بر پشتیبانی کامل از نیازهای تلفنی قبلی ، قابلیت های به‌روز تری را نیز در اختیار ما قرار دهد.</p>
                    </div>
                </div>
            </section>








        </div>
    )
}
