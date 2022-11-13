const urlCategorias = "https://bsale-tiendaonline-entrevista.herokuapp.com/categorias";
const urlBuscar = "https://bsale-tiendaonline-entrevista.herokuapp.com/buscar/";

$( document ).ready(function() {
    $.get( urlCategorias, function(response, status){
        if (status === "success") {
            const menuList = [];
            response.map((menuItem) => {
                menuList.push("<li><a id=" + menuItem.id + " class=dropdown-item href=# onclick=filtroCategorias(id) >" + menuItem.name + "</a></li>");
            })
            $("#menuCategorias").html(menuList.join(""));
        } 
    })
});

function filtroCategorias(id) {
    $.get(urlCategorias + "/" + id, function(response, status){
        if (status === "success") {
            const listaProductos = [];
            response.map((product) => {
                listaProductos.push(
                    "<div class='col-12 col-sm-3'><div class='card mb-5 customCard' style=width: 18rem;><img src=" + product.url_image + " class='card-img-top mt-5' alt=''><div class='card-body d-flex flex-column justify-content-center align-items-center'><h5 class=card-title>" + product.name + "</h5><p class=card-text>$" + product.price + "</p><a href=# class='btn btn-primary position-absolute bottom-0 mb-2'>Agregar al Carro</a></div></div></div>"
                )
            })
            $("#productos").html(listaProductos.join(""));
        }
    })
}

function buscarProductoNombre(){
    $.get(urlBuscar + $("#formField").val(), function(response, status){
        if (status === "success"){
            const productoEncontrado = [];
            response.map((product) => {
                productoEncontrado.push(
                    "<div class='col-12 col-sm-3'><div class='card mb-5 customCard' style=width: 18rem;><img src=" + product.url_image + " class='card-img-top mt-5' alt=''><div class='card-body d-flex flex-column justify-content-center align-items-center'><h5 class=card-title>" + product.name + "</h5><p class=card-text>$" + product.price + "</p><a href=# class='btn btn-primary position-absolute bottom-0 mb-2'>Agregar al Carro</a></div></div></div>"
                )
            })
            $("#productos").html(productoEncontrado.join(""));
        }
    })
}