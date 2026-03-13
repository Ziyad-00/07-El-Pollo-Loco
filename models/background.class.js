import { MovableObject } from "./movable-object.calss.js";


export class Background extends MovableObject {

    x = 0
    y = 0;
    height = 480;
    width = 720;
    // background_1 = [
    //     ImageHub.BACKGROUND.layers.air,
    //     ImageHub.BACKGROUND.layers.third[0],
    //     ImageHub.BACKGROUND.layers.second[0],
    //     ImageHub.BACKGROUND.layers.first[0]
    // ]
    // background_2 = [
    //     ImageHub.BACKGROUND.layers.air,
    //     ImageHub.BACKGROUND.layers.third[1],
    //     ImageHub.BACKGROUND.layers.second[1],
    //     ImageHub.BACKGROUND.layers.first[1]
    // ]
    static backgroundLL = 0

    constructor(path, x_ = 0) {
        super();
        this.loadImage(path);
        this.x = x_;
        // this.loadImages(background_1);
    }

    // constructor() {
    //     super().loadImage(
    //         // ImageHub.BACKGROUND.layers.first[0]
    //         // this.backgroundLoop()
    //     );
    // }

    //     backgroundLoop() {
    //         for (backgroundLL; backgroundLL < background_1.length; backgroundLL++) {
    //             this.background_1[i];
    //         }
    //     }
}
