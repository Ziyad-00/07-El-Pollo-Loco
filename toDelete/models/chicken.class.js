import { ImageHub } from "./imagehub.class.js";
import { MovableObject } from "./movable-object.calss.js";


export class Chicken extends MovableObject {

    constructor() {
        super().loadImage(ImageHub.CHICKEN.normal.walk[0]);
        this.x = 200 + Math.random() * 500;
        this.y = 355;
        this.height = 80;
        this.width = 80;
        this.speed = 1.5 + Math.random();


        this.loadImages(ImageHub.CHICKEN.normal.walk);
        // console.log(this.imageCache);

        this.animate();
    }



    animate() {
        setInterval(() => {
            // let i = this.currentImage % ImageHub.CHICKEN.normal.walk.length;

            // let path = ImageHub.CHICKEN.normal.walk[i];
            // this.img = this.imageCache[path];
            // this.currentImage++;
            this.playAnimation(ImageHub.CHICKEN.normal.walk);
        }, 100);
        this.moveLeft()
    }
}
