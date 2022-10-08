import { getStorage } from "../utilities/fakedb"

export const ProductsAndCardLoader = async () => {
 const productsData= await fetch('products.json')
 const products= await productsData.json()

 const saveCard=  getStorage()
// console.log( 'saveCard',saveCard)
const previousCard=[]
console.log(products)
for(const id in saveCard){
   const added= products.find(pd=>pd.id===id)
//    console.log(id,added)
   if (added) {
    const quantity = saveCard[id]
    added.quantity= quantity;
    previousCard.push(added)
   }
}
return {products:products,previousCard:previousCard};
}



