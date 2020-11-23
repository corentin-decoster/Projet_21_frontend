//create a new scene
let gameScene = new Phaser.Scene('Game');

//load assets
gameScene.preload = function(){
  //load images
  this.load.image('tempBackground','../assets/tempBackground');
};

gameScene.create = function(){
let bg = this.add.sprite(0,0,'tempBackground');
//dimension tempBackground -> 900x420
bg.setOrigin(900/2, 420/2);
};

//set the configuration
let config= {
    type: Pasher.AUTO,
    width: 640,
    height: 360,
    scene: gameScene
};
//create a new game
let game = new Phaser.Game(config);
