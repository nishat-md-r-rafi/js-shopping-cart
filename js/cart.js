// Array to store the cart items
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

const calculatePrice = (items) => {  
    let total = items?.reduce((accumulator, currentValue) => {
      return accumulator + parseInt(currentValue.price)
    }, 0);
    return total
}

const showTotalPrice = () => {  
    let totalPrice = document.getElementById("totalPrice") 
    let items = JSON.parse(localStorage.getItem("cart"));
    let price = calculatePrice(items)
    totalPrice.innerText = `$ ${price || 0}`
}

showTotalPrice()

const findLink = (nodes) => {  
    for (let index = 0; index < nodes.length; index++) {
        const node = nodes[index];
        if (node?.tagName?.toLowerCase() === 'a') {
            let image = node.childNodes[0]
            console.log(image.src)
            return image.src
        }
    }
}



// Function to add an item to the cart
const addProduct = (event) => {  
    let nodes = Array.from(event.target.parentNode.parentNode.parentNode.childNodes)
    let link =  findLink(nodes)
    let product = {name: event.target.dataset.name, price: event.target.dataset.price, link}
    product = JSON.stringify(product)
    cartItems?.includes(product) || cartItems.push(product)
    localStorage.setItem("cart", JSON.stringify(cartItems))
    // showTotalPrice()
    // console.log(cartItems)
}
