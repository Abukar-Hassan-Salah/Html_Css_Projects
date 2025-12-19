let cart=JSON.parse(localStorage.getItem("cart")|| []);
const cartDiv=document.getElementById("cart");
cart.forEach(id => {
    let product=products.find(p=>p.id === id);
    cartDiv.innerHTML += `
    <p>${product.name}- $${product.price}</p>
    `;
    
});
function checkout(){
        localStorage.removeItem("cart");
        alert("Order Placed Successfully");
        window.location.href="index.html";
    }
