var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(1280, 720, {backgroundColor: 0x000000});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var pship = new PIXI.Sprite(PIXI.Texture.fromImage("PlayerShip.png"));
var eship1 = new PIXI.Sprite(PIXI.Texture.fromImage("EnemyShip.png"));
var eship2 = new PIXI.Sprite(PIXI.Texture.fromImage("EnemyShip.png"));
var eship3 = new PIXI.Sprite(PIXI.Texture.fromImage("EnemyShip.png"));



pship.position.x = 300;
pship.position.y = 300;
eship1.position.x = pship.position.x;
eship1.position.y = pship.position.y - 200;
eship2.position.x = pship.position.x - 100;
eship2.position.y = pship.position.y - 200;
eship3.position.x = pship.position.x + 100;
eship3.position.y = pship.position.y - 200;
stage.addChild(pship);
stage.addChild(eship1);
stage.addChild(eship2);
stage.addChild(eship3);


function keydownEventHandler(e) {

  if (e.keyCode == 87) { 
  var up = pship.position.y - 10;
  createjs.Tween.get(pship.position).to({x: pship.position.x, y: up}, 500);
  }

  if (e.keyCode == 83) { 
  var down =  pship.position.y + 10;
  createjs.Tween.get(pship.position).to({x: pship.position.x, y: down}, 500);
  }

  if (e.keyCode == 65) { 
    createjs.Tween.get(pship).to({rotation:-1}, 500);
  }

  if (e.keyCode == 68) { 
    createjs.Tween.get(pship).to({rotation:1}, 500);
  }
}


document.addEventListener('keydown', keydownEventHandler);


function animate() {
  requestAnimationFrame(animate);
  renderer.render(stage);
}
animate();