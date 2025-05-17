let product = {
    comapany : 'Mango',
    item_name :'cotton striped t-shirt',
    price : 783

};

console.log(product);
console.log(product['comapany']);
console.log(product.price)
console.log(product.item_name)
console.log(product.comapany)

console.log(typeof product);
console.log(typeof product.comapany);


delete product.price;
console.log(product)

product.year ='second';
console.log(product)