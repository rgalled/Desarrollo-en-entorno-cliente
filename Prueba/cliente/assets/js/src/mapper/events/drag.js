export const drag = (card) => {
    card.setAttribute("draggable", "true");
    card.addEventListener("dragstart", (event) => {
        const sendData = {
            id: event.target.id,
            mensaje: "Esto es una prueba"
        }
        event.dataTransfer.setData("text", JSON.stringify(sendData));
        console.log(event);
    });
}