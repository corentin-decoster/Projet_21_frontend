
class Menu extends Phaser.Scene {

	constructor() {
        super({key:'menu'});
        this.start;
        this.score;
    }
    

	preload() {
        this.load.image('background', './assets/menu_bg.jpg');
        this.load.image('start', './assets/start.png');
        this.load.image('score','./assets/score.png');
        
	}

	create() {
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


    clickButton() {
        this.scene.start('map1');
    }

   
    highscore(){
        this.scene.start('score');    
    }
 

}

export default Menu;