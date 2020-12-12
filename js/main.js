import Menu from "./Menu.js";
import Game from "./game.js";

var menu = new Menu();
var game = new Game();


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 560,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
   
};
  var ga = new Phaser.Game(config);
  
  // load scenes
  ga.scene.add('Menu', menu);
  ga.scene.add("Game", game);
  
  // start title
  ga.scene.start('Menu');