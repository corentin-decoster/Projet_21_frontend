/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bullet.js":
/*!***********************!*
  !*** ./src/bullet.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Bullet\n/* harmony export */ });\nclass Bullet extends Phaser.Physics.Arcade.Sprite {\r\n    \r\n    constructor(scene,x,y){\r\n        super(scene,x,y,'bullet');\r\n    }\r\n\r\n    //Allows to shoot a bullet\r\n    fire(x,y,faceRight){\r\n        //We want to fire straight bullets\r\n        this.body.setAllowGravity(false);\r\n        \r\n\r\n        //We move the bullet onto the character and activate it + making it visible\r\n        this.body.reset(x,y);\r\n        this.setActive(true);\r\n        this.setVisible(true);\r\n\r\n        //Determining if the bullet has to go to the left side or the right side\r\n        if(faceRight){\r\n            this.setVelocityX(500);\r\n        }else if(!faceRight){\r\n            this.setVelocityX(-500);\r\n        }\r\n    }\r\n\r\n    //Function that allows to update the number of usable bullets we have\r\n    //Explaination :\r\n    //We will still have 30 bullets but once it reaches the end of the screen, \r\n    //the bullet is inactive and invisible which allows the bullet to be shooted again\r\n    preUpdate(time, delta){\r\n        super.preUpdate(time, delta);\r\n\r\n        if(this.x >= 800 || this.x <= 0){\r\n            this.setActive(false);\r\n            this.setVisible(false);\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://Projet_21_frontend/./src/bullet.js?");

/***/ }),

/***/ "./src/bulletGroup.js":
/*!****************************!*
  !*** ./src/bulletGroup.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ BulletGroup\n/* harmony export */ });\n/* harmony import */ var _bullet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\r\nclass BulletGroup extends Phaser.Physics.Arcade.Group{\r\n    constructor(scene){\r\n        super(scene.physics.world, scene);\r\n\r\n        //Create 30 initial bullets\r\n        this.createMultiple({\r\n            classType : _bullet_js__WEBPACK_IMPORTED_MODULE_0__.default,\r\n            frameQuantity : 30,\r\n            active : false,\r\n            visible : false,\r\n            key : 'bullet',\r\n            runChildUpdate : true \r\n        })\r\n    }\r\n\r\n    \r\n    shootBullet(x,y,faceRight){\r\n        //Take a bullet from the \"inactive\" ones\r\n        const bullet = this.getFirstDead(false);\r\n        //Shoot if available\r\n        if(bullet){\r\n            bullet.fire(x,y,faceRight);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://Projet_21_frontend/./src/bulletGroup.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*
  !*** ./src/enemy.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Enemy\n/* harmony export */ });\nclass Enemy extends Phaser.Physics.Arcade.Sprite {\r\n    \r\n    constructor(scene,x,y){\r\n        super(scene,x,y,'ennemy');\r\n    }\r\n\r\n    spawn(x,y){\r\n        this.body.reset(x,y);\r\n        this.setActive(true);\r\n        this.setVisible(true);\r\n    }\r\n\r\n   \r\n}\r\n\r\n\n\n//# sourceURL=webpack://Projet_21_frontend/./src/enemy.js?");

/***/ }),

