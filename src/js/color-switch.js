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
    refs.startBtn.setAttribute('disabled', 'true');
    changesHasStarted = true;
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length -1)]
    }, COLOR_SWITCH_DELAY);
  }
}

function timerStop() {
  clearInterval(intervalId);
  refs.startBtn.removeAttribute('disabled');
}