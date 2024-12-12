export const drop = (table,type) => {
    table.addEventListener("drop", (event) => {
        event.preventDefault();  // Evitar el comportamiento por defecto
        var data = JSON.parse(event.dataTransfer.getData("text"));
        var draggedElement = document.getElementById(data.id);
        var rect = event.target.getBoundingClientRect();
        var offsetX = event.clientX - rect.left;
        var offsetY = event.clientY - rect.top;

        if (draggedElement.classList.contains(event.target.id)) {
            event.target.appendChild(draggedElement);
            guardar(draggedElement.id,event.target.id);
        }
    });
    table.addEventListener("dragover", (event) => {
        event.preventDefault();  
    })
}

function guardar(carta,tabla){
    let changes = []
    if(localStorage.length != 0){
        changes = JSON.parse(localStorage.getItem('position'));
    }
    changes.push(
        {
            carta:carta,
            tabla:tabla
        }
    )
    localStorage.setItem('position',JSON.stringify(changes));
    console.log(localStorage)
}