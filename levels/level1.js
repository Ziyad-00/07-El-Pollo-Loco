import { Level } from "../models/level.class.js";
import { Chicken } from "../models/chicken.class.js";
import { Cloud } from "../models/cloud.class.js";
import { Background } from "../models/background.class.js";
import { Endboss } from "../models/endBoss.class.js";
import { ImageHub } from "../models/imageHub.class.js";


export const level1 = new Level(


    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new Cloud()
    ],
    [
        new Background((ImageHub.BACKGROUND.layers.air), -720),
        new Background(ImageHub.BACKGROUND.layers.third[1], -720),
        new Background(ImageHub.BACKGROUND.layers.second[1], -720),
        new Background(ImageHub.BACKGROUND.layers.first[1], -720),
        new Background(ImageHub.BACKGROUND.layers.air),
        new Background(ImageHub.BACKGROUND.layers.third[0]),
        new Background(ImageHub.BACKGROUND.layers.second[0]),
        new Background(ImageHub.BACKGROUND.layers.first[0]),
        new Background((ImageHub.BACKGROUND.layers.air), 719),
        new Background(ImageHub.BACKGROUND.layers.third[1], 719),
        new Background(ImageHub.BACKGROUND.layers.second[1], 719),
        new Background(ImageHub.BACKGROUND.layers.first[1], 719),
        new Background((ImageHub.BACKGROUND.layers.air), 1439),
        new Background(ImageHub.BACKGROUND.layers.third[0], 1439),
        new Background(ImageHub.BACKGROUND.layers.second[0], 1439),
        new Background(ImageHub.BACKGROUND.layers.first[0], 1439),
        new Background((ImageHub.BACKGROUND.layers.air), 2159),
        new Background(ImageHub.BACKGROUND.layers.third[1], 2159),
        new Background(ImageHub.BACKGROUND.layers.second[1], 2159),
        new Background(ImageHub.BACKGROUND.layers.first[1], 2159)
    ]
);

