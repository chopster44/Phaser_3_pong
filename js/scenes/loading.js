let loadingScene = new Phaser.Scene('Loading');

var loading;
var run = 0;

loadingScene.preload = function()
{
    this.load.spritesheet('loading', './assets/Bar-copy-export.png', { frameWidth: 32, frameHeight: 16});
}

loadingScene.create = function()
{
    loading = this.physics.add.sprite(400, 300, 'loading').setScale(8).refreshBody();

    this.anims.create({
        key: 'load',
        frames: this.anims.generateFrameNumbers('loading', { start: 0, end: 5 }),
        frameRate: 1,
        repeat: -1
    });

    space = this.input.keyboard.addKey('SPACE');

}

loadingScene.update = function()
{
    if (run == 1){
        loading.anims.play('load', true);
        run += 1;
    }
    else if (run > 350){
        this.scene.start('Start');
    }
    else {
        run += 1;
    }

    if (space.isDown){
        this.scene.start('Game');
    }
}