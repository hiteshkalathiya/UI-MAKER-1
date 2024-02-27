let products = [];

const ui = () => {
  document.getElementById("data").innerHTML = "";
  for (let i = 0; i < products.length; i++) { 
    let img = document.createElement("img");
    img.src = products[i].img;
    let h1 = document.createElement("h1");
    h1.textContent = products[i].titel; 
    let price = document.createElement("p");
    price.textContent = products[i].price; 
    let div = document.createElement("div");
    div.classList.add("product-listing");
    div.append(img, h1, price);
    document.getElementById("data").append(div);
  }
};

const header = (e) => {
  e.preventDefault();

  let img = document.getElementById("img").value;
  let titel = document.getElementById("titel").value;
  let price = document.getElementById("price").value;

  let product = {
    img: img,
    titel: titel,
    price: price,
  };
  products.push(product);
  ui();
  console.log(products);
};

document.getElementById("form").addEventListener("submit", header);
