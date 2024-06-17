import React from 'react'
import { useproduct } from '../context/ProcuctsProvidev'

function Checkout() {
  const [state,dispatch]=useproduct()
  
  return (
    <div>Checkout</div>
  )
}

export default Checkout