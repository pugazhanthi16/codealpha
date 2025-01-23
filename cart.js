document.addEventListener('DOMContentLoaded', () => {
  // Update quantity and total price
  document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function () {
      const action = this.getAttribute('data-action');
      const quantityValue = this.parentElement.querySelector('.quantity-value');
      let quantity = parseInt(quantityValue.textContent);

      if (action === 'increase') {
        quantity += 1;
      } else if (action === 'decrease' && quantity > 1) {
        quantity -= 1;
      }

      quantityValue.textContent = quantity;

      // Update total price dynamically
      const price = parseFloat(this.closest('.cart-item').querySelector('p:nth-child(2)').textContent.split('$')[1]);
      const totalElement = this.closest('.cart-item').querySelector('.item-actions p');
      totalElement.textContent = Total: $${(price * quantity).toFixed(2)};
    });
  });

  // Remove item
  document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function () {
      this.closest('.cart-item').remove();
    });
  });
});