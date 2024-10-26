import { NextResponse } from 'next/server';

export function middleware(req) {
    const token = req.cookies.get('token'); // یا هر نوع ذخیره‌سازی دیگری که برای توکن استفاده می‌کنید

    if (!token) {
        return NextResponse.redirect('/support'); // کاربر به صفحه لاگین منتقل شود
    }

    // اگر توکن معتبر بود اجازه ادامه دهید
    return NextResponse.next();
}

export const config = {
    matcher: ['/ticket', '/login'], // مسیرهایی که نیاز به احراز هویت دارند
};