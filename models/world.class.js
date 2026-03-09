import { Background } from "./background.class.js";
import { Character } from "./character.class.js";
import { Chicken } from "./chicken.class.js";
import { Cloud } from "./cloud.class.js";

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

    backgroundObjects = [
        new Background()
    ];

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

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}