#!/usr/bin/env node

import gameFlow from '../src/index.js';
import { gameDescription, progressionGame } from '../src/games/progression-game.js';

gameFlow(gameDescription, progressionGame);
