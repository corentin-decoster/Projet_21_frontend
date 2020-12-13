

class EndMenu extends Phaser.Scene {
    
    constructor(){
    super({key:'endMenu'});
    this.playedTime;
    this.player;
    this.myScore;
    this.menu;
    

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
        //this.add.text(400,300,`votre score est de : ${this.playedTime}`);
        
        this.menu = this.add.text(300,480,'RETOUR AU MENU');
        this.menu.setInteractive({ useHandCursor: true });
        this.menu.on('pointerdown', () => this.clickButton());
        var element = this.add.dom(400, 250).createFromCache('form');
        this.add.text(400,280, 'ZYVA TRICHES PAS T AS FAIT : '+this.playedTime + '!!');
        var scorePut ="";
        console.log(scorePut);
        element.addListener('click');
        element.on('click', function (event) {
    
            if (event.target.name === 'playButton')
            {
                this.player = this.getChildByName('player');
                //  Have they entered anything?
                if (this.player.value !== '')
                {
                    //  Turn off the click events
                    this.removeListener('click');
    
                    //  Hide the login element
                    this.setVisible(false);
                    //  Populate the text with whatever they typed in
                    //postMyScore();
                    
                }
                else
                {
                    //  Flash the prompt
                    this.scene.tweens.add({
                        targets: text,
                        alpha: 0.2,
                        duration: 250,
                        ease: 'Power3',
                        yoyo: true
                    });
                }
            }
    
        });

       
   }



   clickButton() {
       this.scene.start('score');
   }

   postMyScore(){
    try {
        const options = {
          method: "POST", 
          body: JSON.stringify({
            score:this.myScore,
            player:this.player
          }), 
          headers: {
            "Content-Type": "application/json",
          },
        };
    
        fetch("http://localhost:8000/user", options);

    }catch(error){
        console.error("error:", error);
    }
   }
   
  
   


}

export default EndMenu;

