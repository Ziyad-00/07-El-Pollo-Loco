import { ImageHub } from "./ImageHub.class.js";
import { MovableObject } from "./movable-object.calss.js";


export class Character extends MovableObject {


    constructor() {
        super().loadImage(ImageHub.CHARACTER.walk[0]);
    }



    jump() {

    }
}

