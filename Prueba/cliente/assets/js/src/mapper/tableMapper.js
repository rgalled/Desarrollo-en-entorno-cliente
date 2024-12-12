import { drop } from "./events/drop.js";

export const tableMapper = (table,types) => {
    types.forEach(element => {
        let div = document.createElement('div');
        div.setAttribute('id', element);
        div.setAttribute('class', 'container');
        drop(div, element);
        div.appendChild(document.createTextNode(element));
        document.getElementById(table).appendChild(div);
    });
}