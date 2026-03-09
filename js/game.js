
import { ImageHub } from "../models/ImageHub.class.js";
import { World } from "../models/world.class.js";

let canvasRef;
let world;

function init() {
    canvasRef = document.getElementById('canvas');
    world = new World(canvasRef);

    console.log("my char", world.character);
    console.log(world.enemies);



}

init();