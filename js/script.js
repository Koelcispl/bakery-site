  // Contact Form
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
