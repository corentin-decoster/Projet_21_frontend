

class Score extends Phaser.Scene {
    
    constructor(){
    super({key:'score'});
    

    }

    preload(){
        this.load.image('score','./assets/score.png');
    }


    create() {
        this.add.image(370,150,'score');

       
   }


   clickButton() {
       this.scene.start('menu');
   }

  
   


}

export default Score;

