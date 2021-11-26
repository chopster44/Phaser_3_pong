let gameFScene = new Phaser.Scene('FGame');

var player1;
var player1c;
var player1score = 0;
var player1scoret;
var player2;
var player2c;
var player2score = 0;
var player2scoret;
var ball;
var levelDone = false;
var edges;
var edge1;
var edge2;
var edge3;
var edge4;
var center;



gameFScene.preload = function()
{
    this.load.image('ball', './assets/Ball.png');
    this.load.image('player', './assets/Bar.png');
    this.load.image('edgea', './assets/Background1.png');
    this.load.image('edgeb', './assets/Background4.png');
    this.load.image('spli', './assets/Bar.png');
}

gameFScene.create = function()
{
    player1 = this.physics.add.sprite(50, 200, 'player').setPushable(false);
    player2 = this.physics.add.sprite(750, 200, 'player').setPushable(false);

    ball = this.physics.add.sprite(400, 300, 'ball').setScale(2).refreshBody();
    
    edge1 = this.physics.add.sprite(400, 0, 'edgea').setImmovable().refreshBody();        
    edge2 = this.physics.add.sprite(400, 600, 'edgea').setImmovable().refreshBody();   
    edge3 = this.physics.add.sprite(0, 300, 'edgeb').setImmovable().refreshBody();
    edge4 = this.physics.add.sprite(800, 300, 'edgeb').setImmovable().refreshBody();
    edges = edge1, edge2;
    
    center = this.physics.add.staticGroup();
    center.create(400, 300, 'spli');
    center.create(400, 364, 'spli');
    center.create(400, 428, 'spli');
    center.create(400, 236, 'spli');

    player1.setCollideWorldBounds();
    player2.setCollideWorldBounds();
    //this.physics.add.collider(player1, ball);
    //this.physics.add.collider(player2, ball);
    ball.setVelocityX(-400);

    cursors = this.input.keyboard.createCursorKeys();
    keyW = this.input.keyboard.addKey('W');
    keyS = this.input.keyboard.addKey('S'); 

    player1scoret = this.add.text(332, 100, '0', { fontSize: '32px', fill: '#FFFFFF' });
    player2scoret = this.add.text(432, 100, '0', { fontSize: '32px', fill: '#FFFFFF' });
    player1c = this.add.text(50, 500, '0', { fontSize: '16px', fill: '#ffffff'});
    player2c = this.add.text(500, 500, '0', { fontSize: '16px', fill: '#ffffff'});

    player1c.setText("Use W and S to move!");
    player2c.setText("Use Up and down keys to move!");
}

gameFScene.update = function()
{
    edges.setVelocity(0, 0);

    //right hand player controls
    if (cursors.up.isDown) {
        player2.setVelocityY(-200);
        player2c.setText();
    }
    else if (cursors.down.isDown){
        player2.setVelocityY(200);
        player2c.setText();
    }
    else {
        player2.setVelocityY(0);
    }

    //left hend player controls
    if (keyW.isDown){
        player1.setVelocityY(-200);
        player1c.setText();
    }
    else if (keyS.isDown){
        player1.setVelocityY(200);
        player1c.setText();
    }
    else {
        player1.setVelocityY(0);
    }

    //right hand player ball collisions
    var collisiond2 = this.physics.collide(ball, player2);
    
    if (collisiond2 && cursors.up.isDown) {
        ball.setVelocityX(-400);
        ball.setVelocityY(-45);
    }
    else if (collisiond2 && cursors.down.isDown) {
        ball.setVelocityX(-400);
        ball.setVelocityY(45);
    }
    else if (collisiond2){
        ball.setVelocityX(-400);
        
    }
        var collisiond = this.physics.collide(ball, player1);
    //left hand player ball collisions
    if (collisiond && keyS.isDown) {
        ball.setVelocityX(400);
        ball.setVelocityY(45);
    }
    else if (collisiond && keyW.isDown) {
        ball.setVelocityX(400);
        ball.setVelocityY(-45);
    }
    else if (collisiond){
        ball.setVelocityX(400);
    }
    
    //top and bottom collisions
    if (this.physics.collide(ball, edge1)){
        ball.setVelocityY(45);
    }
    else if (this.physics.collide(ball, edge2)){
        ball.setVelocityY(-45);
    }
    
    if (this.physics.collide(ball, edge3)) {
        player2score += 1;
        player2scoret.setText(player2score);
        ball.setPosition(400, 300);
        ball.setVelocityX(-400);
        ball.setVelocityY(0);
    }
    else if (this.physics.collide(ball, edge4)) {
        player1score += 1;
        player1scoret.setText(player1score);
        ball.setPosition(400, 300);
        ball.setVelocityX(400);
        ball.setVelocityY(0);
    }

    if (player1score == 10){
        this.scene.start('P1W');
    }
    else if (player2score == 10){
        this.scene.start('P2W');
    }

}