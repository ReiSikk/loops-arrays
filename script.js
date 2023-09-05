let array = ["Jack", 7, "John", true, "Charlotte", 8 ];

array.forEach(findType);
function findType(value) {
    console.log(value + " " +  "is" + " " + "a" + " " +  typeof value);
}

let productArray = [
    {
        name: "Apple",
        price: 2.5,
        quantityInStock: 10
    },
    {
        name: "Banana",
        price: 2,
        quantityInStock: 5
    },
    {
        name: "Water",
        price: 1,
        quantityInStock: 100
    }
]

productArray.forEach(productData);
totalProducts(productArray);

function productData(item) {
    console.log(item.name + " " + "price is" + " " + item.price + " " + "and quantity in stock is" + " " + item.quantityInStock);
}

function totalProducts() {
    let total = 0;
    for (let i = 0; i < productArray.length; i++) {
        total += productArray[i].quantityInStock;
    }
console.log("Total products in stock is" + " " + total);
}
