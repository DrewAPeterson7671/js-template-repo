import './css/styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { stateControl, changeState } from './plant.js';


const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);
const sun = changeState("light")(1);
const directSun = changeState("light")(5);


$(document).ready(function() {
  $('#feed').click(function() {
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });
  $('#show-state').click(function() {
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
  });
});