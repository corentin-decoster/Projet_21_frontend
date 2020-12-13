

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
        

       
   }


   clickButton() {
       this.scene.start('menu');
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

