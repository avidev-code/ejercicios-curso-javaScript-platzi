document.getElementById("app-title"); // Selecciona el elemento con id "app-title"
document.querySelector("#app-title"); // Ambas líneas seleccionan el mismo elemento con id "app-title"
document.querySelector("p"); // Selecciona el primer elemento <p> en el documento
document.getElementsByClassName("menu-items"); // Selecciona todos los elementos con la clase "menu-items" en forma de colección de elementos html
document.getElementsByTagName("p"); // Selecciona todos los elementos <p> en forma de colección de elementos html. Tendremos acceso al nodo, que es el objeto y podremos ver a qué hace referencia.
document.querySelectorAll(".menu-items"); // Selecciona todos los elementos con la clase "menu-items" en forma de NodeList. Es importante porque la lista de nodos nos puede traer elementos de HTML, como texto u otros nodos que se generan cuando estamos trabajando con el DOM.

// El performance es importante saber que cuando estemos seleccionando elementos del DOM, la forma más rápida es usando getElementById, luego getElementsByClassName y getElementsByTagName. Y por último querySelector y querySelectorAll que son los más lentos.