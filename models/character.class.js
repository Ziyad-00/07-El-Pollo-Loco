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
        this.speed = 10;
    }

    animate() {

        setInterval(() => { ///// make it walk
            if (Keyboard.RIGHT) {
                this.x += this.speed;
            }

            if (Keyboard.LEFT) {
                this.x -= this.speed;
            }
        }, 1000 / 30)

        setInterval(() => {  //// walk imagechanging mechanusmus
            if (Keyboard.RIGHT || Keyboard.LEFT) { // nur wenn tatse gedruckt ist
                let i = this.currentImage % ImageHub.CHARACTER.walk.length;
                // 0/6=0 rest 0  ------ 1/6 = 0 rest 1 ----- 2/6 =0 rest 2 .......  unendless loop , man kann besser.
                //so 0 1 2 3 4 5 0 1 2 3 4 5 ...... usw
                let path = ImageHub.CHARACTER.walk[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }

        }, 1000 / 30);
    }

    jump() {

    }
}

