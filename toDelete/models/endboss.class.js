import { ImageHub } from "./imagehub.class.js";
import { MovableObject } from "./movable-object.calss.js";


export class Endboss extends MovableObject {


    constructor() {
        super().loadImage(ImageHub.ENDBOSS.walk[0]);
        this.loadImages(ImageHub.ENDBOSS.alerted);
        this.x = 2250;
        this.y = 240;
        this.width = 250;
        this.height = 200;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(ImageHub.ENDBOSS.alerted);
        }, 100);
    }

}
