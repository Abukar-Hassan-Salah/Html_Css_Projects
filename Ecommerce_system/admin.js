let products=JSON.parse(localStorage.getItem("products")) || [];
const list=document.getElementById("productlist");

function display(){
    list.innerHTML= "";
    products.forEach((p,i) => {
        list.innerHTML +=`
        <li>${p.name} -$${p.price}
        <button onclick="remove(${i})">Delete</button></li>
        `;
        
    });
}
display();

function addProduct(){
    const name=document.getElementById("name").value;
    const price=document.getElementById("price").value;

    products.push({id:Date.now(),name,price});
    localStorage.setItem("products",JSON.stringify(products));
    display();
}

function remove(i){
    products.splice(i,1);
    localStorage.setItem("products",JSON.stringify(products))

    display();
}
