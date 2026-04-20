import createItem from "./services/item.js"; 
import * as cartService from './services/cart.js'



const myCart = []
const myWhishList = []


console.log('Welcome to the your shopee Cart!');

const item1 = await createItem('hotwheels ferrari', 20.99, 1)
const item2 = await createItem("hotwheels lamborghini", 39.99, 3)
const item3 = await createItem("hotwheels fusca", 59.99, 2)

// cria itens
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

// remover um dos itens e deletar ser for = 1 
await cartService.removerItem(myCart, item1)

// mostrar os itens do carrinho
await cartService.displaycarts(myCart);

// deletar os itens do carrinho
// await cartService.deleteItem(myCart, item3.name)

await cartService.calculateTotal(myCart)