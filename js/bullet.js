export default class Bullet extends Phaser.Physics.Arcade.Sprite {
    
    constructor(scene,x,y){
        super(scene,x,y,'bullet');
    }

    //Allows to shoot a bullet
    fire(x,y,faceRight){
        //We want to fire straight bullets
        this.body.setAllowGravity(false);
        

        //We move the bullet onto the character and activate it + making it visible
        this.body.reset(x,y);
        this.setActive(true);
        this.setVisible(true);

        //Determining if the bullet has to go to the left side or the right side
        if(faceRight){
            this.setVelocityX(500);
        }else if(!faceRight){
            this.setVelocityX(-500);
        }
    }

    //Function that allows to update the number of usable bullets we have
    //Explaination :
    //We will still have 30 bullets but once it reaches the end of the screen, 
    //the bullet is inactive and invisible which allows the bullet to be shooted again
    preUpdate(time, delta){
        super.preUpdate(time, delta);

        if(this.x >= 800 || this.x <= 0){
            this.setActive(false);
            this.setVisible(false);
        }
    }
}

