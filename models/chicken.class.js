import { ImageHub } from "./ImageHub.class.js";
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
            // 0/6=0 rest 0  ------ 1/6 = 0 rest 1 ----- 2/6 =0 rest 2 .......  unendless loop , man kann besser.
            let i = this.currentImage % ImageHub.CHICKEN.normal.walk.length;

            let path = ImageHub.CHICKEN.normal.walk[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
        this.moveLeft()
    }
}