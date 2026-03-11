export class Keyboard {
    static RIGHT = false;      //move right
    static LEFT = false;       //move left
    static UP = false;         //to jump
    static SPACE = false;      //to throw

    static addEvents() {

        ///////////////////////////////////to move right
        window.addEventListener("keydown", (e) => {
            console.log(e);    ////  zum test kann spater entfernen
            if (e.key == 'ArrowRight') {
                Keyboard.RIGHT = true;
                console.log("rightdown");////  zum test kann spater entfernen
            }
            if (e.key == 'ArrowLeft') {
                Keyboard.LEFT = true;
                console.log("leftdown");////  zum test kann spater entfernen
            }
            if (e.key == ' ') {
                Keyboard.UP = true;
                console.log("throw btn");////  zum test kann spater entfernen
            }
            if (e.key == 'ArrowUp') {
                Keyboard.SPACE = true;
                console.log("jump");////  zum test kann spater entfernen
            }
        })

        window.addEventListener("keyup", (e) => {
            if (e.key == 'ArrowRight') {
                Keyboard.RIGHT = false;
                console.log("rightup");////  zum test kann spater entfernen
            }
            if (e.key == 'ArrowLeft') {
                Keyboard.LEFT = false;
                console.log("leftdown");////  zum test kann spater entfernen
            }
            if (e.key == ' ') {
                Keyboard.UP = false;
                console.log("stop throw btn");////  zum test kann spater entfernen
            }
            if (e.key == 'ArrowUp') {
                Keyboard.SPACE = false;
                console.log("land");////  zum test kann spater entfernen
            }
        });
    }
}
