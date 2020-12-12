class Map2 extends MainMap {
    constructor(){
        super();
        Phaser.Scene.call(this, { key: 'map2' });
    }

    preload(){
        this.load.image('tempBackground', 'assets/Map/Wasteland_Sky.png');
        this.load.spritesheet('gunner', 'assets/TeamGunner/CHARACTER_SPRITES/Black/Gunner_Black_Full_Line2.png', { frameWidth: 28, frameHeight: 35 });
        this.load.image('bullet', 'assets/TeamGunner/EXTRAS/bullet.png');
        this.load.spritesheet('ennemy','assets/TeamGunner/CHARACTER_SPRITES/Red/Gunner_Red_idle.png', { frameWidth: 48, frameHeight: 48 });

        //map loading
        this.load.image('map_assets','assets/Map/Wasteland.png');
        this.load.tilemapTiledJSON('map1','assets/Map/Map2.json');
        
    }

    create(){
        super.create();
    }

    update(){
        super.update();
    }

}
