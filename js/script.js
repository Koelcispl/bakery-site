// // Get or init cart from localStorage
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// // Save cart to localStorage
// function saveCart() {
//   localStorage.setItem('cart', JSON.stringify(cart));
// }

// // Add product to cart
// function addToCart(product) {
//   cart.push(product);
//   saveCart();
//   alert(`${product.name} added to cart.`);
// }

// View cart in popup
// function viewCart() {
//   if (cart.length === 0) {
//     alert('Cart is empty.');
//     return;
//   }
//   let cartWindow = window.open('', 'Cart');
//   cartWindow.document.write('<h1>Your Cart</h1><ul>');
//   cart.forEach(item => {
//     cartWindow.document.write(`<li>${item.name} - ${item.price}</li>`);
//   });
//   cartWindow.document.write('</ul>');
// }

  // If there is a Cart link, hook it up too
  // const cartLinks = document.querySelectorAll('.cart-link');
  // cartLinks.forEach(link => {
  //   link.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     viewCart();
  //   });
  // });

  // Checkout Form
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name === '' || email === '' || phone === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert('Please enter a valid email address.');
      return;
    }

    const phonePattern = /^[0-9]{7,15}$/;
    if (!phone.match(phonePattern)) {
      alert('Please enter a valid phone number.');
      return;
    }

    alert('Thank you for your message!');

    this.reset();
  });
