
class Menu extends Phaser.Scene {

	constructor() {
        super({key:'menu'});
        this.start;
    }
    

	preload() {
		this.load.image('background', './assets/menu_bg.jpg');
	}

	create() {
		 var bg = this.add.sprite(0,0,'background');
		  bg.setOrigin(0,0);

          this.start = this.add.text(300,190, 'START THE GAME');
          this.start.fontWeight = 'bold';
          this.start.stroke = '#000000';
          this.start.strokeThickness = 6;
          this.start.fill = '#43d637';
          this.start.setInteractive({ useHandCursor: true });
          this.start.on('pointerdown', () => this.clickButton());
    }


    clickButton() {
        this.scene.switch('map1');
    }

   
    
 

}

export default Menu;