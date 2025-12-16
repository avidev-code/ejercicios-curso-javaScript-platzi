// Cuando hablamos de atributos nos referimos a todas las cosas que vamos a agregar.
// Cuando nos referimos a propiedades hablamos de las características que ya vienen por defecto en los elementos HTML. Una vez que el navegador acaba de parsear el HTML, convierte los atributos en propiedades en reflejo del nodo del DOM.

const input = document.querySelector('input');
console.dir(input);

// Atributo: Es lo que escribimos en el HTML, esto se ve reflejado en las 
// Propiedad: Nodos, Es lo que el DOM interpreta y crea en memoria

// Ahora buscamos el value, class, y el id.

input.value = 'Hola mundo'; // Propiedad

// Luego del cambio de la propiedad, pero si queremos ir a documento para poder ver nuestro input, puedo ver que el value sigue siendo el mismo. No siempre están sincronizados los atributos con las propiedades.

// Mientras que la propiedades del DOM son dinámicas y pueden cambiar en tiempo de ejecución, los atributos son estáticos y permanecen iguales a menos que se modifiquen explícitamente.

// Los atributos reflejan el estado inicial del elemento cuando se cargó la página, mientras que las propiedades reflejan el estado actual del elemento en el DOM.