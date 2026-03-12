import { ImageHub } from "./ImageHub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { Level } from "./level.class.js";
import { MovableObject } from "./movable-object.calss.js";



export class Character extends MovableObject {

    world;

    constructor() {
        super().loadImage(ImageHub.CHARACTER.walk[0]);
        this.loadImages(ImageHub.CHARACTER.walk);
        // console.log(this.imageCache);

        this.animate();
        this.speed = 15;
    }

    animate() {

        setInterval(() => { ///// make it walk
            if (Keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            console.log(this.x); // locate Pepe ,to delete later 

            if (Keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 30)

        setInterval(() => {  //// walk imagechanging mechanusmus
            if (Keyboard.RIGHT || Keyboard.LEFT) { // nur wenn tatse gedruckt ist

                this.playAnimation(ImageHub.CHARACTER.walk);
            }

        }, 1000 / 30);
    }

    jump() {

    }
}

