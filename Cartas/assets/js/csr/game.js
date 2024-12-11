import { cardMapper } from "./mapper/cardMapper.js";
import { tableMapper } from "./mapper/tableMapper.js"
export const game = {
    init: (table,types) => {
        tableMapper(table,types);
    },
    cardsInit:(table,types,number) => {
        cardMapper(table,types,number);
    }
}