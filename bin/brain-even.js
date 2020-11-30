#!/usr/bin/env node
// import isEvenGame from '../src/games/even-game.js';

import gameFlow from '../src/index.js';
import { gameDescription, isEvenGame } from '../src/games/even-game.js';

gameFlow(gameDescription, isEvenGame);
