export default class Bullet extends Phaser.Physics.Arcade.Sprite {
    
    constructor(scene,x,y){
        super(scene,x,y,'bullet');
        
    }

    fire(x,y,faceRight){
        this.body.setAllowGravity(false);
        
        this.body.reset(x,y);
        this.setActive(true);
        this.setVisible(true);

        if(faceRight){
            this.setVelocityX(900);
        }else if(!faceRight){
            this.setVelocityX(-900);
        }
    }

    preUpdate(time, delta){
        super.preUpdate(time, delta);

        if(this.x >=900 || this.x <= 0){
            this.setActive(false);
            this.setVisible(false);
        }
    }
}

