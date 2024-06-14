import { GrView } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { suggestion } from "../products/Jane West's suggestion";

function Cardproduct() {
   
  return (
    <div className='flex flex-row'>
        {suggestion.map((product)=>(
          <div key={product.id} className='group cursor-pointer flex flex-col mr-2 px-1 pt-0  w-60 h-auto '>
          <div className="transition-all ease-in-out duration-500 opacity-0 z-50 absolute group-hover:opacity-100">
                <GrView className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
                 <CiHeart className="mx-2 mt-2 text-4xl p-2 bg-neutral-300 text-white rounded-full"/>
              </div>
              <div className=" w-full h-56 overflow-hidden ">
            <img className='transition-all object-fill w-full ease-in-out duration-500 h-full group-hover:scale-110  bg-neutral-200 '  src={product.image} alt="" />
            </div>
            <p className='text-jean'>jinwest</p>
            <h3 className='text-jean text-base font-medium mb-2 w-full truncate'>{product.name}</h3>
            <p className='text-jean2 font-bold text-lg'>{product.price}<span className='text-jean2 text-base font-normal'>تومان</span></p>
            <div className='w-full bg-blue-200 justify-self-end'>
            <h5 className='self-center font-semibold text-center  '>هر 800 هزار تومان یک هدیه</h5>
            </div>
            </div>
        ))}
     </div>
        
    
  )
}

export default Cardproduct