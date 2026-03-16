export class ImageHub {
    static CHARACTER = {
        idle: {
        }
        ,
        walk: [
            "img/2_character_pepe/2_walk/W-21.png",
            "img/2_character_pepe/2_walk/W-22.png",
            "img/2_character_pepe/2_walk/W-23.png",
            "img/2_character_pepe/2_walk/W-24.png",
            "img/2_character_pepe/2_walk/W-25.png",
            "img/2_character_pepe/2_walk/W-26.png"
        ]
        ,
        jump: [
            "img/2_character_pepe/3_jump/J-31.png",
            "img/2_character_pepe/3_jump/J-32.png",
            "img/2_character_pepe/3_jump/J-33.png",
            "img/2_character_pepe/3_jump/J-34.png",
            "img/2_character_pepe/3_jump/J-35.png",
            "img/2_character_pepe/3_jump/J-36.png",
            "img/2_character_pepe/3_jump/J-37.png",
            "img/2_character_pepe/3_jump/J-38.png",
            "img/2_character_pepe/3_jump/J-39.png"
        ]
    }

    static CHICKEN = {
        normal: {
            walk: [
                "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
                "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
                "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
            ]
            ,
            dead: "img/3_enemies_chicken/chicken_normal/2_dead/dead.png"
        }
        ,
        small: {

        }
    }

    static ENDBOSS = {
        walk: [
            "img/4_enemie_boss_chicken/1_walk/G1.png",
            "img/4_enemie_boss_chicken/1_walk/G2.png",
            "img/4_enemie_boss_chicken/1_walk/G3.png",
            "img/4_enemie_boss_chicken/1_walk/G4.png"
        ],
        alerted: [
            "img/4_enemie_boss_chicken/2_alert/G5.png",
            "img/4_enemie_boss_chicken/2_alert/G6.png",
            "img/4_enemie_boss_chicken/2_alert/G7.png",
            "img/4_enemie_boss_chicken/2_alert/G8.png",
            "img/4_enemie_boss_chicken/2_alert/G9.png",
            "img/4_enemie_boss_chicken/2_alert/G10.png",
            "img/4_enemie_boss_chicken/2_alert/G11.png",
            "img/4_enemie_boss_chicken/2_alert/G12.png"
        ],
        attack: [],
        hurt: [],
        deadend: []
    }


    static BACKGROUND = {
        layers: {
            first: [
                "img/5_background/layers/1_first_layer/1.png",
                "img/5_background/layers/1_first_layer/2.png",
                "img/5_background/layers/1_first_layer/full.png"
            ]
            ,
            second: [
                "img/5_background/layers/2_second_layer/1.png",
                "img/5_background/layers/2_second_layer/2.png",
                "img/5_background/layers/2_second_layer/full.png"
            ]
            ,
            third: [
                "img/5_background/layers/3_third_layer/1.png",
                "img/5_background/layers/3_third_layer/2.png",
                "img/5_background/layers/3_third_layer/full.png"
            ]
            ,
            clouds: [
                "img/5_background/layers/4_clouds/1.png",
                "img/5_background/layers/4_clouds/2.png",
                "img/5_background/layers/4_clouds/full.png"
            ]
            ,
            air: "img/5_background/layers/air.png"
        }
    }
}