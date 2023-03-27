
const setMultiValueToLocalStorage = (id) => {
    let shoppingCart;

    //  Get the shopping cart from local storage
    const getShoppingCart = localStorage.getItem('shopping-cart');
    if (getShoppingCart) {
        shoppingCart = JSON.parse(getShoppingCart);
    } else {
        shoppingCart = {};
    }

    // Update / Add Quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const deleteFromDB = (id) => {
    const getShoppingCart = localStorage.getItem('shopping-cart');

    const shoppingCart = JSON.parse(getShoppingCart);
    // console.log(typeof shoppingCart, shoppingCart);

    if (getShoppingCart) {
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

export {setMultiValueToLocalStorage, deleteFromDB};