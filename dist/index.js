$(document).ready(() => {
  const btnBusca = document.getElementById("btn-busca");
  btnBusca.addEventListener("click", pegaBusca);
});
let produtos = [];

function buscaProduct() {
  return "q=";
}

function erro() {
  console.log("erro");

}

function pegaBusca(event) {
  event.preventDefault();
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=camiseta+rock`

  $.ajax({
    type: "GET",
    url: url,
    success: carregaProducts,
    error: erro

  });
}

function carregaProducts(data) {
  produtos = data.results;
  exibeProducts();
}

function exibeProducts() {
  let exibeImagem = document.getElementById("exibe-busca");
  exibeImagem.innerHTML = `${produtos.map(doc => `
  <div class="col produto"><p><b>${doc.title}</b></p>
  <img class="imagens" src=${doc.thumbnail}> 
  <p>R$ ${doc.price}</p>
  <button onclick="clickCounter()" type="button">Comprar</button></div>`).join("")}`

}
function clickCounter() {
  if (typeof (Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = localStorage.clickcount;
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}