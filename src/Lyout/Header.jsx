import React from 'react'
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";


function Header() {
  console.log("helloworld")
  return (
    <header className='flex flex-col flex-wrap w-full border-solid border-neutral-400 border-y-2'>
        <section className='flex  justify-between w-full stroke-2'>
            <h2>jeanwest</h2>
            <div className='flex flex-row-reverse mb-2 gap-2 text-2xl  '>
              <Link className='text-jean stroke-2 text-3xl' to={"/liked"}>
              <CiHeart/>
              </Link>
              <Link className='text-jean text-3xl' to={"/"}>
              <CiShoppingCart/>
              </Link>
              <Link className='text-jean text-3xl' to={"/dashboard"}>
              <CiUser/>
              </Link>
              <Link className='text-jean text-3xl'>
              <CiLocationOn/>
              </Link>
            </div>
        </section>
        <section className='flex flex-row justify-between gap-4 my-2'>
          <ul className='flex gap-5 text-jean'>
            <li><p>همه محصولات</p></li>
            <li><p>مردانه</p></li>
            <li><p>زنانه</p></li>
            <li><p>بچه گانه</p></li>
            <li><p>بوشاک</p></li>
            <li><p>کیف و کفش</p></li>
            <li><p>اکسسوری</p></li>
          </ul>
          <input className='bg-neutral-200 shrink-0' type="text" placeholder='جستجو بین محصولات' />
        </section>
    </header>
  )
}

export default Header