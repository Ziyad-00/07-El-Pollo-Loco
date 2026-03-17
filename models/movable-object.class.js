
export class MovableObject {

    x = 80;
    y = 30;
    img;
    height = 300;
    width = 120;

    speed = 0.15;
    currentImage = 0;
    otherDirection = false;



    speedY = 0;
    acceleration = 10;
    applygravity() {                // michanismus der fall /// to adjust , not working well!!!!!!!
        setInterval(() => {
            if (this.y < 140 || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
            if (this.y >= 140) {             ////////// von nico // funktioniert
                this.y = 140;
            }
        }, 1000 / 25);
    }
    isAboveGround() {  ///////// sole in if () in applygravity but didnt work !!!!
        return this.y < 125;
    }

    // imageCache = []; zum nachfragen er hat so angefangen, daan spater al object erstellt!  code1
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

    playAnimation(images) {
        let i = this.currentImage % images.length;
        // 0/6=0 rest 0  ------ 1/6 = 0 rest 1 ----- 2/6 =0 rest 2 .......  unendless loop , man kann besser.
        //so 0 1 2 3 4 5 0 1 2 3 4 5 ...... usw
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() {
        console.log("moving Right");
    }


    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
    }
} 