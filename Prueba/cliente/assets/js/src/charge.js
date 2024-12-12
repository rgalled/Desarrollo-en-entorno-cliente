export const charge = () => {
    let changes = JSON.parse(localStorage.getItem('position'));
    changes.array.forEach(element => {
        document.getElementById(element.tabla).appendChild(element.carta);
    });
}