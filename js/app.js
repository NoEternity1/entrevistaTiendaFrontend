const xhr = new XMLHttpRequest();
const targetHost = "http://localhost:3000";

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


function pruebaConneccion() {
    console.log("boton presionado")

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("ajaxTest").innerHTML = this.responseText;
        }
    };

    xhr.open("GET", targetHost, true)
    xhr.send()
}

