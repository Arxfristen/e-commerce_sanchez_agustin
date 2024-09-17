console.log("Hola Mundo")


document.querySelector('h1').textContent = "Productos";  


const container = document.querySelector('section.container');


let cardsArray = [];


for (let i = 1; i <= 5; i++) {  
  let card = `
    <div class="card">
      <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="Producto ${i}">
      <div class="card-body">
        <h2>Producto ${i}</h2>
        <p>Descripción del producto ${i}.</p>
      </div>
    </div>
  `;

 
  cardsArray.push(card);
}


container.innerHTML = cardsArray.join('');