const displayLocalStorageItems = () => {
    const items = getProduct();
    for (const name in items) {
        displayItems(name, items[name]);
    }
}

const addItem = () => {
    const productNameInput = document.getElementById('product-input');
    const productNameValue = productNameInput.value.toLowerCase();

    const productPriceInput = document.getElementById('product-price');
    const productPriceValue = productPriceInput.value;    

    if (productNameValue && productPriceValue) {


            // set local storage value
            setInternalProduct(productNameValue, productPriceValue);
            displayItems(productNameValue, productPriceValue);

            productNameInput.value = '';
            productPriceInput.value = ''; 
    }

}

const getProduct = () => {
    const product = localStorage.getItem('products');
    let newProduct;
    if (product) {
        newProduct = JSON.parse(product);
    }
    else {
        newProduct = {};
    }
    return newProduct;
}

const setInternalProduct = (productName, productPrice) => {
    const product = getProduct();
    if (product[productName]) {
        product[productName] = parseFloat(product[productName]) + parseFloat(productPrice);
    }
    else {
        product[productName] = productPrice;
    }
    const stringified = JSON.stringify(product).toLowerCase();
    localStorage.setItem('products', stringified);
}

const displayItems = (name, price)=> {
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = `Product name : ${name.toUpperCase()}
    Product price : ${price}`;
    ul.appendChild(li);
}

displayLocalStorageItems();