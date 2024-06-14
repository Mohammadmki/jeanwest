import { useState } from "react";
import { suggestion } from "../products/Jane West's suggestion";

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
import accessory2 from '../assets/products/accesory/p6.jpg'
import women1 from '../assets/products/womenclothing/p7.jpg'



import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { category } from "../products/category";
import { mostvisited } from "../products/mostvisited";

function Homepage() {
  const[slider,setslider]=useState(0)
 const sliders=[
  banner1,
  banner3
 ]

 

 const nextslide=()=>{
  if(sliders.length>=slider){
    setslider(slider=> slider+1)
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
        <section>
        <h2 className='text-lg my-7 font-bold md:text-xl'>پیشنهاد جین وست</h2>
        <div className="flex flex-row flex-wrap">
        {suggestion.map((product)=>(
             <div key={product.id} className='group cursor-pointer flex flex-col mr-2 px-1 pt-0  w-52 h-auto md:w-60 xl:w-72 '>
             <div className="transition-all ease-in-out duration-500 opacity-0 z-50 absolute group-hover:opacity-100">
               <GrView className="mx-2 mt-2 text-3xl p-2 bg-neutral-300 text-white rounded-full md:text-4xl xl:text-5xl"/>
                <CiHeart className="mx-2 mt-2 text-3xl p-2 bg-neutral-300 text-white rounded-full  md:text-4xl lg:text-5xl"/>
             </div>
             <div className=" w-full h-56 overflow-hidden md:h-64 lg:h-72 xl:h-96">
           <img className='transition-all object-fill w-full ease-in-out duration-500 h-full group-hover:scale-110  bg-neutral-200 '  src={product.image} alt="" />
           </div>
           <p className='text-jean text-base md:text-lg '>jinwest</p>
           <h3 className='text-jean text-base font-medium mb-2 w-full truncate'>{product.name}</h3>
           <p className='text-jean2 font-bold text-base md:text-lg'>{product.price}<span className='text-jean2 text-base font-normal'>تومان</span></p>
           <div className='w-full bg-blue-200 justify-self-end'>
           <h5 className='self-center font-semibold text-center  '>هر 800 هزار تومان یک هدیه</h5>
           </div>
           </div>
        ))}
        </div>
        </section>
      
          <section className="my-36 flex flex-row flex-wrap">
           <h2 className=' text-lg md:text-xl  text-black my-7 font-bold w-full'>دسته بندی محصولات</h2>
          <div className="flex flex-row flex-wrap">
            {category.map((categori)=>(
                 <div key={categori.id} className="ring-1 mx-2 cursor-pointer ring-neutral-200 w-40 h-32 md:w-48 md:h-40 xl:w-52 xl:h-48">
                 <img className="w-full h-24 xl:h-40 md:h-32 object-cover bg-neutral-300" src={categori.Image} alt="" />
                 <div className="flex flex-row justify-between items-baseline ">
                   <p className='text-black font-bold text-base md:text-lg xl:text-xl'>{categori.name}</p>
                   <FaChevronLeft />
                 </div>
                </div>
            ))}
          </div>
          </section>
          <div>
            <img className="w-full h-96 xl:h-[420px] object-cover " src={banner4} alt="" />
          </div>
          <section className="m-1">
          <h2 className='text-xl my-7 font-bold'>پربازدید ترین محصولات</h2>
            <div className="flex flex-row flex-wrap">
              {mostvisited.map((product)=>(
                  <div key={product.id} className=' flex flex-row gap-4 flex-wrap m-0'>
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
                    <div className='w-full bg-blue-200 justify-self-end'>
                    <h5 className='self-center font-semibold text-center  '>هر 800 هزار تومان یک هدیه</h5>
                    </div>
                    </div>
                      </div>
              ))}
            </div>
             <div className="flex flex-row justify-center">
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
          <div className="my-32 md:h-96 xl:h-[420px] w-full cursor-pointer bg-neutral-400">
            <img className="h-full w-full object-cover" src={banner2} alt="" />
          </div>    
      </section>
      </main>
  )
}

export default Homepage