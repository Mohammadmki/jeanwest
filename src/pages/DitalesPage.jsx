import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { suggestion } from '../products/Jane West\'s suggestion'
import { GiFireZone } from "react-icons/gi";
import { CiHeart, CiRuler } from "react-icons/ci";
import { GrMapLocation, GrView } from "react-icons/gr";
import banner5 from '../assets/banner/b5.jpg'
import banner6 from '../assets/banner/b7.jpg'
import banner7 from '../assets/banner/b8.jpg'
import banner8 from '../assets/banner/b9.jpg'

import { mostvisited } from '../products/mostvisited';
import { Link } from 'react-router-dom';
import { useproduct } from '../context/ProcuctsProvidev';
import toast from 'react-hot-toast';
import { propTypesDefaultValue } from '@material-tailwind/react/types/components/slider';
import Modal from '../components/Modal';

function DitalesPage() {
  const sizes=[
    {name:"S" , id:1},
    {name:"M" , id:2},
    {name:"L", id:3},
    {name:"XL" , id:4},
    {name:"XXL" , id:5},
    {name:"XXXL" , id:6},
  ]
  
  const id=useParams()
  const image=useRef(null)
  const[product,setProduct]=useState([])
  const[show,setshow]=useState(false)
const[sizee,setSize]=useState("M")
const[discriptionn,setDiscripton]=useState("ویژگی ها")
const[x,setx]=useState({})
const clickHandeler=()=>{
   
    image.current.classList=[image.current.classList," ring-2 ring-jean  ring-jean"]
  }

useEffect(()=>{
  for(let i=0;i<suggestion.length;i++)
    if(suggestion[i].id==id.id){
          
          setProduct((product)=>[...product,suggestion[i]])
         
    }
},[])

   const sizeHandeler=(e)=>{
   setSize(e.target.innerText)
  
   setx({...product[0],sizee})
   
   }
   
   const optionHandeler=(e)=>{
    setDiscripton(e.target.innerText)
    
   }
   const [state,dispatch]=useproduct()
const seavedProductHandeler=()=>{
  
    setx({...product[0]})
    dispatch({typeof:'ADD-ITEM',payload:x})
       setshow(true)
}
console.log(state)
console.log(show)
  return ( 
   
     <div className='flex flex-col justify-end  gap-8'>
      {show&&<Modal setshow={setshow} />}
      <div className='flex flex-row-reverse'>
       <div className='w-1/3 '>
        <div className='flex flex-col gap-y-4 xl:gap-y-6 border-neutral-200 border-b-2 border-solid'>
          <h3 className='text-jean text-lg font-normal md:text-xl xl:text-2xl'>jeanwest</h3>
          <h2 className='text-lg md:text-xl font-semibold '>{product[0]?.name}</h2>
          <p className='text-neutral-400'>دسته بندی:<span className='text-jean font-medium'>لباس</span></p>
          <p className='text-xl md:text-2xl xl:text-3xl font-bold text-jean2'>{product[0]?.price}<span className='font-normal text-base'>تومان</span></p>
          <p className='bg-blue-100 font-medium  w-fit px-1 mb-3 flex items-center'>نصف قیمت<GiFireZone className='text-orange-600 w-fit'/></p>
        </div>
        <div className='mt-3'>
          <p className='text-gray-500'>رنگ:<span className='font-medium text-black'>سبز</span></p>
          <img className='md:w-20 xl:w-20 mt-5 mb-5 cursor-pointer' ref={image} onClick={clickHandeler} src={product[0]?.image} alt="" />
          <div>
            <div className='flex flex-row justify-between w-full '>
            <p className='text-gray-500 md:text-base' >سایز: <span className={sizee==""? "text-red-800":"text-black"}>{sizee==""?"سایز خود را انخاب کنید":sizee}</span></p>
            <p className='ml-1 text-jean2 flex items-center cursor-pointer'><CiRuler className='text-3xl'/>راهنمای سایز</p>
            </div>
            <div>
            {sizes.map((size)=>(
               <button key={size.id} onClick={sizeHandeler} className={sizee==size.name?"w-14 cursor-pointer p-1 m-2 border-solid  border-neutral-300 border-2 ring-2 ring-jean2 ":"w-14 cursor-pointer p-1 m-2 border-solid  border-neutral-300 border-2  "} >{size.name}</button>
            ))}
            
            </div>
          </div>
          <div className='flex flex-row'>
          <button className='transition-all duration-300 ease-in-out w-40 h-10 ml-2 md:w-48 xl:w-48  xl:h-12 md:h-12 font-semibold rounded-sm bg-jean text-white hover:bg-jean2' onClick={seavedProductHandeler}>اضافه کردن به سبد خرید</button>
          <button className='ring-1 w-40 h-10 flex items-center xl:w-52 xl:h-12 ring-neutral-300 md:h-12 md:w-44 font-semibold'>  <GrMapLocation className='text-xl'/>   موجودی در شعب   </button>
          </div>
        </div>
        </div>
        <div className='w-2/3'>
          <img src={product[0]?.image} alt="" />
        </div>
        </div>
        <div className="flex flex-row justify-center my-8">
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
              <div>
              <div className='flex flex-row gap-x-5 '>
                <h2 className={discriptionn=="ویژگی ها"?'duration-100 ease-in-out text-black text-lg font-semibold cursor-pointer border-solid border-b-4 border-black ':"text-neutral-400 text-lg font-semibold cursor-pointer "} onClick={optionHandeler} >ویژگی ها</h2>
                <h2  className={discriptionn=="مشخصات محصول"?'duration-100 ease-in-out text-black text-lg font-semibold cursor-pointer border-solid border-b-4 border-black ':"text-neutral-400 text-lg font-semibold cursor-pointer "} onClick={optionHandeler}>مشخصات محصول</h2>
                </div>
                <div  className={discriptionn=="ویژگی ها"?'bg-neutral-100  mt-2':'hidden'} >
                  <ul className='flex gap-y-3 p-1 flex-col list-disc list-inside  '>
                    <li >
                    <strong>جنس الیاف : </strong>80% نخ پنبه، 20% لینن
                    </li>
                    <li>
                      <strong>نرمی و زبری : </strong> کمی زبر
                    </li>
                    <li>
                    <strong>ضخامت : </strong>ضخامت
                    </li>
                    <li>
                    <strong>جزئیات :</strong>جیب
                    </li>
                  </ul>
                </div>
                <div className={discriptionn=="مشخصات محصول"?'bg-neutral-100 mt-2':'hidden'} >
                  <ul className='flex gap-y-3 p-1 flex-col list-disc list-inside '>
                    <li >
                    <strong> کد محصول : </strong>42531130J-2610-XXL
                    </li>
                    <li>
                      <strong> آستین : </strong> بلند
                    </li>
                    <li>
                    <strong>طرح  : </strong>طرح دار
                    </li>
                    <li>
                    <strong>جنس پارچه :</strong>نخ‌پنبه
                    </li>
                  </ul>
                </div>  
              </div>
              <div>
                <h2 className='text-xl font-bold text-black mt-7'>محصولات مشابه</h2>
                <div className='flex flex-row flex-wrap mb-36'>
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
     </div>
   )
}

export default DitalesPage