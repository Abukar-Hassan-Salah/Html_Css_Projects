let cart=JSON.parse(localStorage.getItem("cart")) || [];
const productDiv=document.getElementById("products");
products.forEach(p=> {
    productDiv.innerHTML +=`
    <div class="product">
    <h3>${p.name}</h3>
    <p>${p.price}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
    `;
});

function addToCart(id){
    cart.push(id);
    localStorage.setItem("cart",JSON.stringify(cart))
    alert("Product Added To Cart")
}
