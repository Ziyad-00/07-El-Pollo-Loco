import { MovableObject } from "./movable-object.calss.js";
import { ImageHub } from "./ImageHub.class.js";




export class Cloud extends MovableObject {

    y = 40;
    height = 280;
    width = 520;

    constructor() {
        super().loadImage(ImageHub.BACKGROUND.layers.clouds[0]);
        this.x = Math.random() * 700;
        this.animate();
        this.speed = 1;
    }

    animate() {
        this.moveLeft();
    }
}