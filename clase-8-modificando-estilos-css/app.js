// Tenemos 3 formas para modificar estilos CSS con JavaScript

// Una vez seleccionado el elemento, podemos modificar sus propiedades desde los estilos.

// 1. Modificar la propiedad style del elemento '.style'. Pero tenemos que tener cuidado al uso de esta forma, porque una vez que le agregamos un estilo inline, lo cual  va a tener mayor prioridad que los estilos definidos en una hoja CSS externa o interna. Los va a reescribir, por temas de especificidad y nos puede genrar problemas si queremos cambiar estilos que ya teniamos definidos en CSS.

const title = document.querySelector("h1");

title;

title.style.color = "blue";

// Color son las propiedades dentro del style, pero en formato camelCase. De esta manera estaremos cambiando el color de nuestra fuente. Pero si vemos nuestro archivo HTML veremos que los estilos se han agregado inline, es decir, dentro del mismo elemento HTML.

// Seleccionamos otro elemento

const menu = document.querySelector("menu");

menu; // nos trae el elemento menu

menu.style.backgroundColor = "lightgray"; // cambiamos el fondo del menu. Ahora el menu tiene un fondo gris claro y se ha cambiado automáticamente.

// Ahora modificamos el tamaño de la fuente del menu

menu.style.fontSize = "25px"; // cambiamos el tamaño de la fuente del menu

// 2. Modificar las clases del elemento con className. Esta forma nos permite cambiar todas las clases que tiene un elemento por una nueva clase o conjunto de clases. También tenemos que usarla con mucho cuidado, porque si el elemento ya tiene clases asignadas, le asignamos otra clase distinta a la que tenga vamos a sobrescribir y perderemos las clases anteriores.

menu.className = "main-menu"; // le asignamos dos nuevas clases al menu