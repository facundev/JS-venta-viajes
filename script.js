import { barcelona, roma, paris, londres } from './ciudades.js';

// obtener los elementos del DOM
let enlaces = document.querySelectorAll('a'); // hacemos una consulta de todos los selectores que sean 'a'
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

// agregar un evento click a cada enlace
enlaces.forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    // Remover activo
    enlaces.forEach(function (enlace) {
      enlace.classList.remove('active');
    });
    // agregar la clase active al enlace actual
    this.classList.add('active');

    // obtener el contenido correspondiente
    let enlaceTexto = this.textContent.trim();
    console.log(`Texto del enlace clickeado: '${enlaceTexto}'`); // Depuración
    let contenido = obtenerContenido(this.textContent);

    // mostrar datos en el DOM
    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
  });
});

// funcion para traer la información correcta desde ciudades.js
function obtenerContenido(enlace) {
  let contenido = {
    'Barcelona': barcelona,
    'Roma': roma,
    'París': paris,
    'Londres': londres
  };
  return contenido[enlace];
}