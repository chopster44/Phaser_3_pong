import "phaser";
var space, f;
export class startScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'Start'
        });
    }
    preload(): void {
        this.load.image('PONG', '../assets/Bar-copy.png');
    }
    create(): void {
        var start = this.physics.add.sprite(400, 300,'PONG').setScale(10);
        var startt = this.add.text(300, 400, 'Press Space to start!', { fontSize: '16px', color: '#FFFFFF' });
        var starttt = this.add.text(260, 430, 'Press F to play a faster game!', { fontSize: '16px', color: '#FFFFFF' });
        space = this.input.keyboard.addKey('SPACE');
        f = this.input.keyboard.addKey('F');
    }
    update(time): void {
        if (space.isDown) {
            this.scene.start('Game');
        }
        else if (f.isDown) {
            this.scene.start('FGame')
        }
    }
}