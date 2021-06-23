let p1wScene = new Phaser.Scene('P1W');

var player1;
var player1c;
var player1scoret;
var player2;
var player2c;
var player2scoret;
var ball;
var center;



p1wScene.preload = function()
{
    this.load.image('ball', './assets/Ball.png');
    this.load.image('player', './assets/Bar.png');
    this.load.image('spli', './assets/Bar.png');
}

p1wScene.create =function()
{
    player1 = this.physics.add.sprite(50, 200, 'player').setImmovable();
    player2 = this.physics.add.sprite(750, 200, 'player').setImmovable();

    ball = this.physics.add.sprite(500, 200, 'ball').setScale(2).refreshBody();
    
    
    center = this.physics.add.staticGroup();
    center.create(400, 300, 'spli');
    center.create(400, 364, 'spli');
    center.create(400, 428, 'spli');
    center.create(400, 236, 'spli');

    player1.setCollideWorldBounds();
    player2.setCollideWorldBounds();

    cursors = this.input.keyboard.createCursorKeys();
    space = this.input.keyboard.addKey('SPACE');

    player1scoret = this.add.text(100, 300, 'Player 1 wins!', { fontSize: '20px', fill: '#FFFFFF' });
    player2scoret = this.add.text(450, 300, 'Press Space to play again!', { fontSize: '20px', fill: '#FFFFFF' });

}

p1wScene.update =function()
{
    player1.setVelocity(0, 0);
    player2.setVelocity(0, 0);

    //left hend player controls
    if (space.isDown){
        this.scene.start('Game');
        player1score = 0;
        player2score = 0;
    }
    

}