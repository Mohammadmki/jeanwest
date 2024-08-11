
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import logo from '../assets/logo/logo.jpg'
import { IoIosArrowDown } from "react-icons/io";
import { useproduct } from '../context/ProcuctsProvidev';
import { category } from '../products/category';
import { textproject } from '../project/textproject';




function Header() {

  const [state]=useproduct()
  let offer=[]

  for(const value in textproject.offers){
   offer=[...offer,textproject.offers[value]]
  }
 

  return (
    <header className='flex flex-col flex-wrap w-full mb-3 px-3'>
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
          <ul className='flex lg:gap-x-8 md:gap-x-3 border-neutral-200 border-l-2 pl-2 border-solid  '>
          {category.map(category=>(
            <li className='cursor-pointer font-semibold text-jean md:text-base xl:text-2xl lg:text-xl' key={category.id}>
              {category.name}
            </li>
          ))

          } 
          </ul>
          <ul className=' text-jean text-lg font-semibold xl:text-2xl xl:font-normal'>
            <li className='group relative '><p className='flex flex-row-reverse items-end md:text-base lg:text-xl xl:text-2xl font-semibold'><IoIosArrowDown className='text-lg'/>فروش ویژه</p>
            <ul className='absolute hidden pb-2 group-hover:block xl:text-2xl bg-white md:w-72  lg:w-96 px-2 shadow-lg shadow-neutral-100 py-4  text-jean text-lg font-semibold z-50 '>
              {offer.map((off)=>(
                <li className='cursor-pointer' key={off.id} >
                  {off.title}
                </li>
              ))}
            </ul>
            </li>
          </ul>
          </div>
          <div className='w-fit relative'>
          <IoIosSearch className='absolute left-1 top-1 cursor-pointer text-2xl xl:text-3xl '/>
          <input className='bg-neutral-200 shrink-0 w-80  focus:border-none ring-0 lg:w-[320px] md:w-[310px] xl:w-[420px] h-7 lg:h-10 placeholder:text-lg placeholder:font-semibold' type="text" placeholder='جستجو بین محصولات' />
          </div>
        </section>
    </header>
  )
}

export default Header