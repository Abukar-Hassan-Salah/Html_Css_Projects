# Ecommerce System Fixes

- [ ] Fix app.js: Change `products.array.forEach` to `products.forEach`, fix malformed HTML template with proper interpolation and closing tags.
- [x] Fix cart.html: Add parentheses to `onclick="checkout()"` in the checkout button.
- [x] Fix cart.js: Change `cart.array.forEach` to `cart.forEach`.
- [x] Fix admin.html: Change `<div id="price" placeholder="Price"></div>` to `<input id="price" placeholder="Price">`.
- [x] Fix admin.js: Update `function remove()` to `function remove(i)` and use `products.splice(i,1)`.
