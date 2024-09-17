console.log("Hola Mundo")

document.querySelector('h1').textContent = "Productos";  // Añadir texto "Productos" en el h1

// Seleccionamos el section con clase container
const container = document.querySelector('section.container');

// Crear un array vacío fuera del for
let cardsArray = [];

// Usar un for que comienza en 1 para generar las cards dinámicamente
for (let i = 1; i <= 5; i++) {  // Puedes cambiar el valor 5 por la cantidad de cards que quieras generar
  let card = `
    <div class="card">
      <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="Producto ${i}">
      <div class="card-body">
        <h2>Producto ${i}</h2>
        <p>Descripción del producto ${i}.</p>
      </div>
    </div>
  `;

  // Agregar la card al array con push
  cardsArray.push(card);
}

// Asignar las cards generadas al innerHTML de la section
container.innerHTML = cardsArray.join('');