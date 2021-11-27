import "phaser";
var space;
export class p2wScene extends Phaser.Scene {
    constructor() {
        super({
            key: "P2W"
        });
    }
    preload(): void {
        this.load.image('ball', '../assets/Ball.png');
        this.load.image('player', '../assets/Bar.png');
    }
    create(): void {
        var player1 = this.physics.add.sprite(50, 200, 'player').setImmovable();
        var player2 = this.physics.add.sprite(750, 200, 'player').setImmovable();
        player1.setVelocity(0, 0);
        player2.setVelocity(0, 0);
        
        var ball = this.physics.add.sprite(500, 200, 'ball').setScale(2).refreshBody();

        var center = this.physics.add.staticGroup();
        center.create(400, 236, 'spli');
        center.create(400, 300, 'spli');
        center.create(400, 364, 'spli');
        center.create(400, 428, 'spli');

        space = this.input.keyboard.addKey('SPACE');

        var player1scoret = this.add.text(100, 300, 'Press Space to play again!', { fontSize: '20px', color: '#FFFFFF' });
        var player2scoret = this.add.text(450, 300, 'Player 2 wins!', { fontSize: '20px', color: '#FFFFFF' });
    }
    update(time): void {
        if (space.isDown) {
            this.scene.start('Game');
        };
    }
}