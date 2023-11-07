const contenedor = document.getElementById('container');
// function createDiv() {
//     const div = document.createElement('div');
//     div.classList.add("gridItem");
//     contenedor.appendChild(div)
// }
const rows = 16;
const columns= 16;

for(let i = 0; i < rows * rows; i++) {
        const div = document.createElement('div');
        div.classList.add("gridItem");
        contenedor.appendChild(div)
    
}

// for(let i = 0; i < rows; i++) {
//     for(let j = 0; j < rows; j++) {
//         const div = document.createElement('div');
//         div.classList.add("gridItem");
//         contenedor.appendChild(div)
//     }
// }