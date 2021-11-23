let startScene = new Phaser.Scene('Start');

var start;
var startt;
var starttt;
var space;
var f;

startScene.preload = function()
{
    this.load.image('PONG', './assets/Bar-copy.png');
}
startScene.create = function()
{
    start = this.physics.add.sprite(400, 300, 'PONG').setScale(10);
    startt = this.add.text(300, 400, '0', { fontSize: '16px', fill: '#FFFFFF' });
    starttt = this.add.text(260, 430, '0', { fontSize: '16px', fill: '#FFFFFF'});
    startt.setText("Press Space to start!");
    starttt.setText("Press F to play a faster game!");
    space = this.input.keyboard.addKey('SPACE');
    f = this.input.keyboard.addKey('F');
}
startScene.update = function()
{
    if (space.isDown) {
        this.scene.start('Game');
    }
    else if (f.isDown) {
        this.scene.start('FGame');
    }
}