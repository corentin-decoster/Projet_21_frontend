class TitleScene extends Phaser.Scene {

	constructor() {
		super({key:'title'});
	}

    preload () {
        this.load.image('background', './assets/Map/Wasteland_Sky.png');
    }
    
   create () {
       var bg =  this.add.image(0, 0, 'background');
        bg.setOrigin(0,0);
        console.log("PASSEZ DANS CREATE TITLESCENE")
        var text = this.add.text(100,100, 'Welcome To My Game!');
    }

}

export default TitleScene;