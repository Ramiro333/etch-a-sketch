const contenedor = document.getElementById('container');
//contruir grid
function construirGrid (rows){ 
        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < rows; j++) {
            const div = document.createElement('div');
            div.classList.add("gridItem");
            contenedor.appendChild(div)
        }
    } 
    contenedor.style.gridTemplateColumns = `repeat(${rows}, auto)`;
    contenedor.style.gridTemplateRows = `repeat(${rows}, auto)`;  
}
construirGrid(6)
const gridButtonSet = document.getElementById('buildGrid');

gridButtonSet.addEventListener ('click', () => {
    contenedor.innerHTML = '';
    let rows = prompt("grid size: ")
    if(!isNaN(rows) && rows <= 64 ){    
    construirGrid(rows)
    const gridSquare = document.querySelectorAll('.gridItem');
    pintarGrid()
    } else {
        alert('porfavor, ingrese numeros validos')
        construirGrid (6)
        pintarGrid()    
    }
})
function reset () {
    contenedor.innerHTML = '';
    construirGrid (6)
    pintarGrid()
}
const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', () => 
    reset()
)
//pintar

function pintarGrid() {
    const gridSquares = document.querySelectorAll('.gridItem');

    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = 'red';
        });
    });
}
pintarGrid()



