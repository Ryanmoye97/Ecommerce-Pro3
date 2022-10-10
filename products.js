let http = new XMLHttpRequest();
http.open("get", "user.json", true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let product = JSON.parse(this.responseText);
    let output = "";
    for (let item of product) {
      output += `
    <div class="products">
      <img class="image" src="${item.image}" alt="${item.image}">
      <p class="sneaker">${item.sneaker}</p>
      <p class="price">
      <span>${item.price}</span>
      </p>
      <a><p class="cart">Add To Cart <i class="bx bx-cart-alt"></i></p></a>
    </div></br> 
    `;
    }
    document.querySelector(".product").innerHTML = output;
  }
};