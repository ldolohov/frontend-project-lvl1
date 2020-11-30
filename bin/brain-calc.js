#!/usr/bin/env node
import gameFlow from '../src/index.js';
import { gameDescription, calcGame } from '../src/games/calc-game.js';

gameFlow(gameDescription, calcGame);
