const xhr = new XMLHttpRequest();
const targetHost = "http://localhost:3000/categorias";
const urlBuscar = "http://localhost:3000/buscar/";

function crearMenuPorCategorias(){
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            const categorias = this.responseText
            document.getElementById("menuCategorias").innerHTML = categorias;
        }
    };

    xhr.open("GET", targetHost, true)
    xhr.send()
}

function buscarProductos(id) {

    const targetUrlProductos = targetHost + "/" + id;

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            //const categorias = this.responseText
            document.getElementById("productos").innerHTML = this.responseText;
        }
    };

    xhr.open("GET", targetUrlProductos, true)
    xhr.send()
}

function buscarProductoNombre() {
    const campo = document.getElementById("formField").value;
    const buscarProductoURL = urlBuscar + campo;

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            //const categorias = this.responseText
            document.getElementById("productos").innerHTML = this.responseText;
        }
    };

    xhr.open("GET", buscarProductoURL, true)
    xhr.send()
}