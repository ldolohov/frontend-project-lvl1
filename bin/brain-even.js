#!/usr/bin/env node

import gameFlow from '../src/index.js';
import { gameDescription, isEvenGame } from '../src/games/even-game.js';

gameFlow(gameDescription, isEvenGame);
