import { drag } from "./events/drag.js";

export const cardMapper = (table,types,number) => {
    types.forEach(element => {
        for (let i = 0; i < number; i++) {
            let card = document.createElement('div')
            card.setAttribute('class', 'card '+element)
            card.setAttribute('id', element+(i+1));
            drag(card);
            card.appendChild(document.createTextNode(element+' '+(i+1)))
            document.getElementById(table).appendChild(card);
        }
    });
}