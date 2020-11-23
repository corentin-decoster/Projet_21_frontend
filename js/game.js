
var myCustomCanvas = document.createElement('canvas');

myCustomCanvas.id = 'myCustomCanvas';
myCustomCanvas.style = 'border: 8px solid red';

document.body.appendChild(myCustomCanvas);

var myCustomContext = myCustomCanvas.getContext('2d');

var config = {
    type: Phaser.CANVAS,
    width: 900,
    height: 400,
    canvas: document.getElementById('myCustomCanvas'),
    physics: {
        default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var player;

function preload ()
{
    this.load.image('tempBackground', 'assets/tempBackground.jpg');
    this.load.image('tempPerso', 'assets/testPerso.jpg'); 

}

function create ()
{
    this.add.image(config.width / 2, config.height / 2, 'tempBackground');
    player = this.physics.add.sprite(config.width / 2, config.height / 2, 'tempPerso');
    player.setScale(0.5,0.5);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    cursors = this.input.keyboard.createCursorKeys();
}

function update(){
    if(cursors.right.isDown){
        player.setVelocityX(160);
    }
    else if(cursors.left.isDown){
        player.setVelocityX(-160);
    }
    else if(cursors.up.isDown){
        player.setVelocityY(-250);
    }
    else{
        player.setVelocityX(0);
    }
}
