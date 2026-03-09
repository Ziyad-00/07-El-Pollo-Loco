import { MovableObject } from "./movable-object.calss.js";
import { ImageHub } from "./ImageHub.class.js";


export class Background extends MovableObject {

    x = 0
    y = 0;
    height = 480;
    width = 720;
    background_1 = [
        ImageHub.BACKGROUND.layers.third[0],
        ImageHub.BACKGROUND.layers.second[0],
        ImageHub.BACKGROUND.layers.first[0]
    ]
    constructor() {
        super().loadImage(
            ImageHub.BACKGROUND.layers.first[0]
        );
    }

    backgroundLoop() {
        for (i = 0; i < background_1.length; i++) {
            return background_1.i;
        }
    }
}
