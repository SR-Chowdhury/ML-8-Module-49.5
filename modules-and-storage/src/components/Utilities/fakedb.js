const addCosmetics = (id) => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        // console.log('already exits');
        const newQuantity = +quantity + 1;
        localStorage.setItem(id, newQuantity);
    } else {
        console.log('new item');
        localStorage.setItem(id, 1);
    }
}

export {addCosmetics};