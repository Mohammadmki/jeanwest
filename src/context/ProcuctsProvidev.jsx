import React, { createContext, useContext, useReducer } from 'react'
import { sumproducts } from '../helper/helper';
import { select } from '@material-tailwind/react';

const initialState={
    selectedproduct:[],
    itemsCuonter:0,
     total:0
}
const reducer=(state,action)=>{
switch (action.typeof) {
    case 'ADD-ITEM':
      if(!state.selectedproduct.find((product)=>product.id==action.payload.id)){
        state.selectedproduct.push({...action.payload,quantity:1 });
        console.log(state.selectedproduct)
      }
      return {
        selectedproduct:[...state.selectedproduct],
          ...sumproducts(state.selectedproduct)
      }
        
        case "REMOVE-ITEM":
        const newSelectedProducts=state.selectedproduct.filter((i)=>i.id!==action.payload.id);
         return{
          ...state,
          selectedproduct:[...newSelectedProducts],
          ...sumproducts(newSelectedProducts)
         }
         case "INCRASE":
          const incraseIndex=state.selectedproduct.findIndex((item)=>item.id==action.payload.id)
          state.selectedproduct[incraseIndex].quantity++
          return{
            ...state,
            ...sumproducts(state.selectedproduct)
          }
          case "DECRASE":
            const decraseIndexx=state.selectedproduct.findIndex((item)=>item.id==action.payload.id)
            state.selectedproduct[decraseIndexx].quantity--
            return{
              ...state,
              ...sumproducts(state.selectedproduct)
            }
    default:
      throw new Error("invalid action")
}
}

const productContext=createContext()
function ProcuctsProvidev({children}) {
    const [state,dispatch] =useReducer(reducer,initialState)
  return (
    <productContext.Provider value={{state,dispatch}}>{children}</productContext.Provider>
  )
}
const useproduct=()=>{
    const {state,dispatch}=useContext(productContext)
    return [state,dispatch]
}

export default ProcuctsProvidev
export{useproduct}