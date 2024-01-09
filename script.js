function start() {
    console.log("Iniciando función start");

    // Ocultar la imagen completa
    document.getElementById('imagen-gif').style.display = 'none';

    // Mostrar las partes izquierda y derecha
    let parteIzquierda = document.getElementById('parte-izquierda');
    let parteDerecha = document.getElementById('parte-derecha');
    parteIzquierda.style.display = 'block';
    parteDerecha.style.display = 'block';

    // Animar las partes izquierda y derecha
    let posicion = 0;
    let intervalo = setInterval(function() {
        if (posicion === 10) { 
            clearInterval(intervalo);
        } else {
            posicion++;
            parteIzquierda.style.left = (-posicion) + 'px'; 
            parteDerecha.style.right = (-posicion) + 'px'; 
        }
    }, 100);
}
