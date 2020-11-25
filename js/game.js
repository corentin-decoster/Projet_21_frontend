
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
var faceRight;

function preload ()
{
    this.load.image('tempBackground', 'assets/tempBackground.jpg');
    this.load.spritesheet('tempPerso', 'assets/TeamGunner/CHARACTER_SPRITES/Black/Gunner_Black_Full_Line.png', { frameWidth: 48, frameHeight: 48 }); 
}

function create ()
{
    this.add.image(config.width / 2, config.height / 2, 'tempBackground');
    player = this.physics.add.sprite(config.width / 2, config.height / 2, 'tempPerso');
    faceRight = true;

    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('tempPerso', { start: 14, end: 19 }),
        frameRate: 10
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('tempPerso', { start: 20, end: 25 }),
        frameRate: 10
    });

    this.anims.create({
        key: 'idleRight',
        frames: this.anims.generateFrameNumbers('tempPerso', { start: 0, end: 4 }),
        frameRate: 10
    });

    this.anims.create({
        key: 'idleLeft',
        frames: this.anims.generateFrameNumbers('tempPerso', { start: 5, end: 9 }),
        frameRate: 10
    });

    this.anims.create({
        key: 'jumpRight',
        frames: this.anims.generateFrameNumbers('tempPerso', { start: 10, end: 11 }),
        frameRate: 10
    });

    this.anims.create({
        key: 'jumpLeft',
        frames: this.anims.generateFrameNumbers('tempPerso', { start: 12, end: 13 }),
        frameRate: 10
    });

    console.log(this);
}

function update()
{
    if(cursors.right.isDown){
        faceRight = true;
        player.setVelocityX(160);
        if(player.body.blocked.down)
            player.anims.play('right', true);
        else if(!player.body.blocked.down)
            player.anims.play('jumpRight', true);
    }
    else if(cursors.left.isDown){
        faceRight = false;
        player.setVelocityX(-160);
        if(player.body.blocked.down)
            player.anims.play('left', true);
        else if(!player.body.blocked.down)
            player.anims.play('jumpLeft', true);    
        
    }
    else{
        player.setVelocityX(0);

        if(faceRight)
            player.anims.play('idleRight', true);
        else
            player.anims.play('idleLeft', true);
            
    }

    if(cursors.up.isDown){
        if(player.body.blocked.down){
            player.setVelocityY(-250);
            if(faceRight)
                player.anims.play('jumpRight', true);
            else
                player.anims.play('jumpLeft', true);
        }
        else{
            if(cursors.right.isDown){
                player.anims.play('jumpRight', true);
            }
            else if(cursors.left.isDown){
                player.anims.play('jumpLeft', true);
            }
        }
    }
}
