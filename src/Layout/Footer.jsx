import logo from '../assets/logo/logo.jpg'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <footer className='flex flex-col items-center border-spacing-y-8'>
      <div  className='border-y-2 border-solid border-neutral-200 py-8 mb-9'>
      <div className='w-full flex flex-col justify-center items-center'>
        <img className='w-60 h-fit xl:w-72' src={logo} alt="" />
        <p className='text-neutral-400 xl:text-lg'>JeansWest, Fits Best</p>
      </div>
          <div className='flex flex-row justify-between'>
          <ul className='ml-0 mr-2 w-52 xl:text-xl xl:font-bold'>
            <li ><h2 className= 'text-base font-bold'>اطلاعات جین وست</h2></li>
            <li className='text-black '><Link className='text-black font-normal '>درباره ما</Link></li>
            <li><Link className='text-black font-normal' >فروش سازمانی</Link></li>
            <li><Link  className='text-black font-normal'>راهنمای جست وجو</Link></li>
            <li><Link className='text-black font-normal'>فرصت های شغلی</Link></li>
          </ul>
          <ul className='xl:text-xl xl:font-bold'>
            <li><h2 className= 'text-base font-bold'>راهنما</h2></li>
            <li><Link className='text-black font-normal'>قوانین و مقررات</Link></li>
            <li><Link className='text-black font-normal'>راهنمای خرید از اپلیکیشن</Link></li>
            <li><Link className='text-black font-normal'>فروشگاهای جین وست</Link></li>
            <li><Link className='text-black font-normal'>دانلود اپلیکیشن</Link></li>
          </ul>
          <ul className='xl:text-xl xl:font-bold w-32'>
            <li><h2 className= 'text-base font-bold'>خدمات مشتریان</h2></li>
            <li><Link className='text-black font-normal'>شرایط تعویض کالا</Link></li>
            <li><Link className='text-black font-normal'>باشگاه مشتریان</Link></li>
            <li><Link className='text-black font-normal'>دعوت از دوستان</Link></li>
            <li><Link className='text-black font-normal'>تماس با ما</Link></li>
          </ul>
          <ul  className='xl:text-xl xl:font-bold w-32 justify-self-start'>
            <li><h2 className= 'text-base font-bold'>فروشگاه انلاین</h2></li>
            <li><Link className='text-black font-normal '>مردانه</Link></li>
            <li><Link className='text-black font-normal'>زنانه</Link></li>
            <li><Link className='text-black font-normal'>بچه گانه</Link></li>
            <li><Link className='text-black font-normal'>پوشاک</Link></li>
            <li><Link className='text-black font-normal'>کیف و کفش</Link></li>
            <li><Link className='text-black font-normal'>اکسسوری</Link></li>
          </ul>
          </div>
          <p className='text-neutral-400 mt-10'>در سال ۱۹۷۲، حدود پنجاه سال پیش، آلیستر نوروود اولین فروشگاه جین‌ وست را در شهر پِرت استرالیا تأسیس کرد که در آن پوشاک سادۀ جین عرضه می‌کرد. اما تنها پانزده سال بعد جین‌ وست توانست تأسیس صدمین شعبه خود را در استرالیا جشن بگیرد. با محبوبیت روزافزون این برند در بازار پرهیاهوی مد و فشن، در سال ۱۹۹۴ میلادی، جین‌ وست با داشتن ۱۵۰ شعبه در سرتاسر قارۀ اقیانوسیه، قدم به آن‌سوی آب‌ها گذاشت و توانست پوشاک خود را به بازار جهانی عرضه کند. امروزه جین‌ وست با بیش از 3000 شعبه در سراسر جهان یکی از بزرگ‌ترین فروشگاه‌های زنجیره‌ای پوشاک و یکی از محبوب‌ترین برندهای فست‌‌فشن و لباس روزمره در جهان به شمار می‌آید</p>
          </div >
           <div className='flex flex-row-reverse w-full justify-between p-5 '>
            <p className='text-neutral-400'>©2024 | All rights reserved by JEANSWEST</p>
            <div className='flex flex-row text-2xl  gap-2 '>
              <FaInstagram/>
              <LuLinkedin/>
              <FiYoutube/>
              </div>
           </div>
    </footer>
  )
}
export default Footer