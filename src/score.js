

class Score extends Phaser.Scene {
    
    constructor(){
    super({key:'score'});
    

    }

    preload(){
        this.load.image('score','./assets/score.png');
    }


    create() {
        this.add.image(370,150,'score');
        this.getHighScore();
        this.menu = this.add.text(300,480,'RETOUR AU MENU');
        this.menu.setInteractive({ useHandCursor: true });
        this.menu.on('pointerdown', () => this.clickButton());
        

       
   }


   clickButton() {
       this.scene.switch('menu');
   }
   
   getHighScore() {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:8000/users", false);
    xhttp.send();
    var y=280;
    const users= JSON.parse(xhttp.responseText);
    for(let user of users){
        let name=user.player;
        console.log(name + " name");
        
        let score=user.score;
        console.log(score + " score");

        this.add.text(400,y, `name : ${name} et score : ${score}`);
        y=y+20;
    }

   }
  
   


}

export default Score;

