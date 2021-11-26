import "phaser";
import { gameScene } from "./scenes/game";
const config: GameConfig = {
    title: "Pong",
    width: 800,
    height: 600,
    parent: "game",
    scene: [gameScene],
    backgroundColor: '#000000',
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