import "phaser"; 
export class gameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "Game"
        });
    };
    preload(): void {
        this.load.image('ball', '../assets/Ball.png')
        this.load.image('player', '../assets/Bar.png');
        this.load.image('edgea', '../assets/Background1.png');
        this.load.image('edgeb', '../assets/Background4.png');
        this.load.image('spli', '../assets/Bar.png');
    }
    create(): void {

    }
    update(time): void {
        
    }
}