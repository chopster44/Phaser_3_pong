let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [gameScene],
    backgroundColour: '#000000',
    pixelArt: true,
    physics: {
        default : 'arcade',
        arcade: {
            debug: false
        }
    }
};

var game = new Phaser.Game(config);