import Enemy from "./enemy.js";
export default class EnemyGroup extends Phaser.Physics.Arcade.Group{
    constructor(scene){
        super(scene.physics.world, scene);

        //Create 30 initial bullets
        this.createMultiple({
            classType : Enemy,
            frameQuantity : 5,
            active : false,
            visible : false,
            key : 'enemy',
            runChildUpdate : true 
        })
    }

   
    
}