import { useState } from "react";

import { GrView } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa";
import banner1 from '../assets/banner/b6.jpg'
import banner2 from'../assets/banner/b1.jpg'
import banner3 from '../assets/banner/b2.jpg'
import banner4 from '../assets/banner/b3.jpg'
import banner5 from '../assets/banner/b5.jpg'
import banner6 from '../assets/banner/b7.jpg'
import banner7 from '../assets/banner/b8.jpg'
import banner8 from '../assets/banner/b9.jpg'
import accesory1 from '../assets/products/accesory/p5.jpg'
import accessory2 from '../assets/products/accesory/p6.jpg'
import kid1 from '../assets/products/kidsclothing/p9.jpg'
import kid from '../assets/products/p13.jpg'
import men from '../assets/products/menclothing/p1.jpg'
import men1 from '../assets/products/menclothing/p2.jpg'
import men3 from '../assets/products/menclothing/p14.jpg'
import women from '../assets/products/p8.jpg'
import women1 from '../assets/products/womenclothing/p7.jpg'
import women2 from '../assets/products/womenclothing/p11.jpg'
import shoes from '../assets/products/shoes/p3.jpg'
import shoes1 from '../assets/products/shoes/p4.jpg'

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Homepage() {
  const[slider,setslider]=useState(0)
 const sliders=[
  banner1,
  banner3
 ]
setInterval(() => {
  if(slider==sliders.length-1){
    setslider(slider=>slider-1)
    console.log("down"+slider)
  }
  if (slider==0) {
    setslider(slider=>slider+1)
    console.log("up"+slider)
  }
  

}, 5000);
 
 const nextslide=()=>{
  if(sliders.length>=slider){
    setslider(slider=> slider+1)
    console.log(slider)
  }
  
}
const pervslide=()=>{
  if (slider>0){
      setslider(slider=>slider-1)
  }
}

  return (
    <main className="w-full">
      <section className='w-full h-fit overflow-hidden  relative'>
        <div style={{transform: `translateX(${slider * 100}%)`}} className="w-full flex flex-row duration-500 ease-in-out h-fit">
        <img  className="h-full w-full cursor-pointer object-cover " src={sliders[0]} alt="" />
        <img className="h-full w-full cursor-pointer object-cover" src={sliders[1]} alt="" />
        </div>
       
        <div className="absolute m-2 h-fit bottom-3 w-fit flex flex-row">
        <button className="h-7 cursor-pointer px-2 bg-white w-fit disabled:opacity-50" onClick={pervslide}  disabled={slider==0?true:false}><IoIosArrowForward/></button>
         <button className="h-7 cursor-pointer mx-2 px-2 bg-white w-fit disabled:opacity-50" onClick={nextslide} disabled={slider==sliders.length-1?true:false} > <IoIosArrowBack/></button>
       </div>
      </section>
     
        <h2 className='text-xl my-7 font-bold'>پیشنهاد جین وست</h2>
        <section className=' flex flex-row gap-4 flex-wrap'>
          <div className='group cursor-pointer flex flex-col mr-2 px-1 pt-0  w-60 h-auto '>
            <div className="transition-all ease-in-out duration-500 opacity-0 z-50 absolute group-hover:opacity-100">
              <GrView className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
               <CiHeart className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
               <h1 className="text-4xl"></h1>
            </div>
            <div className=" w-full h-56 overflow-hidden ">
          <img className='transition-all object-fill w-full ease-in-out duration-500 h-full group-hover:scale-110  bg-neutral-200 '  src={accesory1} alt="" />
          </div>
          <p className='text-jean'>jinwest</p>
          <h3 className='text-jean text-base font-medium mb-2 w-full truncate'>ست ساعت مردانه و زنانه بند مشکی چرمی</h3>
          <p className='text-jean2 font-bold text-lg'>200<span className='text-jean2 text-base font-normal'>تومان</span></p>
          <div className='w-full bg-blue-200 justify-self-end'>
          <h5 className='self-center font-semibold text-center  '>هر 800 هزار تومان یک هدیه</h5>
          </div>
          </div>
          <div className='group flex flex-col cursor-pointer  px-1 pt-0  w-60 h-auto'>
          <div className="transition-all z-50 ease-in-out duration-500 opacity-0 absolute group-hover:opacity-100">
              <GrView className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
               <CiHeart className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
            </div>
            <div className=" w-full h-56 overflow-hidden ">
          <img className='transition-all object-fill w-full ease-in-out duration-500 h-full group-hover:scale-110  bg-neutral-200 '  src={kid1} alt="" />
          </div>
          <p className='text-jean'>jinwest</p>
          <h3 className='text-jean text-base font-medium truncate mb-2'>بلیز بچه گانه دخترانه مشکی سفید با ظرح چهار خانه</h3>
          <p className='text-jean2 font-bold text-lg'>200<span className='text-jean2 text-base font-normal'>تومان</span></p>
          <div className='w-full bg-blue-200 justify-self-end'>
          <h5 className='self-center font-semibold text-center  '>هر 800 هزار تومان یک هدیه</h5>
          </div>
          </div>
          <div className='group cursor-pointer flex flex-col  px-1 pt-0  w-60 h-auto'>
          <div className="transition-all z-50 ease-in-out duration-500 opacity-0 absolute group-hover:opacity-100">
              <GrView className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
               <CiHeart className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
            </div>
            <div className=" w-full h-56 overflow-hidden ">
          <img className='transition-all object-cover scale-110 w-full  ease-in-out duration-500 h-full group-hover:scale-125  bg-neutral-200 '  src={men} alt="" />
          </div>
          <p className='text-jean'>jinwest</p>
          <h3 className='text-jean text-base font-medium mb-2'>تیرشت مردانه </h3>
          <p className='text-jean2 font-bold text-lg'>200<span className='text-jean2 text-base font-normal'>تومان</span></p>
          <div className='w-full bg-blue-200 justify-self-end'>
          <h5 className='self-center font-semibold text-center  '>هر 800 هزار تومان یک هدیه</h5>
          </div>
          </div>
          <div className='group flex cursor-pointer flex-col  px-1 pt-0  w-60 h-auto'>
          <div className="transition-all z-50 ease-in-out duration-500 opacity-0 absolute group-hover:opacity-100">
              <GrView className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
               <CiHeart className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
            </div>
            <div className=" w-full h-56 overflow-hidden ">
          <img className='transition-all object-cover scale-110 w-full  ease-in-out duration-500 h-full group-hover:scale-125  bg-neutral-200 '  src={men1} alt="" />
          </div>
          <p className='text-jean'>jinwest</p>
          <h3 className='text-jean text-base font-medium mb-2'>تیشرت مردانه </h3>
          <p className='text-jean2 font-bold text-lg'>200<span className='text-jean2 text-base font-normal'>تومان</span></p>
          <div className='w-full bg-blue-200 justify-self-end'>
          <h5 className='self-center font-semibold text-center  '>هر 800 هزار تومان یک هدیه</h5>
          </div>
          </div>
          </section>
          <section className="my-36 flex flex-row flex-wrap">
           <h2 className='text-xl text-black my-7 font-bold w-full'>دسته بندی محصولات</h2>
           <div className="ring-1 mx-2 cursor-pointer ring-neutral-200 w-48 h-40">
            <img className="w-full h-32 object-cover bg-neutral-300" src={men3} alt="" />
            <div className="flex flex-row justify-between items-baseline ">
              <p className='text-black font-bold text-lg'>پوشاک مردانه</p>
              <FaChevronLeft />
            </div>
           </div>
           <div className="ring-1 mx-2 cursor-pointer ring-neutral-200 w-48 h-40">
            <img className="w-full h-32 object-cover bg-neutral-300" src={women} alt="" />
            <div className="flex flex-row justify-between items-baseline ">
              <p className='text-black font-bold text-lg'>پوشاک زنانه</p>
              <FaChevronLeft />
            </div>
           </div>
           <div className="ring-1 mx-2 cursor-pointer ring-neutral-200 w-48 h-40">
            <img className="w-full h-32 bg-neutral-300 object-cover" src={kid} alt="" />
            <div className="flex flex-row justify-between items-baseline ">
              <p className='text-black font-bold text-lg'>پوشاک بجه گانه</p>
              <FaChevronLeft />
            </div>
           </div>
           <div className="ring-1 mx-2 overflow-hidden ring-neutral-200 w-48 h-40">
            <img className="w-full h-32  object-cover scale-110 bg-neutral-300" src={shoes} alt="" />
            <div className="flex flex-row justify-between items-baseline ">
              <p className='text-black font-bold text-lg'>کیف وکفش</p>
              <FaChevronLeft />
            </div>
           </div>
           <div className="ring-1 mx-2 ring-neutral-200 w-48 h-40 cursor-pointer mb-28">
            <img className="w-full h-32 bg-neutral-300 object-cover" src={accessory2} alt="" />
            <div className="flex flex-row justify-between items-baseline ">
              <p className='text-black font-bold text-lg'>اکسسوری</p>
              <FaChevronLeft />
            </div>
           </div>
           <div className="w-full h-96 m-1">
            <img className="object-cover" src={banner4} alt="" />
           </div>
          </section>
          <section className="m-1">
          <h2 className='text-xl my-7 font-bold'>پربازدید ترین محصولات</h2>
        <div className=' flex flex-row gap-4 flex-wrap m-0'>
          <div className='group flex flex-col mr-2  px-1 pt-0  w-60 h-auto '>
            <div className="transition-all z-50 ease-in-out duration-500 opacity-0 absolute group-hover:opacity-100">
              <GrView className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
               <CiHeart className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
            </div>
            <div className=" w-full h-56 overflow-hidden ">
          <img className='transition-all object-fill w-full ease-in-out duration-500 h-full group-hover:scale-110  bg-neutral-200 '  src={women1} alt="" />
          </div>
          <p className='text-jean'>jinwest</p>
          <h3 className='text-jean text-base font-medium mb-2'>کفش...</h3>
          <p className='text-jean2 font-bold text-lg'>400<span className='text-jean2 text-base font-normal'>تومان</span></p>
          <div className='w-full bg-blue-200 justify-self-end'>
          <h5 className='self-center font-semibold text-center  '>هر 800 هزار تومان یک هدیه</h5>
          </div>
          </div>
          <div className='group flex flex-col  px-1 pt-0  w-60 h-auto '>
            <div className="transition-all z-50 ease-in-out duration-500 opacity-0 absolute group-hover:opacity-100">
              <GrView className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
               <CiHeart className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
            </div>
            <div className=" w-full h-56 overflow-hidden ">
          <img className='transition-all object-fill w-full ease-in-out duration-500 h-full group-hover:scale-110  bg-neutral-200 '  src={women2} alt="" />
          </div>
          <p className='text-jean'>jinwest</p>
          <h3 className='text-jean text-base font-medium mb-2'>تیشرت...</h3>
          <p className='text-jean2 font-bold text-lg'>400<span className='text-jean2 text-base font-normal'>تومان</span></p>
          <div className='w-full bg-blue-200 justify-self-end'>
          <h5 className='self-center font-semibold text-center  '>هر 800 هزار تومان یک هدیه</h5>
          </div>
          </div>
          <div className='group flex flex-col  px-1 pt-0  w-60 h-auto '>
            <div className="transition-all z-50 ease-in-out duration-500 opacity-0 absolute group-hover:opacity-100">
              <GrView className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
               <CiHeart className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
            </div>
            <div className=" w-full h-56 overflow-hidden ">
          <img className='transition-all scale-110 object-fill w-full ease-in-out duration-500 h-full group-hover:scale-125  bg-neutral-200 '  src={shoes1} alt="" />
          </div>
          <p className='text-jean'>jinwest</p>
          <h3 className='text-jean text-base font-medium mb-2'>شلوار...</h3>
          <p className='text-jean2 font-bold text-lg'>400<span className='text-jean2 text-base font-normal'>تومان</span></p>
          <div className='w-full bg-blue-200 justify-self-end'>
          <h5 className='self-center font-semibold text-center  '>هر 800 هزار تومان یک هدیه</h5>
          </div>
          </div>
          </div >
          <div className="flex flex-row  mt-24 w-full justify-center  my-3">
            <div className="flex flex-col border-neutral-400 border-solid border-l-2  items-center w-44 h-24">
              <img className="w-full object-contain scale-125 h-24 mb-2" src={banner6} alt="" />
              <h2 className="text-jean2 font-bold">تعویض انلاین</h2>
            </div>
               <div className="flex flex-col border-neutral-400 border-solid border-l-2  items-center w-44 h-24 mx-4">
              <img className="w-full h-24 object-contain mb-2" src={banner8} alt="" />
              <h2 className="text-jean2 font-bold">ارسال دوساعته </h2>
            </div>
            <div className="flex flex-col border-neutral-400 border-solid border-l-2  items-center w-44 h-24 mx-4">
              <img className="w-full object-contain h-24 mb-2" src={banner7}alt="" />
              <h2 className="text-jean2 font-bold">ضمانت اصالت</h2>
            </div>
            <div className="flex flex-col border-neutral-400 border-solid border-l-2  items-center w-44 h-24 mx-4">
              <img className="w-full object-contain h-24 mb-2" src={banner5} alt="" />
              <h2 className="text-jean2 font-bold">ضمانت بازگشت</h2>
            </div>
          </div>
          <div className="my-32 h-96 w-full cursor-pointer bg-neutral-400">
            <img className="h-full w-full object-cover" src={banner2} alt="" />
          </div>    
      </section>
      </main>
  )
}

export default Homepage