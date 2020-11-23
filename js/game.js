
var myCustomCanvas = document.createElement('canvas');

myCustomCanvas.id = 'myCustomCanvas';
myCustomCanvas.style = 'border: 8px solid red';

document.body.appendChild(myCustomCanvas);

var myCustomContext = myCustomCanvas.getContext('2d');

var config = {
    type: Phaser.CANVAS,
    width: 900,
    height: 400,
    canvas: document.getElementById('myCustomCanvas'),
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('tempBackground', 'assets/tempBackground.jpg');
}

function create ()
{
    this.add.image(config.width / 2, config.height / 2, 'tempBackground');
}
