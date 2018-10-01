page('/', index);
page('/colecao', colecao);
// page('/product/:produtctId, product');
page();

function colecao() {
    $("main").html(carregaProducts());
}


function index() {
    $("main").html(idexRender());
}



function idexRender() {
    let indexRender = `<div class="d-flex justify-content-center  mb-3">
    <img src="dist/bands.jpg" class="img-fluid" alt="Responsive image">
  </div>`
    return indexRender;
}


