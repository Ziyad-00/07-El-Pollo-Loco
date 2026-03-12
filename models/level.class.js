
export class Level {

    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 1950;


    constructor(enemies_, clouds_, backgroundObjects_) {
        this.enemies = enemies_;
        this.clouds = clouds_;
        this.backgroundObjects = backgroundObjects_;
    }

} 