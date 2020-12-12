import Bullet from "./bullet.js";
import BulletGroup from "./bulletGroup.js";
const fireRate = 10;
class Map1 extends Phaser.Scene {

	constructor() {
		super({key : 'map1'});
		this.player;
        this.cursors;
        this.faceRight;
        this.ennemyFaceRight;
        this.PlayerBulletGroup;
        this.EnnemyBulletGroup;
        this.bulletDelay;
        this.ennemy;
        this.timerText;
        this.timerTimeEvent;
        this.completedTime;
        this.playedTime;
        this.inGameBoolean;
        this.lvlOneSpawnPoint;
        this.nameLvlMap;
	}

	init() {
		
	};

	preload() {
		this.load.image('tempBackground', 'assets/Map/Wasteland_Sky.png');
        this.load.spritesheet('gunner', 'assets/TeamGunner/CHARACTER_SPRITES/Black/Gunner_Black_Full_Line2.png', { frameWidth: 28, frameHeight: 35 });
        this.load.image('bullet', 'assets/TeamGunner/EXTRAS/bullet.png');
        this.load.spritesheet('ennemy','assets/TeamGunner/CHARACTER_SPRITES/Red/Gunner_Red_idle.png', { frameWidth: 48, frameHeight: 48 });
	
		this.load.image('map_assets','assets/Map/Wasteland.png');
        this.load.tilemapTiledJSON('map1','assets/Map/Map1.json');
	}

	create() {
	   //Creating the backgroung, the character and the animations
	   this.createBackground();
	   this.createCharacter();
	   this.createAnims();

	   this.createALvl();
        
        this.createSpawnPointLvl(180,380,400,750,300,500,150,600);
        //Set up Timer
        this.SetUpTimer();
        //Set up a key to stop timer for testing purpose
        this.input.keyboard.on('keydown_W', this.stopAndSaveTimer, this);

        //Creating ennemies and their animation + bullet of the ennemy
        this.createEnnemy();
		this.createAnimsEnnemy();
		//Creating a bulletGroup which will be the ammunitions available for the character to shoot
        this.PlayerBulletGroup = new BulletGroup(this);
        this.physics.add.overlap(this.ennemy, this.PlayerBulletGroup, this.enemyHit, null, this);
        
        this.physics.add.overlap(this.PlayerBulletGroup, this.mapLayer,this.wallHiy,null,this);
        
       

        //Adding a delay on the fire rate
        this.createDelay();

        //Adding cursors to move the character
        this.cursors = this.input.keyboard.createCursorKeys();
        //For debugging purposes
        console.log(this);

	}

	update() {
		//Constantly update to take care of user's input
        //timer test
        //User can make his character move and shoot
        this.movements();
        this.ennemyMovements();
        this.shoot();
     //   this.Ennemyshoot(); 

        //Check the delay for the firerate 
        this.checkingDelay();
	}

	createBackground(){
        this.add.image(400, 280, 'tempBackground');
	}
	//Add the character and set up some variables
    createCharacter(){
        //this.player = this.physics.add.sprite(config.width / 2, config.height / 2, 'gunner');
        this.player = this.physics.add.sprite(35, 400, 'gunner');
        this.faceRight = true;
        this.player.setCollideWorldBounds(true);
    }
    createALvl(){
        this.createLvlOneMap();
        this.createLvlOneTileSet();
        this.createLvlOnePlateform();
	}
	//Add first level
    createLvlOneMap(){
        this.map=this.make.tilemap({key: 'map1'});
    }
    createLvlOneTileSet(){
        this.tileset=this.map.addTilesetImage('map_assets_js','map_assets');
    }
    createLvlOnePlateform(){
        this.mapLayer=this.map.createStaticLayer(0,this.tileset,0,0);
        this.mapLayer.setCollisionByExclusion([-1]);
        this.physics.add.collider(this.player, this.mapLayer);
        
	}
	
	createSpawnPointLvl(y4,x4,y3,x3,y2,x2,y1,x1){
        this.lvlOneSpawnPoint= new Array();
        this.lvlOneSpawnPoint.push(y4);
        this.lvlOneSpawnPoint.push(x4);
        this.lvlOneSpawnPoint.push(y3);
        this.lvlOneSpawnPoint.push(x3);
        this.lvlOneSpawnPoint.push(y2);
        this.lvlOneSpawnPoint.push(x2);
        this.lvlOneSpawnPoint.push(y1);
        this.lvlOneSpawnPoint.push(x1);
	}
	createEnnemy(){
        this.ennemy = this.physics.add.sprite(this.lvlOneSpawnPoint.pop(),
                                                this.lvlOneSpawnPoint.pop(),'ennemy');
        this.faceRight = true;
        this.ennemy.setCollideWorldBounds(true);
        this.physics.add.collider(this.ennemy, this.mapLayer);  
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
	//char movement
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
	//enem movement
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
	//collide between player
	enemyHit(ennemy,bullet){
        console.log("ennemy hit");
        if(this.lvlOneSpawnPoint.length<=8){
            this.scene.switch('map2');
            return;
        }
        ennemy.x=this.lvlOneSpawnPoint.pop();
        ennemy.y=this.lvlOneSpawnPoint.pop();
        bullet.destroy();   
	}
	wallHit(bullet,mapLayer){
        bullet.destroy();
	}
	switchMap(){
        this.lvlOneSpawnPoint=new Array();
        if(this.nameLvlMap.length=0){
            //fin du jeu
            //this.stopAndSaveTimer();
            return;
        }
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

	  //handling the timer
    SetUpTimer(){
        this.inGameBoolean=true;
        this.playedTime = 0;

        this.timerText = this.add.text(32, 32, 'Timer: ' + this.formatTime(this.playedTime));

        // Each 1000 ms call onEvent
        this.timerTimeEvent= this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });
        /*
        this.timerText = this.add.text(32, 32);
    
        // Each 1000 ms call onEvent
        //timerTimeEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });
        this.timerTimeEvent = this.time.delayedCall(3000, this.onEvent, [], this);
        */
    }
    formatTime(seconds){
        //from phaser tutorial method to formate time 
        var minutes = Math.floor(seconds/60);
        // Seconds
        var partInSeconds = seconds%60;
        // Adds left zeros to seconds
        partInSeconds = partInSeconds.toString().padStart(2,'0');
        // Returns formated time
        return `${minutes}:${partInSeconds}`;
    }
    onEvent(){
        if(this.inGameBoolean===true){
            this.playedTime += 1; // One second
            this.timerText.setText('Timer: ' + this.formatTime(this.playedTime));
        }else{
            
        }
    }

    stopAndSaveTimer(){
        console.log("COUCOUCOCUOCUC");
        console.log("fdp")
        this.inGameBoolean=false;
        this.completedTime=this.playedTime;
    }
	end() {
		
	}

}

export default Map1;