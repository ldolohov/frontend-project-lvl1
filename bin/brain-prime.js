#!/usr/bin/env node

import gameFlow from '../src/index.js';
import { gameDescription, isPrime } from '../src/games/prime-game.js';

gameFlow(gameDescription, isPrime);
