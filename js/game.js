
// import { ImageHub } from "../models/ImageHub.class.js";
import { Keyboard } from "../models/keyboard.class.js";
import { World } from "../models/world.class.js";


let canvasRef;
let world;
let keyboard = new Keyboard();

function init() {
    canvasRef = document.getElementById('canvas');
    world = new World(canvasRef, keyboard);

    console.log("my char", world.character);
    console.log(world.enemies);



}
Keyboard.addEvents();

let p = [5465, 456, 45, 64, 564, 654, 54, 64, 64, 54, 654, 654, 5]; /////// test zum loschen 
console.log("test  " + p);////// test zum loschen 

init();