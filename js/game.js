import Bullet from "./bullet.js";
import BulletGroup from "./bulletGroup.js";
class GameScene extends Phaser.Scene {
    constructor() {
        super();
        this.player;
        this.cursors;
        this.faceRight;
        this.ennemyFaceRight;
        this.PlayerBulletGroup;
        this.EnnemyBulletGroup;
        this.bulletDelay;
        this.ennemy;
    }

    preload() {
        this.load.image('tempBackground', 'assets/FrozenForest_Tilese_Background.png');
        this.load.spritesheet('gunner', 'assets/TeamGunner/CHARACTER_SPRITES/Black/Gunner_Black_Full_Line2.png', { frameWidth: 28, frameHeight: 35 });
        this.load.image('bullet', 'assets/TeamGunner/EXTRAS/bullet.png');
        this.load.spritesheet('ennemy','assets/TeamGunner/CHARACTER_SPRITES/Red/Gunner_Red_idle.png', { frameWidth: 48, frameHeight: 48 });
    }

    create() {
        //Creating the backgroung, the character and the animations
        this.createBackground();
        this.createCharacter();
        this.createAnims();

        //Creating ennemies and their animation + bullet of the ennemy
        this.createEnnemy();
        this.createAnimsEnnemy();
        //Creating a bulletGroup which will be the ammunitions available for the character to shoot
        this.PlayerBulletGroup = new BulletGroup(this);

        //Adding a delay on the fire rate
        this.createDelay();

        //Adding cursors to move the character
        this.cursors = this.input.keyboard.createCursorKeys();
        //For debugging purposes
        console.log(this);
    }

    update() {
        //Constantly update to take care of user's input
        //User can make his character move and shoot
        this.movements();
        this.ennemyMovements();
        this.shoot();
     //   this.Ennemyshoot();
        
        //Check the delay for the firerate 
        this.checkingDelay();
    }

    

    //Add the background
    createBackground(){
        this.add.image(config.width / 2, config.height / 2, 'tempBackground');
    }

    //Add the character and set up some variables
    createCharacter(){
        this.player = this.physics.add.sprite(config.width / 2, config.height / 2, 'gunner');
        this.faceRight = true;
        this.player.setCollideWorldBounds(true);
    }

    createEnnemy(){
        this.ennemy = this.physics.add.sprite(300 ,200,'ennemy');
        this.faceRight = true;
        this.ennemy.setCollideWorldBounds(true);
        
      
    }

    //Add the bulletDelay and set it up
    createDelay(){
        this.bulletDelay = fireRate;
    }

    //Check if the bulletDelay is at the fireRate and ++ if not
    checkingDelay(){
        if(this.bulletDelay <= fireRate-1){
            this.bulletDelay++;
        }
    }

    //Take care of all possible movements done by the character 
    //Including : left - right - jump
    //
    //Animations are also displayed
    movements(){
        if (this.cursors.right.isDown) {
            this.faceRight = true;
            this.player.setVelocityX(160);
            if (this.player.body.blocked.down)
                this.player.anims.play('right', true);
        }
        else if (this.cursors.left.isDown) {
            this.faceRight = false;
            this.player.setVelocityX(-160);
            if (this.player.body.blocked.down)
                this.player.anims.play('left', true);
        }
        else {
            this.player.setVelocityX(0);

            if (this.faceRight)
                this.player.anims.play('idleRight', true);
            else
                this.player.anims.play('idleLeft', true);
        }

        if (this.cursors.up.isDown) {
            if (this.player.body.blocked.down) 
                this.player.setVelocityY(-250);
        }

        if(!this.player.body.blocked.down){
            if (this.faceRight)
                this.player.anims.play('jumpRight', true);
            else
                this.player.anims.play('jumpLeft', true);
        }
    }

    ennemyMovements(){
        if (this.player.x - this.ennemy.x > 0)
        {           
           this.ennemy.scaleX = 1;
           this.ennemyFaceRight = true;
            
        } else {
            this.ennemy.scaleX = -1;
            this.ennemyFaceRight = false;
        }
        this.ennemy.anims.play('idleEnnemy',true);
        
    }

    //Allows the character to shoot with SPACEBAR
    shoot() {
        if (this.cursors.space.isDown && this.bulletDelay == fireRate) {
            this.PlayerBulletGroup.shootBullet(this.player.x, this.player.y, this.faceRight);
            this.bulletDelay = 0;
        }
    }

    Ennemyshoot(){
  //      this.EnnemyBulletGroup.shootBullet(this.ennemy.x, this.ennemy.y,this.ennemyFaceRight);
   //         this.bulletDelay = 0;
    }

    //Create all the animations needed for the player
    createAnims(){
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('gunner', { start: 14, end: 19 }),
            frameRate: 10
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('gunner', { start: 20, end: 25 }),
            frameRate: 10
        });

        this.anims.create({
            key: 'idleRight',
            frames: this.anims.generateFrameNumbers('gunner', { start: 0, end: 4 }),
            frameRate: 10
        });

        this.anims.create({
            key: 'idleLeft',
            frames: this.anims.generateFrameNumbers('gunner', { start: 5, end: 9 }),
            frameRate: 10
        });

        this.anims.create({
            key: 'jumpRight',
            frames: this.anims.generateFrameNumbers('gunner', { start: 10, end: 11 }),
            frameRate: 10
        });

        this.anims.create({
            key: 'jumpLeft',
            frames: this.anims.generateFrameNumbers('gunner', { start: 12, end: 13 }),
            frameRate: 10
        });
    }

    //Create all the animations needed for the ennemy
    createAnimsEnnemy(){

        this.anims.create({
            key: 'idleEnnemy',
            frames: this.anims.generateFrameNumbers('ennemy', { start: 0, end: 4 }),
            frameRate: 10
        });
      
     
    }
    
}

const config = {
    type: Phaser.AUTO,
    width: 512,
    height: 256,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: GameScene
};

//Define all constants
const fireRate = 10;

const game = new Phaser.Game(config);

