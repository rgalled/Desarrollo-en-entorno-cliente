import { game } from "./csr/game.js";
import { config } from "./confg.js";

game.init("bigContainer",config.deckTypes);
game.cardsInit("cardsContainer",config.deckTypes,config.cardAmmount);