/***/ "./src/enemyGroup.js":
/*!***************************!*
  !*** ./src/enemyGroup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ EnemyGroup\n/* harmony export */ });\n/* harmony import */ var _enemy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy.js */ \"./src/enemy.js\");\n\r\nclass EnemyGroup extends Phaser.Physics.Arcade.Group{\r\n    constructor(scene){\r\n        super(scene.physics.world, scene);\r\n\r\n        //Create 30 initial bullets\r\n        this.createMultiple({\r\n            classType : _enemy_js__WEBPACK_IMPORTED_MODULE_0__.default,\r\n            frameQuantity : 5,\r\n            active : false,\r\n            visible : false,\r\n            key : 'enemy',\r\n            runChildUpdate : true \r\n        })\r\n    }\r\n\r\n   \r\n    \r\n}\n\n//# sourceURL=webpack://Projet_21_frontend/./src/enemyGroup.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bullet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n/* harmony import */ var _bulletGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bulletGroup.js */ \"./src/bulletGroup.js\");\n/* harmony import */ var _enemy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemy.js */ \"./src/enemy.js\");\n/* harmony import */ var _enemyGroup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enemyGroup.js */ \"./src/enemyGroup.js\");\n\r\n\r\n\r\n\r\nclass GameScene extends Phaser.Scene {\r\n    constructor() {\r\n        super();\r\n        this.player;\r\n        this.cursors;\r\n        this.faceRight;\r\n        this.ennemyFaceRight;\r\n        this.PlayerBulletGroup;\r\n        this.EnnemyBulletGroup;\r\n        this.bulletDelay;\r\n        this.ennemy;\r\n        this.ennemy1;\r\n        this.ennemy2;\r\n        this.ennemy3;\r\n        this.ennemy4;\r\n        this.ennemy5;\r\n        this.enemyGroup;\r\n        this.timerText;\r\n        this.timerTimeEvent;\r\n        this.completedTime;\r\n        this.playedTime;\r\n        this.inGameBoolean;\r\n        this.ennemyAlive;\r\n    }\r\n\r\n    preload() {\r\n        this.load.image('tempBackground', 'assets/Map/Wasteland_Sky.png');\r\n        this.load.spritesheet('gunner', 'assets/TeamGunner/CHARACTER_SPRITES/Black/Gunner_Black_Full_Line2.png', { frameWidth: 28, frameHeight: 35 });\r\n        this.load.image('bullet', 'assets/TeamGunner/EXTRAS/bullet.png');\r\n        this.load.spritesheet('ennemy','assets/TeamGunner/CHARACTER_SPRITES/Red/Gunner_Red_idle.png', { frameWidth: 48, frameHeight: 48 });\r\n\r\n        //map loading\r\n        this.load.image('map_assets','assets/Map/Wasteland.png');\r\n        this.load.tilemapTiledJSON('map1','assets/Map/map_wasteland_js_ok.json');\r\n    }\r\n\r\n    create() {\r\n        //Creating the backgroung, the character and the animations\r\n        this.createBackground();\r\n        this.createCharacter();\r\n        this.createAnims();\r\n\r\n        \r\n        //Creating the Map and layer + collision between player and layer\r\n        this.createLvlOneMap();\r\n        this.createLvlOneTileSet();\r\n        this.createLvlOnePlateform();\r\n        this.physics.add.collider(this.player, this.mapLayer);\r\n\r\n        //Set up Timer\r\n        this.SetUpTimer();\r\n        //Set up a key to stop timer for testing purpose\r\n        this.input.keyboard.on('keydown_W', this.stopAndSaveTimer, this);\r\n\r\n        //Creating ennemies and their animation + bullet of the ennemy\r\n        \r\n       \r\n        \r\n        \r\n        //Creating a bulletGroup which will be the ammunitions available for the character to shoot\r\n        this.PlayerBulletGroup = new _bulletGroup_js__WEBPACK_IMPORTED_MODULE_1__.default(this);\r\n        //this.physics.add.group({ classType: Bullet, runChildUpdate: true });\r\n        this.createEnnemy(450,0);\r\n        this.physics.add.collider(this.ennemy, this.PlayerBulletGroup,this.enemyHit,null,this);\r\n        //this.physics.add.collider(this.enemyGroup, this.PlayerBulletGroup,this.enemyHit,null,this);\r\n        //this.physics.add.overlap(this.ennemy, this.PlayerBulletGroup, this.enemyHit, null, this);\r\n\r\n        //Adding a delay on the fire rate\r\n        this.createDelay();\r\n\r\n        //Adding cursors to move the character\r\n        this.cursors = this.input.keyboard.createCursorKeys();\r\n        //For debugging purposes\r\n        console.log(this);\r\n    }\r\n\r\n    update() {\r\n        //Constantly update to take care of user's input\r\n        //timer test\r\n        //User can make his character move and shoot\r\n        this.movements();\r\n        if(this.ennemyAlive){\r\n            this.ennemyMovements();\r\n        }\r\n            \r\n        this.shoot();\r\n     //   this.Ennemyshoot(); \r\n\r\n        //Check the delay for the firerate \r\n        this.checkingDelay();\r\n    }\r\n\r\n    \r\n\r\n    //Add the background\r\n    createBackground(){\r\n        this.add.image(config.width / 2, config.height / 2, 'tempBackground');\r\n    }\r\n\r\n    //Add the character and set up some variables\r\n    createCharacter(){\r\n        this.player = this.physics.add.sprite(config.width / 2, config.height / 2, 'gunner');\r\n        this.faceRight = true;\r\n        this.player.setCollideWorldBounds(true);\r\n    }\r\n\r\n    //Add first level\r\n    createLvlOneMap(){\r\n        this.map=this.make.tilemap({key: 'map1'});\r\n    }\r\n    createLvlOneTileSet(){\r\n        this.tileset=this.map.addTilesetImage('map_assets_js','map_assets');\r\n    }\r\n    createLvlOnePlateform(){\r\n        this.mapLayer=this.map.createStaticLayer(0,this.tileset,0,0);\r\n        this.mapLayer.setCollisionByExclusion([-1]);\r\n        console.log(this.mapLayer);\r\n        \r\n    }\r\n\r\n    createEnnemy(x,y){\r\n        this.ennemy = this.physics.add.sprite(x ,y,'ennemy');\r\n        this.faceRight = true;\r\n        this.ennemy.setCollideWorldBounds(true);\r\n        this.physics.add.collider(this.ennemy, this.mapLayer);\r\n        //this.physics.add.collider(this.ennemy, Bullet.type);\r\n        this.ennemyAlive=true;\r\n        this.createAnimsEnnemy();   \r\n    }\r\n\r\n    //Add the bulletDelay and set it up\r\n    createDelay(){\r\n        this.bulletDelay = fireRate;\r\n    }\r\n\r\n    //Check if the bulletDelay is at the fireRate and ++ if not\r\n    checkingDelay(){\r\n        if(this.bulletDelay <= fireRate-1){\r\n            this.bulletDelay++;\r\n        }\r\n    }\r\n\r\n    //Take care of all possible movements done by the character \r\n    //Including : left - right - jump\r\n    //\r\n    //Animations are also displayed\r\n    movements(){\r\n        if (this.cursors.right.isDown) {\r\n            this.faceRight = true;\r\n            this.player.setVelocityX(160);\r\n            if (this.player.body.blocked.down)\r\n                this.player.anims.play('right', true);\r\n        }\r\n        else if (this.cursors.left.isDown) {\r\n            this.faceRight = false;\r\n            this.player.setVelocityX(-160);\r\n            if (this.player.body.blocked.down)\r\n                this.player.anims.play('left', true);\r\n        }\r\n        else {\r\n            this.player.setVelocityX(0);\r\n\r\n            if (this.faceRight)\r\n                this.player.anims.play('idleRight', true);\r\n            else\r\n                this.player.anims.play('idleLeft', true);\r\n        }\r\n\r\n        if (this.cursors.up.isDown) {\r\n            if (this.player.body.blocked.down) \r\n                this.player.setVelocityY(-250);\r\n        }\r\n\r\n        if(!this.player.body.blocked.down){\r\n            if (this.faceRight)\r\n                this.player.anims.play('jumpRight', true);\r\n            else\r\n                this.player.anims.play('jumpLeft', true);\r\n        }\r\n    }\r\n\r\n    ennemyMovements(){\r\n        if (this.player.x - this.ennemy.x > 0)\r\n        {           \r\n           this.ennemy.scaleX = 1;\r\n           this.ennemyFaceRight = true;\r\n            \r\n        } else {\r\n            this.ennemy.scaleX = -1;\r\n            this.ennemyFaceRight = false;\r\n        }\r\n        if(this.ennemyAlive){\r\n            this.ennemy.anims.play('idleEnnemy', () => {\r\n                this.postclean();\r\n            });\r\n        }\r\n            \r\n        \r\n    }\r\n\r\n    //Allows the character to shoot with SPACEBAR\r\n    shoot() {\r\n        if (this.cursors.space.isDown && this.bulletDelay == fireRate) {\r\n            this.PlayerBulletGroup.shootBullet(this.player.x, this.player.y, this.faceRight);\r\n            this.bulletDelay = 0;\r\n        }\r\n    }\r\n\r\n    Ennemyshoot(){\r\n   //      this.EnnemyBulletGroup.shootBullet(this.ennemy.x, this.ennemy.y,this.ennemyFaceRight);\r\n   //      this.bulletDelay = 0;\r\n    }\r\n    enemyHit(ennemy,bullet){\r\n        console.log(\"ennemy hit\");\r\n        ennemy.destroy();\r\n        bullet.destroy();\r\n        this.ennemyAlive=false;\r\n        this.stopAndSaveTimer();\r\n        \r\n    }\r\n\r\n    //Create all the animations needed for the player\r\n    createAnims(){\r\n        this.anims.create({\r\n            key: 'left',\r\n            frames: this.anims.generateFrameNumbers('gunner', { start: 14, end: 19 }),\r\n            frameRate: 10\r\n        });\r\n\r\n        this.anims.create({\r\n            key: 'right',\r\n            frames: this.anims.generateFrameNumbers('gunner', { start: 20, end: 25 }),\r\n            frameRate: 10\r\n        });\r\n\r\n        this.anims.create({\r\n            key: 'idleRight',\r\n            frames: this.anims.generateFrameNumbers('gunner', { start: 0, end: 4 }),\r\n            frameRate: 10\r\n        });\r\n\r\n        this.anims.create({\r\n            key: 'idleLeft',\r\n            frames: this.anims.generateFrameNumbers('gunner', { start: 5, end: 9 }),\r\n            frameRate: 10\r\n        });\r\n\r\n        this.anims.create({\r\n            key: 'jumpRight',\r\n            frames: this.anims.generateFrameNumbers('gunner', { start: 10, end: 11 }),\r\n            frameRate: 10\r\n        });\r\n\r\n        this.anims.create({\r\n            key: 'jumpLeft',\r\n            frames: this.anims.generateFrameNumbers('gunner', { start: 12, end: 13 }),\r\n            frameRate: 10\r\n        });\r\n    }\r\n\r\n    //Create all the animations needed for the ennemy\r\n    createAnimsEnnemy(){\r\n\r\n        this.anims.create({\r\n            key: 'idleEnnemy',\r\n            frames: this.anims.generateFrameNumbers('ennemy', { start: 0, end: 4 }),\r\n            frameRate: 10\r\n        });\r\n      \r\n     \r\n    }\r\n\r\n    //handling the timer\r\n    SetUpTimer(){\r\n        this.inGameBoolean=true;\r\n        this.playedTime = 0;\r\n\r\n        this.timerText = this.add.text(32, 32, 'Timer: ' + this.formatTime(this.playedTime));\r\n\r\n        // Each 1000 ms call onEvent\r\n        this.timerTimeEvent= this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });\r\n        /*\r\n        this.timerText = this.add.text(32, 32);\r\n    \r\n        // Each 1000 ms call onEvent\r\n        //timerTimeEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });\r\n        this.timerTimeEvent = this.time.delayedCall(3000, this.onEvent, [], this);\r\n        */\r\n    }\r\n    formatTime(seconds){\r\n        //from phaser tutorial method to formate time \r\n        var minutes = Math.floor(seconds/60);\r\n        // Seconds\r\n        var partInSeconds = seconds%60;\r\n        // Adds left zeros to seconds\r\n        partInSeconds = partInSeconds.toString().padStart(2,'0');\r\n        // Returns formated time\r\n        return `${minutes}:${partInSeconds}`;\r\n    }\r\n    onEvent(){\r\n        if(this.inGameBoolean===true){\r\n            this.playedTime += 1; // One second\r\n            this.timerText.setText('Timer: ' + this.formatTime(this.playedTime));\r\n        }else{\r\n            \r\n        }\r\n    }\r\n\r\n    stopAndSaveTimer(){\r\n        this.inGameBoolean=false;\r\n        this.completedTime=this.playedTime;\r\n    }\r\n    \r\n}\r\n\r\n\r\n\r\nconst config = {\r\n    type: Phaser.AUTO,\r\n    width: 800,\r\n    height: 560,\r\n    physics: {\r\n        default: 'arcade',\r\n        arcade: {\r\n            gravity: { y: 300 },\r\n            debug: false\r\n        }\r\n    },\r\n    scene: GameScene\r\n};\r\n\r\n//Define all constants\r\nconst fireRate = 10;\r\n\r\nconst game = new Phaser.Game(config);\r\n\r\n\n\n//# sourceURL=webpack://Projet_21_frontend/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;