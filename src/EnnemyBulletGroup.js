import EnnemyBullet from "./EnnemyBullet.js";
export default class EnnemyBulletGroup extends Phaser.Physics.Arcade.Group{
    constructor(scene){
        super(scene.physics.world, scene);

        //Create 30 initial bullets
        this.createMultiple({
            classType : EnnemyBullet,
            frameQuantity : 3,
            active : false,
            visible : false,            
            key : 'ennemyBullet'
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