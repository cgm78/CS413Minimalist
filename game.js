import * as PIXI from 'pixi.js'

var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x330033});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var pship = new PIXI.Sprite(PIXI.Texture.fromImage("PlayerShip.png"));

pship.health = 100;

pship.position.x = 100;
pship.position.y = 100;
stage.addChild(pship);

function keydownEventHandler(e) {

  if (e.keyCode == 87) { // W key
    hero.position.y -= 10;
  }

  if (e.keyCode == 83) { // S key
    hero.position.y += 10;
  }

  if (e.keyCode == 65) { // A key
    hero.position.x -= 10;
  }

  if (e.keyCode == 68) { // D key
    hero.position.x += 10;
  }
}

document.addEventListener('keydown', keydownEventHandler);


function animate() {
  requestAnimationFrame(animate);
  renderer.render(stage);
}
animate();
