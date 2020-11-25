import BulletGroup from "./bulletGroup.js";
class GameScene extends Phaser.Scene {
    constructor() {
        super();
        this.player;
        this.cursors;
        this.faceRight;
        this.bulletGroup;
    }

    preload() {
        this.load.image('tempBackground', 'assets/tempBackground.jpg');
        this.load.spritesheet('tempPerso', 'assets/TeamGunner/CHARACTER_SPRITES/Black/Gunner_Black_Full_Line.png', { frameWidth: 48, frameHeight: 48 });
        //this.load.image('bullet', 'assets/TeamGunner/EXTRAS/bullet.png');
        this.load.image('bullet', 'assets/testPerso.jpg ');
    }

    create() {
        this.createBackground();
        this.createCharacter();
        this.createAnims();
        this.bulletGroup = new BulletGroup(this);

        this.cursors = this.input.keyboard.createCursorKeys();
        console.log(this);
    }

    update() {
        //espace pour tirer
        if (this.cursors.space.isDown) {
            this.bulletGroup.shootBullet(this.player.x, this.player.y, this.faceRight);
        }


        //deplacement :)
        this.movements();
    }

    

    createBackground(){
        this.add.image(config.width / 2, config.height / 2, 'tempBackground');
    }

    createCharacter(){
        this.player = this.physics.add.sprite(config.width / 2, config.height / 2, 'tempPerso');
        this.faceRight = true;
        this.player.setCollideWorldBounds(true);
    }

    movements(){
        if (this.cursors.right.isDown) {
            this.faceRight = true;
            this.player.setVelocityX(160);
            if (this.player.body.blocked.down)
                this.player.anims.play('right', true);
            else if (!this.player.body.blocked.down)
                this.player.anims.play('jumpRight', true);
        }
        else if (this.cursors.left.isDown) {
            this.faceRight = false;
            this.player.setVelocityX(-160);
            if (this.player.body.blocked.down)
                this.player.anims.play('left', true);
            else if (!this.player.body.blocked.down)
                this.player.anims.play('jumpLeft', true);

        }
        else {
            this.player.setVelocityX(0);

            if (this.faceRight)
                this.player.anims.play('idleRight', true);
            else
                this.player.anims.play('idleLeft', true);

        }

        if (this.cursors.up.isDown) {
            if (this.player.body.blocked.down) {
                this.player.setVelocityY(-250);
                if (this.faceRight)
                    this.player.anims.play('jumpRight', true);
                else
                    this.player.anims.play('jumpLeft', true);
            }
            else {
                if (this.cursors.right.isDown) {
                    this.player.anims.play('jumpRight', true);
                }
                else if (this.cursors.left.isDown) {
                    this.player.anims.play('jumpLeft', true);
                }
            }
        }

    }

    createAnims(){
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
    }
}

const config = {
    type: Phaser.AUTO,
    width: 900,
    height: 400,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: GameScene
};

const game = new Phaser.Game(config);