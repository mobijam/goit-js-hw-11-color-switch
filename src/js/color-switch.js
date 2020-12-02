import { colors } from './colors-keeper';
import {randomIntegerFromInterval} from './randomizer';

import {refs} from './refs-data-module';

refs.startBtn.addEventListener('click', timerStart);
refs.stopBtn.addEventListener('click', timerStop);


const COLOR_SWITCH_DELAY = 1000;
let changesHasStarted = false;
let intervalId = null;

function timerStart() {
  if (!changesHasStarted) {
      
    changesHasStarted = true;
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length -1)]
    }, COLOR_SWITCH_DELAY);
  }

  return
}

function timerStop() {
  clearInterval(intervalId);
  changesHasStarted;
}