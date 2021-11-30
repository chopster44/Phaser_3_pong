import "phaser"; 
var player1, player1c, player1scoret;
var player1score = 0;
var player2, player2c, player2scoret;
var player2score = 0;
var ball;
var levelDone = false;
var edge1, edge2, edge3, edge4;
var center;
var cursors, keyW, keyS, key1, key2;
export class gameFScene extends Phaser.Scene {
    constructor() {
        super({
            key: "FGame"
        });
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
        player2 = this.physics.add.sprite(750, 200, 'player').setPushable(false);

        //create ball sprite
        ball = this.physics.add.sprite(400, 225, 'ball').setScale(2).refreshBody();

        //create borders
        edge1 = this.physics.add.sprite(400, 0, 'edgea').setImmovable(true).refreshBody();
        edge2 = this.physics.add.sprite(400, 600, 'edgea').setImmovable(true).refreshBody();
        edge3 = this.physics.add.sprite(0, 300, 'edgeb').setImmovable(true).refreshBody();
        edge4 = this.physics.add.sprite(800, 300, 'edgeb').setImmovable(true).refreshBody();

        //create central split
        center = this.physics.add.staticGroup();
        center.create(400, 236, 'spli');
        center.create(400, 300, 'spli');
        center.create(400, 364, 'spli');
        center.create(400, 428, 'spli');
        
        //stop players from going through the floor
        player1.setCollideWorldBounds(true);
        player2.setCollideWorldBounds(true);

        //start with the ball moving
        ball.setVelocityX(-600);

        //create key inputs
        cursors = this.input.keyboard.createCursorKeys();
        keyW = this.input.keyboard.addKey('W');
        keyS = this.input.keyboard.addKey('S');
        key1 = this.input.keyboard.addKey('Q');
        key2 = this.input.keyboard.addKey('E');

        //add text
        player1scoret = this.add.text(332, 100, '0', { fontSize: '32px', color: '#FFFFFF'});
        player2scoret = this.add.text(432, 100, '0', { fontSize: '32px', color: '#FFFFFF'});
        player1c = this.add.text(50, 500, 'Use W and S to move!', { fontSize: '16px', color: '#FFFFFF'});
        player2c = this.add.text(500, 500, 'Use Up and Down keys to move!', { fontSize: '16px', color: '#FFFFFF'});
    }
    update(time): void {
        //stop the edges from floating about
        edge1.setVelocity(0, 0);
        edge2.setVelocity(0, 0);

        //right hand play controls
        if (cursors.up.isDown) {
            player2.setVelocityY(-500);
            player2c.setText();
        }
        else if (cursors.down.isDown) {
            player2.setVelocityY(500);
            player2c.setText();
        }
        else {
            player2.setVelocityY(0);
        };

        if (key1.isDown) {
            this.scene.start('P1W');
        };

        //left hand player controls
        if (keyW.isDown) {
            player1.setVelocityY(-500);
            player1c.setText();
        }
        else if (keyS.isDown) {
            player1.setVelocityY(500);
            player1c.setText();
        }
        else {
            player1.setVelocity(0, 0)
        };

        if (key2.isDown) {
            this.scene.start('P2W');
        };

        //right hand player collisions
        var collisiond = this.physics.collide(ball, player2);

        if (collisiond && cursors.up.isDown) {
            ball.setVelocity(-600, -80);
        }
        else if (collisiond && cursors.up.isDown) {
            ball.setVelocity(-600, 80);
        }
        else if (collisiond) {
            ball.setVelocity(-600);
        };

        //left hand player collisions
        var collisiond2 = this.physics.collide(ball, player1);

        if (collisiond2 && keyW.isDown) {
            ball.setVelocity(600, -80);
        }
        else if (collisiond2 && keyS.isDown) {
            ball.setVelocity(600, 80);
        }
        else if (collisiond2) {
            ball.setVelocity(600);
        };

        //top and bottom collisions
        if (this.physics.collide(ball, edge1)) {
            ball.setVelocityY(80);
        }
        else if (this.physics.collide(ball, edge2)) {
            ball.setVelocityY(-80);
        };

        //points
        if (this.physics.collide(ball, edge3)) {
            player2score +=1;
            player2scoret.setText(player2score);
            ball.setPosition(400, 250);
            ball.setVelocity(-400, 0);
        }
        else if (this.physics.collide(ball, edge4)) {
            player1score +=1;
            player1scoret.setText(player1score);
            ball.setPosition(400, 250);
            ball.setVelocity(400, 0);
        };

        //end game
        if (player1score == 10) {
            this.scene.start('P1W');
        }
        if (player2score == 10) {
            this.scene.start('P2W');
        }
    }
}