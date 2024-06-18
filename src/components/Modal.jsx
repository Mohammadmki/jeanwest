import React from 'react'
import banner from'../assets/banner/b13.png'
import { Link } from 'react-router-dom'

function Modal({setshow}) {
  return (
    <div  className='flex w-full h-[100%] top-0 left-0 fixed backdrop-brightness-50 flex-row items-center justify-center '>
        <div className='bg-white w-[465px] h-72 flex rounded-lg flex-col pt-8 justify-center items-center '>
            <div className='flex-col flex justify-center items-center mb-2'>
             <img className='w-24 h-20 ' src={banner} alt="" />
            <h2 className='mt-5 text-black font-bold'>محصول به سبد خرید شما اضافه شد!</h2>
            </div>
            <div className='flex flex-row mt-11 justify-between w-full'>
            <Link to={"/checkout"} className='md:w-60 w-52 xl:w-72 mr-2 font-semibold pt-2 bg-jean h-11 text-white text-center'>مشاهده در سبد خرید</Link>
            <Link onClick={()=>setshow(false)} className='text-black ml-2 h-11 xl:h-16 text-center pt-2 font-semibold ring-2 md:w-48 w-32 xl:w-52  justify-self-auto ring-neutral-200'> ادامه خرید  </Link>
            </div>
        </div>
    </div>
  )
}

export default Modal