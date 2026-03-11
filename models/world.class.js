import { Background } from "./background.class.js";
import { Character } from "./character.class.js";
import { Chicken } from "./chicken.class.js";
import { Cloud } from "./cloud.class.js";
import { ImageHub } from "./ImageHub.class.js";
import { Keyboard } from "./keyboard.class.js";

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
        new Background(ImageHub.BACKGROUND.layers.first[0]),
        new Background(ImageHub.BACKGROUND.layers.air),
        new Background(ImageHub.BACKGROUND.layers.third[1]),
        new Background(ImageHub.BACKGROUND.layers.second[1]),
        new Background(ImageHub.BACKGROUND.layers.first[1])
    ];
    // new Background();

    canvasRef;
    ctx;
    keyboard;
    camera_x;

    constructor(canvasRef_, keyboard_) {
        this.ctx = canvasRef_.getContext("2d");
        this.canvasRef = canvasRef_
        this.keyboard = keyboard_;
        this.draw();
        this.setWorld();
    }


    setWorld() {
        this.character.world = this; // was ist this.world ?? ====> schon auf nur this geandert und er meinte " diese aktule instanze der world" damit  ?
    }

    draw() {
        // reset whole canvas 
        this.ctx.clearRect(0, 0, this.canvasRef.width, this.canvasRef.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);

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
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);    ////translate() das Verschieben verursacht.
            this.ctx.scale(-1, 1);              //// scale() die Spiegelung verursacht
            mo.x = mo.x * -1;
        }
        // console.log('Drawing object:', mo.img.src); wtf!!!
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}