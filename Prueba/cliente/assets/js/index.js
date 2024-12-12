import { game } from "./src/game.js";
import { config } from "./confg.js";
import { httpManager } from "./http/httpManager.js";
import { charge } from "./src/charge.js";

httpManager.getInstance('http://localhost:3000').conection((data) => {
    game.init("bigContainer", data.deckTypes);
    game.cardsInit("cardsContainer", data.deckTypes, data.cardAmmount);
    charge();
    localStorage.clear();
    
})
