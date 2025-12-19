let products =JSON.parse(localStorage.getItem("products"))|| [
    {id :1,name:"laptop",price:800},
    {id:2,name:"Phone",price:900},
    {id:3,name:"HeadPhones",price:700},
     {id:4,name:"TelePhones",price:800}
];
localStorage.setItem("products",JSON.stringify(products));