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
                Keyboard.SPACE = true;
                console.log("rightdown");////  zum test kann spater entfernen
            }
        })

        window.addEventListener("keyup", (e) => {
            console.log(e);
            if (e.key == 'ArrowRight') {
                Keyboard.SPACE = false;
                console.log("rightup");////  zum test kann spater entfernen
            }
        });


        ///////////////////////////////////to move left
        window.addEventListener("keydown", (e) => {
            if (e.key == 'ArrowLeft') {
                Keyboard.SPACE = true;
                console.log("leftdown");////  zum test kann spater entfernen
            }
        })

        window.addEventListener("keyup", (e) => {
            if (e.key == 'ArrowLeft') {
                Keyboard.SPACE = false;
                console.log("leftdown");////  zum test kann spater entfernen
            }
        });

        ///////////////////////////////////to jump
        window.addEventListener("keydown", (e) => {
            if (e.key == ' ') {
                Keyboard.SPACE = true;
                console.log("throw btn");////  zum test kann spater entfernen
            }
        })

        window.addEventListener("keyup", (e) => {
            if (e.key == ' ') {
                Keyboard.SPACE = false;
                console.log("stop throw btn");////  zum test kann spater entfernen
            }
        });


        /////////////////////////////////// to throw
        window.addEventListener("keydown", (e) => {
            if (e.key == 'ArrowUp') {
                Keyboard.SPACE = true;
                console.log("jump");////  zum test kann spater entfernen
            }
        })

        window.addEventListener("keyup", (e) => {
            if (e.key == 'ArrowUp') {
                Keyboard.SPACE = false;
                console.log("lend");////  zum test kann spater entfernen
            }
        });
    }
}