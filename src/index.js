import './style.css';
import './app.js';
import './domain.js';
import './game.js';
import { Game, GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from "./game.js";

const game = new Game();
game.start();
console.log(loadGame, saveGame);
console.log('app worked')