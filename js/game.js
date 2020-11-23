/*
//create a new scene
let gameScene = new Phaser.Scene('Game');

//load assets
gameScene.preload = function(){
  //load images
  this.load.image('tempBackground', './assets/tempBackground.jpg');
};

gameScene.create = function(){
  let bg = this.add.image(0,0,'tempBackground');
  //dimension tempBackground -> 900x420
  bg.setOrigin(900/2, 420/2);
};

//set the configuration
var config = {
    type: Phaser.AUTO,
    width: 900,
    height: 420,
    scene: gameScene
};
//create a new game
let game = new Phaser.Game(config);
*/

var myCustomCanvas = document.createElement('canvas');

myCustomCanvas.id = 'myCustomCanvas';
myCustomCanvas.style = 'border: 8px solid red';

document.body.appendChild(myCustomCanvas);

// var myCustomContext = myCustomCanvas.getContext('2d');

var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    canvas: document.getElementById('myCustomCanvas'),
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('pic', 'assets/FrozenForest_Tilese_Background.png');
}

function create ()
{
    this.add.image(400, 300, 'pic');
}
