document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  const product = document.getElementById('product').value.trim();
  const quantity = document.getElementById('quantity').value.trim();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();

  // Simple phone validation (9 to 12 digits only)
  const phonePattern = /^[0-9]{9,12}$/;

  if (!product || !quantity || !name || !phone || !address) {
    alert('Please fill in all fields.');
    return;
  }

  if (!phonePattern.test(phone)) {
    alert('Please enter a valid phone number (9-12 digits).');
    return;
  }

  // If everything is valid
  alert('Order submitted successfully!');
  // You can reset the form or send data to a server here
  document.getElementById('orderForm').reset();
});
