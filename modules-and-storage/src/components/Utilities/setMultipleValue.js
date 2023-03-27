
const setMultiValueToLocalStorage = (id) => {
    let shoppingCart;
    const getShoppingCart = localStorage.getItem('shopping-cart');
    
    if (getShoppingCart) {
        shoppingCart = JSON.parse(getShoppingCart);
    } else {
        shoppingCart = {};
    }
    const quantity = shoppingCart[id];
    // console.log(quantity, typeof quantity);

    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

export {setMultiValueToLocalStorage};