const displayLocalStorageItems = () => {
    const items = getProduct();
    console.log(items);
    for (const name in items) {
        console.log(items[name]);
        displayItems(name, items[name]);
    }
}

const addItem = () => {
    const productNameInput = document.getElementById('product-input');
    const productNameValue = productNameInput.value;

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
    console.log(product);
    const stringified = JSON.stringify(product);
    localStorage.setItem('products', stringified);
}

const displayItems = (name, price)=> {
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = `Product name : ${name}
    Product price : ${price}`;
    ul.appendChild(li);
}

displayLocalStorageItems();