import "phaser";
import { gameScene } from "./scenes/game";
import { gameFScene } from "./scenes/Fgame";
import { p1wScene } from "./scenes/p1w";
import { p2wScene } from "./scenes/p2w";
import { loadingScene } from "./scenes/loading";
import { startScene } from "./scenes/start";
const config: GameConfig = {
    title: "Pong",
    width: 800,
    height: 600,
    parent: "game",
    scene: [loadingScene, startScene, gameScene, gameFScene, p1wScene,p2wScene],
    backgroundColor: '#000000',
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
};
export class PongGame extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
};
window.onload = () => {
    var game = new PongGame(config);
}