

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
        element.addListener('click');

        element.on('click', function (event) {
    
            if (event.target.name === 'playButton')
            {
                var inputText = this.getChildByName('nameField');
    
                //  Have they entered anything?
                if (inputText.value !== '')
                {
                    //  Turn off the click events
                    this.removeListener('click');
    
                    //  Hide the login element
                    this.setVisible(false);
    
                    //  Populate the text with whatever they typed in
                    text.setText('Welcome ' + inputText.value);
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
        
   }
  
   


}

export default EndMenu;

