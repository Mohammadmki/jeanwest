const sumproducts=(product)=>{
    const itemsCounter=product.reduce((cuonter,product)=>cuonter+product.quantity ,0)
    const total=product.reduce((total,product)=>total+product.price,0)
    return {itemsCounter,total}
}
export {sumproducts}