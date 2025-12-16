// Lo primero que tenemos que hacer es guardar esta etiqueta en una constante para tener acceso a las propiedades del nodo, para modificar su contenido.

const title = document.querySelector("#app-title");
// Guardamos en la constante 'title' el nodo que tiene el id 'app-title'

// Ahora podemos modificar el texto que contiene esa etiqueta utilizando la propiedad 'textContent' de la constante 'title'.

// Mandamos a llamar nuestra constante para ver qué contiene

title;

// Esto nos mostrará en la consola el nodo completo. Ahora para poder ver las propiedades del nodo, podemos usar 'console.dir()'

console.dir(title);

// Ahora podemos modificar el texto utilizando la propiedad 'textContent'

// Antes de modificar el texto, veamos qué contiene la propiedad 'textContent'

title.textContent;

// Ahora sí, vamos a modificar el texto

// Volvemos a usar 

title.textContent = "Modificando el texto desde JavaScript";

// Ahora si mandamos a llamar la constante 'title' de nuevo, veremos que el texto ha cambiado, viendo el nodo completo en el HTML.

// Existe otra forma para cambiar el texto, que es usando 'innerText', pero esta propiedad tiene algunas diferencias con 'textContent', como que 'innerText' respeta el estilo CSS (por ejemplo, si un texto está oculto con 'display: none', 'innerText' no lo mostrará, mientras que 'textContent' sí lo hará).

// Vamos a ver de nuevo el nodo completo 

title.innerText = "Modificando el texto usando innerText";

// Y ahora veamos las propiedades del nodo otra vez

console.dir(title);

// Ahora el texto ha cambiado nuevamente, esta vez usando 'innerText'.