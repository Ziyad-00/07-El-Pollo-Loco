import { ImageHub } from "./ImageHub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { MovableObject } from "./movable-object.calss.js";


export class Character extends MovableObject {

    world;


    constructor() {
        super().loadImage(ImageHub.CHARACTER.walk[0]);
        this.loadImages(ImageHub.CHARACTER.walk);
        // console.log(this.imageCache);

        this.animate();
    }

    animate() {
        setInterval(() => {
            if (Keyboard.RIGHT) {

                // 0/6=0 rest 0  ------ 1/6 = 0 rest 1 ----- 2/6 =0 rest 2 .......  unendless loop , man kann besser.
                let i = this.currentImage % ImageHub.CHARACTER.walk.length;

                let path = ImageHub.CHARACTER.walk[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }

        }, 100);
    }

    jump() {

    }
}

