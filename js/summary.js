// Array to store the cart items
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// const countProductFrequency = (products) => {  
//     return products?.reduce((frequency, product) => {
//         let key = JSON.stringify(product);
//         frequency[key] = (frequency[key] || 0) + 1;
//         return frequency;
//     }, {});
// }

// const convertCountArray = (products) => {   
//     let productsArray = []
//     for (const item in products) {
//         let product = JSON.parse(item)
//         product = {...product, quantity: products[item]}
//         productsArray.push(product) 
//     }
//     return productsArray
// }

// const calculatePrice = (items) => {  
//     let total = items?.reduce((accumulator, currentValue) => {
//       return accumulator + parseInt(currentValue.price)
//     }, 0);
//     return total
// }

// const showTotalPrice = () => {  
//     let totalPrice = document.getElementById("totalPrice")
//     let items = JSON.parse(localStorage.getItem("cart"));
//     let price = calculatePrice(items)
//     totalPrice.innerText = `$ ${price || 0}`
//     let totalItems = document.getElementById("totalItems");
//     totalItems.innerText = `${items?.length || 0} Items`;
// }

// showTotalPrice()
// let frequency =  countProductFrequency(cartItems);
// let productsArray =  convertCountArray(frequency);

let rows = document.querySelector("tbody")
console.log(rows)
// for (const item of cartItems) {
//     let product = JSON.parse(item)
//     // console.log(product)
//     let row = document.createElement("tr")
//     row.innerHtml = `
//         <td> <img width="60" src=${product.link} alt=""/></td>
//         <td>Airpod<br/>Airpod</td>
//         <td>
//         <div class="input-append"><input class="span1" style="max-width:34px" placeholder="1" id="appendedInputButtons" size="16" type="text"><button class="btn" type="button"><i class="icon-minus"></i></button><button class="btn" type="button"><i class="icon-plus"></i></button><button class="btn btn-danger" type="button"><i class="icon-remove icon-white"></i></button>				</div>
//         </td>
//         <td>$2000.00</td>
//         <td>$200.00</td>
//         <td>1</td>
//         <td>$1800.00</td> 
//     `
//     rows.appendChild(row)
// }
// console.log(cartItems)
rows.innerHTML = cartItems.map(product => {
    product = JSON.parse(product)
    return `
    <tr>
        <td> <img width="60" src=${product.link} alt=""/></td>
        <td>${product.name}</td>
        <td>
        <div class="input-append"><input class="span1" style="max-width:34px" placeholder="1" id="appendedInputButtons" size="16" type="text"><button class="btn" type="button"><i class="icon-minus"></i></button><button class="btn" type="button"><i class="icon-plus"></i></button><button class="btn btn-danger" type="button"><i class="icon-remove icon-white"></i></button>				</div>
        </td>
        <td>$ ${product.price}</td>
        <td>1</td>
        <td>$ ${product.price}</td>
    </tr>
    ` 
}).join("") + `
                <tr>
                    <td colspan="6" style="text-align:right">Total Price:	</td>
                    <td> $0.00</td>
                 </tr>
              `

