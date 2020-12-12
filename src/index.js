import Menu from "./menu.js";
import Map1 from './map1.js';
import Map2 from './map2.js';
import Map3 from './map3.js';
import Score from './score.js';
import EndMenu from './endMenu.js';

// Our game scene
var map1 = new Map1();
var menu = new Menu();
var map2 = new Map2();
var map3 = new Map3();
var score = new Score();
var endMenu = new EndMenu();



var config = {
	type: Phaser.AUTO,
	width: 800,
    height: 560,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    parent: 'sr',
    dom: {
        createContainer: true
    },
};

var game = new Phaser.Game(config);
console.log(config);

game.scene.add('menu',menu);
game.scene.add('map1',map1);
game.scene.add('map2',map2);
game.scene.add('map3',map3);
game.scene.add('score',score);
game.scene.add('endMenu',endMenu);

game.scene.start('menu');