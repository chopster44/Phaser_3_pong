let startScene = new Phaser.Scene('Start');

var start;
var startt;
var space;

startScene.preload = function()
{
    this.load.image('PONG', '../Assets/Bar-copy.png');
}
startScene.create = function()
{
    start = this.physics.add.sprite(400, 300, 'PONG').setScale(10);
    startt = this.add.text(300, 400, '0', { fontSize: '16px', fill: '#FFFFFF' });
    startt.setText("Press Space to start!");
    space = this.input.keyboard.addKey('SPACE');
}
startScene.update = function()
{
    if (space.isDown) {
        this.scene.start('Game');
    }
}