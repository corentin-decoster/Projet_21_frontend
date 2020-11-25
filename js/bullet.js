export default class Bullet extends Phaser.Physics.Arcade.Sprite {
    
    constructor(scene,x,y){
        super(scene,x,y,'bullet');
    }

    fire(x,y){
        this.body.reset(true);
        this.setActive(true);
        this.setVisible(true);

        this.setVelocity(-900);  
    }
}

