
var myCustomCanvas = document.createElement('canvas');

myCustomCanvas.id = 'myCustomCanvas';
myCustomCanvas.style = 'border: 8px black';

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
var cursors;

function preload ()
{
    this.load.image('tempBackground', 'assets/tempBackground.jpg');
    this.load.spritesheet('tempPerso', 'assets/Skinless Yarik/body/firstcharacter.png', { frameWidth: 34, frameHeight: 34 }); 
}

function create ()
{
    this.add.image(config.width / 2, config.height / 2, 'tempBackground');
    player = this.physics.add.sprite(config.width / 2, config.height / 2, 'tempPerso');

    player.setScale(2,2);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
        key: 'left',
        frames: [ { key: 'tempPerso', frame: 0 } ],
        frameRate: 1
    });

    this.anims.create({
        key: 'right',
        frames: [ { key: 'tempPerso', frame: 1 } ],
        frameRate: 1
    });

    console.log(this);
}

function update()
{
    if(cursors.right.isDown){
        player.setVelocityX(160);
        player.anims.play('right');
    }
    else if(cursors.left.isDown){
        player.setVelocityX(-160);
        player.anims.play('left');
        
    }
    else{
        player.setVelocityX(0);
    }

    if(cursors.up.isDown && player.body.blocked.down){
        player.setVelocityY(-250);
    }
}
