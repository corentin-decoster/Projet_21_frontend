import Bullet from "./bullet.js";
export default class BulletGroup extends Phaser.Physics.Arcade.Group{
    constructor(scene){
        super(scene.physics.world, scene);

        //Create 30 initial bullets
        this.createMultiple({
            classType : Bullet,
            frameQuantity : 30,
            active : false,
            visible : false,
            key : 'bullet' 
        })
    }

    
    shootBullet(x,y,faceRight){
        //Take a bullet from the "inactive" ones
        const bullet = this.getFirstDead(false);
        //Shoot if available
        if(bullet){
            bullet.fire(x,y,faceRight);
        }
    }
}