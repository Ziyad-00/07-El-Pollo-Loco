import { ImageHub } from "./ImageHub.class.js";
import { MovableObject } from "./movable-object.calss.js";


export class Chicken extends MovableObject {


    constructor() {
        super().loadImage(ImageHub.CHICKEN.normal.walk[0]);
        this.x = 140 + Math.random() * 500;
        this.y = 355;
        this.height = 80;
        this.width = 80;
    }

}