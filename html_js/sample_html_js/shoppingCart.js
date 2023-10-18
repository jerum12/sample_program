//Define a cart array
const cart = [];

//from api backend database

// const processShoppingData = () => {

//  <h5 class="card-title">Clothing 1</h5>
//                   <p class="card-text">Price: ₱50</p>
//                   <a href="#" class="btn btn-primary add-to-cart" data-product-id="1"
//                     >Add to Cart</a
//                   >

//   const cardBody = document.querySelectorAll('.card-body');
//   cardBody.forEach((item, idx) => {
//     const h5Element = document.createElement('h5');
//     h5Element.classList.add('card-title');
//     h5Element.textContent = shoppingCart[idx].name;
//     item.appendChild(h5Element);

//     const pElement = document.createElement('h5');
//     pElement.classList.add('card-text');
//     pElement.textContent = `Price : ${shoppingCart[idx].price}`;
//     item.appendChild(pElement);

//     const aElement = document.createElement('a');
//     pElement.classList.add('card-text');
//     pElement.textContent = `Price : ${shoppingCart[idx].price}`;
//     item.appendChild(pElement);

//     //aElement.addEventListener
//   });
// };

//3 button na add to cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');
//ni loop si button
addToCartButtons.forEach((btn) => {
  // kinuha isa isa button
  //nag add ng event listener na click
  btn.addEventListener('click', () => {
    //kukunin nya ung attribut na data-product-id
    //1,2,3
    const productId = btn.getAttribute('data-product-id');
    //function mag add to cart pinasa ko ung nakuha kong product id
    addToCart(productId);
  });
});

const addToCart = (productId) => {
  const product = getData(productId);

  if (product) {
    // {id: 2, name: 'Clothing 2',price: 80}
    const existing = cart.find((p) => p.id.toString() === productId.toString());

    if (existing) {
      existing.quantity += 1;
      existing.totalPrice += existing.price ?? 0;
    } else {
      cart.push({ ...product, quantity: 1, totalPrice: product.price ?? 0 });
    }

    updateCartDisplay();
    console.log('product', product);
  }
};

const updateCartDisplay = () => {
  const cartList = document.querySelector('#cart-list');
  cartList.innerHTML = '';

  cart.forEach((item) => {
    const divItem = document.createElement('div');
    divItem.textContent = `Name : ${item.name} - Quantity : ${item.quantity} - Total : ${
      item.totalPrice ?? 0
    }`;

    cartList.appendChild(divItem);
  });

  const totalPrice = calculateTotalPrice();
  const totalElement = document.createElement('div');
  totalElement.textContent = `Total Price: ${totalPrice}`;
  cartList.appendChild(totalElement);
};

const calculateTotalPrice = () => {
  return cart.reduce((total, item) => total + item.totalPrice, 0);
};

const getData = (id) => {
  //get element na may ganitong attribute  data-product-id="2"
  const element = document.querySelector(`[data-product-id="${id}"]`);
  //kunin ung previous element sibling nya
  //kunin textContent nun Price: ₱80
  let price = element.previousElementSibling.textContent;

  price = parseInt(price.substring(8));
  //Price: ₱10000
  //kunin si name from previous previous element sibling
  const name = element.previousElementSibling.previousElementSibling.textContent;

  //mag return ng object
  const obj = { id, name, price };

  return obj;

  //   const shoppingCart = [
  //     { id: 1, name: 'Clothing 1', price: 50 },
  //     { id: 2, name: 'Clothing 2', price: 80 },
  //     { id: 3, name: 'Clothing 3', price: 100 },
  //   ];

  //   return shoppingCart.find((p) => p.id.toString() === productId.toString());
};

// window.addEventListener('load', () => {
//   processShoppingData();
// });
