const contenedor = document.getElementById('container');
const rows = 11;
const columns= 11;

for(let i = 0; i < rows; i++) {
    for(let j = 0; j < rows; j++) {
        const div = document.createElement('div');
        div.classList.add("gridItem");
        contenedor.appendChild(div)
    }
}
contenedor.style.gridTemplateColumns = `repeat(${columns}, auto)`;
contenedor.style.gridTemplateRows = `repeat(${rows}, auto)`;
