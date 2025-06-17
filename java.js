function dirigir(){

let seleccion=document.getElementById("opciones").value;

if (seleccion) {
    window.location.href=seleccion;
}
else{
    alert("Selecciona una pagina");
}
}
/*en este caso no hay q buscar el value porque es segun la eleccion que tome la id de opciones, y seleccion es la pagina que elegiste*/