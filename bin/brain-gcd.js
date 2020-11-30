#!/usr/bin/env node

import gameFlow from '../src/index.js';
import { gameDescription, gameGcd } from '../src/games/gcd-game.js';

gameFlow(gameDescription, gameGcd);
