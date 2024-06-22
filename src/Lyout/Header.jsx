
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import logo from '../assets/logo/logo.jpg'
import { IoIosArrowDown } from "react-icons/io";
import { useproduct } from '../context/ProcuctsProvidev';



function Header() {

  const [state]=useproduct()

  console.log(state)
  return (
    <header className='flex flex-col flex-wrap w-full mb-3'>
        <section className='flex  justify-between w-full stroke-2'>
            <img className='w-fit h-10' src={logo} alt="" />
            <div className='flex flex-row-reverse mb-2 gap-2 text-2xl  '>
              <Link className='text-jean stroke-2 text-4xl xl:text-5xl ' to={"/liked"}>
              <CiHeart/>
              </Link>
              <Link className='text-jean text-4xl xl:text-5xl w-fit relative' to={"/checkout"}>
              <CiShoppingCart/>
              {!!state.itemsCounter&&<p className='absolute left-0 top-0  text-sm font-bold   text-white bg-jean2 px-2 h-fit'>{state.itemsCounter}</p>}
              </Link>
              <Link className='text-jean text-4xl xl:text-5xl' to={"/dashboard"}>
              <CiUser/>
              </Link>
              <Link className='text-jean text-4xl xl:text-5xl'>
              <CiLocationOn/>
              </Link>
            </div>
        </section>
        <section className='flex flex-row justify-between gap-4 my-2'>
          <div className='flex'>
          <ul className='flex gap-x-8 border-neutral-200 border-l-2 pl-2 border-solid text-jean text-lg font-semibold xl:text-2xl xl:font-normal'>
            <li><p>همه محصولات</p></li>
            <li><p>مردانه</p></li>
            <li><p>زنانه</p></li>
            <li><p>بچه گانه</p></li>
            <li><p>بوشاک</p></li>
            <li><p>کیف و کفش</p></li>
            <li><p>اکسسوری</p></li>
          </ul>
          <ul className=' text-jean text-lg font-semibold xl:text-2xl xl:font-normal'>
            <li className='group relative '><p className='flex flex-row-reverse align-baseline '><IoIosArrowDown className='text-lg'/>فروش ویژه</p>
            <ul className='absolute hidden pb-2 group-hover:block xl:text-2xl bg-white w-80 xl:w-96 px-2 shadow-lg shadow-neutral-100 py-4  text-jean text-lg font-semibold z-50 '>
              <li className='mb-2'><p>نصف قیمت</p></li>
              <li className='mb-2'>50% تخفیف</li>
              <li className=''>60%تخفیف</li>
            </ul>
            </li>
          </ul>
          </div>
          <div className='w-fit relative'>
          <IoIosSearch className='absolute left-1 top-1 cursor-pointer text-2xl xl:text-3xl '/>
          <input className='bg-neutral-200 shrink-0 w-80 h-8 focus:border-none ring-0 xl:w-[420px] xl:h-10 placeholder:text-lg placeholder:font-semibold' type="text" placeholder='جستجو بین محصولات' />
          </div>
        </section>
    </header>
  )
}

export default Header