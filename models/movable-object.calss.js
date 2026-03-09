export class MovableObject {

    x = 40;
    y = 160;
    img;
    height = 280;
    width = 120;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log("moving Right");

    }


    moveLeft() {

    }
}