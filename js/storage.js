const addItem = () => {
    const productNameInput = document.getElementById('product-input');
    const productNameValue = productNameInput.value;

    const productPriceInput = document.getElementById('product-price');
    const productPriceValue = productPriceInput.value;

    setInternalProduct(productNameValue, productPriceValue);

    console.log(productNameValue, productPriceValue);
    productNameInput.value = '';
    productPriceInput.value = '';
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
console.log(getProduct);
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