import { level1 } from "../levels/level1.js";
import { Character } from "./character.class.js";

// Nico sagte: muss am besten manuel generieren:
// ich habe spater bemerkt warum, es kann anderer Link geben je nach file ordner wie von hier kopieren zum level1 
// wird nicht fuktionieren, weil: "../models", weil es ist in anderer Ordner

export class World {

    character = new Character();
    level = level1;             /// level wird = level1  welche vererbt von Level /////wtf
    // add background images bcz didnt work in BG class

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

        this.addObjectsToMap(this.level.backgroundObjects);
        // this.addObjectsToMap(this.backgroundObjects1);
        this.addObjectsToMap(this.level.clouds);  ///  level wird = level1  welche vererbt von Level // ist hier in world class defeniert 
        this.addObjectsToMap(this.level.enemies);
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