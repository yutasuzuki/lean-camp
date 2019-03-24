/**
 * particle
 */
import { _gsScope } from 'gsap/all';
import * as PIXI from 'pixi.js-legacy';
import { TweenMax } from 'gsap';

_gsScope.PIXI = PIXI;

const $windowWidth = window.parent.screen.width;
const $windowHeight = window.parent.screen.height;

PIXI.utils.skipHello(); // remove pixi message in console log

const app = new PIXI.Application($windowWidth, $windowHeight, {
  transparent: true,
  resolution: 1,
});

app.view.className = 'p-particle';

document.body.insertBefore(app.view, document.body.firstChild);

const particleCount = 56;
const particleColors = ['26a3ff', '13ce66', 'ff49db', 'af8dd1', '9162bf', 'ff7849', 'ffc82c'];
let particleSettings;

for (let i = 0; i < particleCount; i++) {
  particleSettings = {
    particleSize: 10,
    x: Math.floor(Math.random() * app.renderer.width),
    y: Math.floor(Math.random() * app.renderer.height / 4 * 3),
    scale: Math.floor(Math.random() * 3) / 3,
    alpha: 0.15,
    particleSpeed: Math.floor(Math.min(200, Math.random() * 1000)),
    color: particleColors[Math.floor(Math.random() * particleColors.length)],
  };
  createParticle(particleSettings);
}

function createParticle() {
  const graphic = new PIXI.Graphics();
  graphic.beginFill(`0x${particleSettings.color}`);
  graphic.drawCircle(0, 0, particleSettings.particleSize);
  graphic.endFill();

  // TEXTURE
  const texture = graphic.generateCanvasTexture();
  texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

  // SPRITE
  const particleSprite = new PIXI.Sprite(texture);
  particleSprite.interactive = true;
  particleSprite.blendMode = PIXI.BLEND_MODES.SCREEN;

  // SET POSITIONING
  TweenMax.set(particleSprite, {
    pixi: {
      x: particleSettings.x,
      y: particleSettings.y,
      scale: particleSettings.scale,
      alpha: particleSettings.alpha,
    },
  }, 1);

  TweenMax.to(particleSprite, particleSettings.particleSpeed, {
    pixi: {
      x: Math.floor(Math.random() * app.renderer.width),
      y: Math.floor(Math.random() * app.renderer.height),
    },
    ease: Power4.easeOut,
  }, 10);

  // ADD SPRITE TO STAGE
  app.stage.addChild(particleSprite);
}
