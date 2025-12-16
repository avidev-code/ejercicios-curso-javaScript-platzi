document // Tenemos que saber qué vamos a seecionar. En este caso vamos a seleccionar que tenga el id de parent (target-root)

// 1. Navegando por el DOM a través de los nodos HIJOS (child nodes)
const parent = document.getElementById("parent");
console.log("parent"); // Nos devuelve una NodeList con todos los nodos hijos (incluyendo los nodos de texto, como los espacios en blanco y saltos de línea)

const children = parent.children;
console.log("children"); // Nos devuelve una HTMLCollection con todos los nodos hijos que son elementos (sin incluir los nodos de texto)

const firstChild = parent.firstElementChild;
console.log("firstChild"); // Nos devuelve el primer nodo hijo que es un elemento

const lastChild = parent.lastElementChild;
console.log("lastChild"); // Nos devuelve el último nodo hijo que es un elemento

const previousSibling = lastChild.previousElementSibling;
console.log("previousSibling"); // Nos devuelve el nodo hermano anterior que es un elemento

const nextSibling = firstChild.nextElementSibling;
console.log("nextSibling"); // Nos devuelve el nodo hermano siguiente que es un elemento

// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // first node
// firstElementChild; // first element node
// lastChild; // last node
// lastElementChild; // last element node
// previousSibling; // previous node
// previousElementSibling; // previous element node
// nextSibling; // next node
// nextElementSibling; // next element node

// No es habitual usar estos métodos para navegar por el DOM, pero es importante conocerlos para entender cómo funciona el DOM y cómo podemos manipularlo de diferentes maneras.

// 2. Navegando por el DOM a través de los nodos HIJOS A PADRES (parent nodes)
const children2 = document.querySelector("li");
console.log("children2"); // Nos devuelve el primer elemento li que encuentra en el documento

const parent2 = children2.parentNode;
console.log("parent2"); // Nos devuelve el nodo padre del elemento li (en este caso, el elemento ul)

const grandParent = children2.parentNode;
console.log("grandParent"); // Nos devuelve el nodo abuelo del elemento li (en este caso, el elemento menu)

const greatGrandParent = children2.parentNode;
console.log("greatGrandParent"); // Nos devuelve el nodo bisabuelo del elemento li (en este caso, el elemento header)

// parentNode; // parent node
// parentElement; // parent element node
// grandParent; // grand parent node
// greatGrandParent; // great grand parent node