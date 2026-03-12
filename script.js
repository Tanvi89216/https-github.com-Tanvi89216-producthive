const products = [
  {id:1,name:"Smart Watch",category:"Electronics",price:"₹2999"},
  {id:2,name:"Wireless Earbuds",category:"Accessories",price:"₹1999"},
  {id:3,name:"Gaming Mouse",category:"Gaming",price:"₹1499"},
  {id:4,name:"Bluetooth Speaker",category:"Audio",price:"₹2499"}
 ];
 
 const params = new URLSearchParams(window.location.search);
 const id = parseInt(params.get("id"));
 
 const product = products.find(p => p.id === id);
 
 document.getElementById("product-name").innerText = product.name;
 document.getElementById("product-category").innerText = product.category;
 document.getElementById("product-price").innerText = product.price;