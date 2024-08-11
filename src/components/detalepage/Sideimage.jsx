import React, { useState } from 'react'

function Sideimage({image}) {

    const [position,setPosition]=useState({x:0,y:0})
    const [showMagnifier,setShowMagnifier]=useState(false)
    const [cursorPosition,setCursorPosition]=useState({x:0,y:0})

    const moveHanler=(e)=>{
        const {top ,left ,width,height}=e.currentTarget.getBoundingClientRect()
        const x=((e.pageX-left) / width) * 100;
       const y=(( e.pageY-top ) /height ) *100;
       setPosition({x,y})
      setCursorPosition({x:e.pageX - left,y:e.pageY - top})
    
    }

  return (
    <div onMouseMove={moveHanler} onMouseLeave={()=>setShowMagnifier(false)} onMouseEnter={()=>setShowMagnifier(true)} className='col-span-2 cursor-none w-full h-full pl-8 relative z-10'>
        <img className='h-[600px] w-full ' src={image} alt="" />
       { showMagnifier&&
        <div style={{
            position:"absolute",
            left:`${cursorPosition.x - 100}px`,
            top:`${cursorPosition.y - 100}px`,
            pointerEvents:"none"
        }}>
            <div className='w-52 h-52 rounded-full ring-4 ring-neutral-300' style={{
                backgroundImage:`url(${image})`,
                backgroundPosition:`${position.x}% ${position.y}%`,
                
            }} />
        </div>}
    </div>
  )
}

export default Sideimage