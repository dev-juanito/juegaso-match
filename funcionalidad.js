function girar(carta, img){
    document.getElementById(carta).classList.add('girar');
    setTimeout(() => {
        document.getElementById(img).src="./imagenes/gato1.jpg";
    }, 200);
}


function sumar (numero1,numero2){//es un ejemplo de una funcion
    alert(numero1 + numero2)
} 