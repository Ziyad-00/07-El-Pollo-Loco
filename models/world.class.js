import { Background } from "./background.class.js";
import { Character } from "./character.class.js";
import { Chicken } from "./chicken.class.js";
import { Cloud } from "./cloud.class.js";
import { ImageHub } from "./ImageHub.class.js";

export class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [
        new Cloud()
    ];

    // add background images bcz didnt work in BG class
    backgroundObjects = [
        new Background(ImageHub.BACKGROUND.layers.air),
        new Background(ImageHub.BACKGROUND.layers.third[0]),
        new Background(ImageHub.BACKGROUND.layers.second[0]),
        new Background(ImageHub.BACKGROUND.layers.first[0])
    ];
    // new Background();


    canvasRef;
    ctx;

    constructor(canvasRef_) {
        this.ctx = canvasRef_.getContext("2d");
        this.canvasRef = canvasRef_
        this.draw();

    }

    draw() {
        // reset whole canvas 
        this.ctx.clearRect(0, 0, this.canvasRef.width, this.canvasRef.height)

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    // for repeated element 
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }


    addToMap(mo) {
        // console.log('Drawing object:', mo.img.src); wtf!!!
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}