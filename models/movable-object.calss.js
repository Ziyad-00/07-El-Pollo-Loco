export class MovableObject {

    x = 40;
    y = 140;
    img;
    height = 300;
    width = 120;

    // imageCache = []; yum nachfragen er hat so angefangen, daan spater al object erstellt!  code1
    imageCache = {};


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    // walking bilder vorbereietet //ab hier aktualiesiert sich die seite ganze Zeit

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            // this.imageCache.push(img);  rest der code1
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log("moving Right");
    }


    moveLeft() {

    }
} 