import { ImageHub } from "./imagehub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { MovableObject } from "./movable-object.calss.js";

export class Character extends MovableObject {

    world;

    constructor() {
        super().loadImage(ImageHub.CHARACTER.walk[0]);
        this.loadImages(ImageHub.CHARACTER.walk);
        this.loadImages(ImageHub.CHARACTER.jump);
        // console.log(this.imageCache);
        this.applygravity();
        this.animate();
        this.speed = 15;
        // this.y = 20;
    }

    animate() {

        setInterval(() => { ///// make it walk
            if (Keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            console.log(this.y); // locate Pepe ,to delete later 

            if (Keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
            }

            if (Keyboard.UP) {
                this.speedY = 20;
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 30)

        setInterval(() => {  //// walk imagechanging mechanusmus
            if (this.y < 125 || this.speedY > 0) {
                this.playAnimation(ImageHub.CHARACTER.jump)
            } else {        // doesnt work !!!!!!!! es liest letze 2 images nicht 
                if (Keyboard.RIGHT || Keyboard.LEFT) { // nur wenn tatse gedruckt ist  

                    this.playAnimation(ImageHub.CHARACTER.walk);
                }
            }
        }, 1000 / 30);
    }

    jump() {
        this.speedY = 30;
    }
}
