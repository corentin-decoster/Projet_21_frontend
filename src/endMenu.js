

class EndMenu extends Phaser.Scene {
    
    constructor(){
    super({key:'endMenu'});
    this.playedTime;
    

    }

    init(data) {
		this.playedTime=data.time;
	};

    preload(){
        this.load.image('score','./assets/score.png');
        this.load.html('form', './form.html');
    }


    create() {
        this.add.image(370,150,'score');
        this.add.text(400,280,`MY SCORE HUEHUE IS : ${this.playedTime}`);
        var element = this.add.dom(400, 250).createFromCache('form');
        

       
   }


   clickButton() {
       this.scene.start('score');
   }

   postMyScore(){
        
   }
  
   


}

export default EndMenu;

