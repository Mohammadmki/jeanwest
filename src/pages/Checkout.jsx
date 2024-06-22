import React, { useState } from 'react'
import { useproduct } from '../context/ProcuctsProvidev'
import { RiDeleteBinLine } from "react-icons/ri";
import { IoGiftOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import banner5 from '../assets/banner/b5.jpg'
import banner6 from '../assets/banner/b7.jpg'
import banner7 from '../assets/banner/b8.jpg'
import banner8 from '../assets/banner/b9.jpg'
import { mostvisited } from '../products/mostvisited';
import { Link } from 'react-router-dom';
import { GrView } from 'react-icons/gr';
import { CiHeart } from 'react-icons/ci';

function Checkout() {
  const[step,setStep]=useState(1)
  const [state,dispatch]=useproduct()
  console.log(state)
  return (
    <div>
      <div className='flex flex-row justify-center pb-5 border-b-2 border-solid border-neutral-300'>
        <div className='flex flex-col  w-fit justify-center '>
        <div className={step==1?'rounded-full  w-14 h-14 ml-28 bg-jean p-2 text-3xl text-center font-bold text-white':'rounded-full ml-28 w-14 h-14 b p-2 text-3xl bg-neutral-400 text-center font-bold text-white'}>1</div>
        <h2 className={step===1?"text-black font-semibold":"text-neutral-400 font-semibold"}>سبد خرید</h2>
        </div>
        <div className='flex flex-col w-fit justify-center '>
        <div  className={step==2?'rounded-full w-14 h-14 bg-jean ml-28 p-2 text-3xl text-center font-bold text-white':'rounded-full ml-28 w-14 h-14 b p-2 text-3xl bg-neutral-400 text-center font-bold text-white'}>2</div>
        <h2 className={step===2?"text-black font-semibold":"text-neutral-400 font-semibold"}>اطلاعات ارسال</h2>
        </div>
        <div className='flex   flex-col p-2 w-32 items-center justify-center '>
        <div className={step==3?'rounded-full w-14 h-14 bg-jean ml-28 p-2 text-3xl text-center font-bold text-white':'rounded-full ml-28 w-14 h-14 b p-2 text-3xl bg-neutral-400 text-center font-bold text-white'}>3</div>
        <h2 className={step===3?"text-black text-center font-semibold":"text-neutral-400 font-semibold"}>اطلاعات پرداخت</h2>
        </div>
      </div>
      <div className='flex flex-col mt-5'>
       {state.selectedproduct.map((p)=>(
        <div className='flex flex-col gap-y-3  border-solid pb-4 border-neutral-200 border-b-2 mt-5'>
          <div className='flex justify-between  flex-row'>
            <div className='flex flex-row gap-x-4'>
          <img className='w-36 h-48 mr-2 xl:w-44 xl:h-56' src={p.image} alt="" />
          <div>
            <h2 className='font-semibold xl:text-xl'>jeanwest</h2>
            <p className='font-bold xl:text-2xl'>{p.name}</p>
          </div>
          </div>
          <div>
            <p className='text-gray-400 font-medium xl:text-xl'>رنگ :<span className='text-jean2 font-bold'>سبز</span></p>
            <p className='text-gray-400 font-medium xl:text-xl'>سایز :<span className='text-jean2 font-bold'>{p.sizee}</span></p>
            <p className='text-gray-400 font-medium xl:text-xl'>کد کالا :<span className='text-jean2 font-bold'>133ar</span></p>
          </div>
          <div className='flex flex-row  '>
          <p className='font-bold text-2xl xl:text-4xl  ml-10'>{p.price}<span className='font-normal text-lg text-jean2'>تومان</span></p>
          <div className='flex flex-row-reverse gap-x-5 h-fit py-2 px-3 ring-1 ring-neutral-200'>
           {p.quantity===1? <button  >{<RiDeleteBinLine className='text-red-600 text-2xl xl:text-4xl font-medium' onClick={()=>{dispatch({typeof:"REMOVE-ITEM",payload:p})}} />}</button>:
           <button className='text-3xl xl:text-5xl text-center font-semibold' onClick={()=>dispatch({typeof:"DECRASE",payload:p})}>-</button>
           }
            <h2 className='text-3xl xl:text-5xl font-medium'>{p.quantity}</h2>
            <button className='text-3xl text-center font-semibold xl:text-5xl' onClick={()=>dispatch({typeof:"INCRASE",payload:p})}>+</button>
          </div>
          </div>
          </div>
        </div>
       ))}
      </div>
      <p className='my-14 text-base text-gray-400'>کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند. برای ثبت سفارش باید مراحل بعدی را تکمیل کنید.</p>
       <div className='flex flex-row gap-x-6 mb-7'>
        <div >
          <div className='border-2 border-neutral-300 border-solid p-5 mb-10 '>
            <input className='w-72 h-10 bg-white border-solid mx-3 border-neutral-200 border-2' type="text" name='code' placeholder='کد تخفیف را اینجا وارد کنید' />
            <button className='transition-all duration-200 ease-in-out h-10 text-white text-center font-semibold text-lg bg-jean w-40 hover:bg-jean2'>بررسی کد</button>
          </div>
          <div>
         <div className='flex flex-row mb-4 justify-between py-3 px-2 w-full bg-gray-200 border-2 border-solid border-neutral-200'>
          <p className='text-jean2 font-medium'>نصف قیمت</p>
          <p className='font-bold text-lg'>{state.total}<span className='font-medium text-base text-jean2'>تومان</span></p>
         </div>
         <div className='flex flex-row justify-between items-baseline px-2 pt-1 pb-3 border-solid border-neutral-200 border-2'>
          <p className=' flex flex-row-reverse font-semibold'>هدایایه جین وست<IoGiftOutline className='text-2xl' /></p>
          <button className='h-10 flex p-3 flex-row-reverse items-center  w-fit font-semibold bg-gray-200 '>ثبت هدایای جین وست<FiPlus className='text-2xl'/></button>
         </div>
          </div>
       </div>
       <div className=' bg-gray-200 md:min-w-[500px] h-fit pb-4 px-2'>
        <div className='flex flex-col gap-y-4 border-solid pb-3 border-gray-400  border-b-2  '>
         <div className='flex flex-row justify-between'>
          <p className='text-gray-500 ' >قیمت :</p>
          <p className='font-bold text-xl'>{state.total}<span className='font-normal text-base'>تومان</span></p>
         </div>
         <div className='flex flex-row justify-between'>
          <p className='text-jean2'>سود شما :</p>
          <p className='font-bold text-xl'>0<span className='font-normal text-base'>تومان</span></p>
         </div>
         <div className='flex flex-row justify-between '>
          <p className='text-gray-500'>بسته بندی و ارسال :</p>
          <p className='font-semibold text-base' >وابسته به نوع ارسال</p>
         </div>
        </div>
        <div className='mt-2 flex flex-row justify-between'>
          <h2 className='text-lg text-jean2 font-medium'>مبلغ قابل پرداخت :</h2>
          <p className='font-bold text-lg'>{state.total}<span className='font-medium text-base text-jean2'>تومان</span></p>
        </div>
        <button className='transition-all duration-200 ease-in-out w-full h-10 mt-8 bg-jean text-white text-center font-semibold hover:bg-jean2'>ثبت سبد وادامه</button>
       </div>
      
       </div>
       <div className="flex flex-row justify-center my-32">
              <div className=" mx-10 border-solid pl-9 flex flex-col justify-center border-neutral-300 border-l-2" >
                <img className="md:w-24 xl:w-32" src={banner7} alt="" />
                <h3 className="text-jean font-bold">تعویض انلاین</h3>
              </div>
              <div className=" mx-10 border-solid pl-9 flex flex-col justify-center border-neutral-300 border-l-2">
                <img className="md:w-24 xl:w-32" src={banner6} alt="" />
                <h3 className="text-jean font-bold" >ارسال دوساعته</h3>
              </div>
              <div className=" mx-10 border-solid pl-9 flex-col flex justify-center border-neutral-300 border-l-2">
                <img className="md:w-24 xl:w-32" src={banner8} alt="" />
                <h3 className="text-jean font-bold">ضمانت بازگشت</h3>
              </div>
              <div className=" mx-10 border-solid pl-9 flex flex-col items-center justify-center border-neutral-300 border-l-2">
                <img  className="md:w-24 xl:w-32"src={banner5} alt="" />
                <h3 className="text-jean font-bold">ضمانت اصالت</h3>
              </div>
              </div>
              <div className='flex flex-row flex-wrap'>
              {mostvisited.map((product)=>(
                <Link key={product.id} to={`/${product.id}`}>
                  <div  className=' flex flex-row gap-4 flex-wrap m-0'>
                  <div className='group flex flex-col mr-2  px-1 pt-0  md:w-60 h-auto xl:w-72 '>
                      <div className="transition-all z-50 ease-in-out duration-500 opacity-0 absolute group-hover:opacity-100">
                        <GrView className="mx-2 mt-2 text-3xl xl:text-5xl md:text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
                         <CiHeart className="mx-2 mt-2 text-3xl md:text-4xl xl:text-5xl  p-2 bg-neutral-300 text-white rounded-full"/>
                      </div>
                      <div className=" w-full md:h-56 xl:h-64 h-48 overflow-hidden ">
                    <img className='transition-all object-fill w-full ease-in-out duration-500 h-full group-hover:scale-110  bg-neutral-200 '  src={product.image} alt="" />
                    </div>
                    <p className='text-jean'>jinwest</p>
                    <h3 className='text-jean text-sm md:text-base font-medium mb-2'>{product.name}</h3>
                    <p className='text-jean2 font-bold text-base xl:text-xl  md:text-lg'>{product.price}<span className='text-jean2 text-base font-normal'>تومان</span></p>
                    <div className='w-full bg-blue-200  justify-self-end'>
                    <h5 className='self-center font-semibold text-center text-jean2 opacity-100 '>هر 800 هزار تومان یک هدیه</h5>
                    </div>
                    </div>
                      </div>
                      </Link>
              ))}
              </div>
    </div>
  )
}

export default Checkout