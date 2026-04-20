export {addItem, calculateTotal, deleteItem, removerItem, displaycarts}

// quais ações meu carrinho pode fazer

// adicionar item no carrihno
async function addItem(userCart, item) {
    userCart.push(item)
}


// deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item)=> item.name === name);
    if(index !== -1){
        userCart.splice(index, 1);
    }
}


// remover um item do - diminui um item
async function removerItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if (indexFound === -1) {
        console.log('item não encontrado')
        return;
    }
    
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return;
    }

    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1)
        return;
    }
}

// mostra todos os items do carrinho
async function displaycarts(userCart) {
    userCart.forEach((item, index) => {
        console.log(`${index +1}. ${item.name} - R$ ${item.price} | ${item.quantity} || subtotal = ${item.subtotal()}`)
    });
}

// calcular o total
async function calculateTotal(userCart) {
    console.log('\nShopee cart TOTAl IS: ')
    const result = userCart.reduce((total, item)=> total + item.subtotal(),0)
    console.log(`total:  ${result}`);
}
