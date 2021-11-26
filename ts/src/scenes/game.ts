import "phaser"; 
export class gameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "Game"
        });
    }
    
    init(params): void {
        var player1;
    }
    preload(): void {
        //get all assets
        this.load.image('ball', '../assets/Ball.png');
        this.load.image('player', '../assets/Bar.png');
        this.load.image('edgea', '../assets/Background1.png');
        this.load.image('edgeb', '../assets/Background4.png');
        this.load.image('spli', '../assets/Bar.png');
    }
    create(): void {
        //create player sprite
        player1 = this.physics.add.sprite(50, 200, 'player').setPushable(false);
        var player2 = this.physics.add.sprite(750, 200, 'player').setPushable(false);

        //create ball sprite
        var ball = this.physics.add.sprite(400, 225, 'ball').setScale(2).refreshBody();

        //create borders
        let edge1 = this.physics.add.sprite(400, 0, 'edgea').setImmovable(true).refreshBody();
        const edge2 = this.physics.add.sprite(400, 600, 'edgea').setImmovable(true).refreshBody();
        const edge3 = this.physics.add.sprite(0, 300, 'edgeb').setImmovable(true).refreshBody();
        const edge4 = this.physics.add.sprite(800, 300, 'edgeb').setImmovable(true).refreshBody();

        //create central split
        var center = this.physics.add.staticGroup();
        center.create(400, 236, 'spli');
        center.create(400, 300, 'spli');
        center.create(400, 364, 'spli');
        center.create(400, 428, 'spli');
        
        //stop players from going through the floor
        player1.setCollideWorldBounds(true);
        player2.setCollideWorldBounds(true);

        //start with the ball moving
        ball.setVelocityX(-300);

        //create key inputs
        var cursors = this.input.keyboard.createCursorKeys();
        var keyW = this.input.keyboard.addKey('W');
        var keyS = this.input.keyboard.addKey('S');

        //add text
        var player1scoret = this.add.text(332, 100, '0', { fontSize: '32px', color: '#FFFFFF'});
        var player2scoret = this.add.text(432, 100, '0', { fontSize: '32px', color: '#FFFFFF'});
        var player1c = this.add.text(50, 500, 'Use W and S to move!', { fontSize: '16px', color: '#FFFFFF'});
        var player2c = this.add.text(500, 500, 'Use Up and Down keys to move!', { fontSize: '16px', color: '#FFFFFF'});
    }
    update(time): void {
    }
}