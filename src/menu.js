
class Menu extends Phaser.Scene {

	constructor() {
        super({key:'menu'});
        this.start;
        this.score;
        this.music;
    }
    

	preload() {
        this.load.image('background', './assets/menu_bg.jpg');
        this.load.image('start', './assets/start.png');
        this.load.image('score','./assets/score.png');
        this.load.audio('gas', 'assets/Music/gas_long.ogg');
        
	}

	create() {
       this.music = this.sound.add('gas');
       this.music.setVolume(0.4);
       this.music.play();
		 var bg = this.add.sprite(0,0,'background');
          bg.setOrigin(0,0);
          this.start = this.add.image(370,210,'start');
          this.start.setScale(.2);
          this.start.setInteractive({ useHandCursor: true });
          this.start.on('pointerdown', () => this.clickButton());
          this.score = this.add.image(370,440,'score');
          this.score.setScale(.3);
          this.score.setInteractive({useHandCursor: true});
          this.score.on('pointerdown', ()=>this.highscore());
          
    }
    update(){
       
    }


    clickButton() {
        this.scene.switch('map1');
    }

   
    highscore(){
        this.scene.switch('score');    
    }
 

}

export default Menu;