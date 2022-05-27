'use strict';

let R = 200;
let distance = 1.2*R;
let H = R/11; // R/12 < H < R/10
let C = R/22; // R/24 < C < R/20

let clock = new THREE.Clock();
let delta = 0;

let keyHandler = new KeyHandler();
let sceneCreator = new SceneCreator();

let scene = sceneCreator.scene;
let camera = sceneCreator.camera;
let axes = sceneCreator.axes;

let planet = new Planet(R);
let spaceship = new Spaceship(H, distance);

scene.add(planet.getPlanet());
scene.add(spaceship.getSpaceship());
spaceship.getSpaceship().scale.set(3,3,3);

let renderer;

function onResize() {
	renderer.setSize(window.innerWidth, window.innerHeight);

	if (window.innerHeight > 0 && window.innerWidth > 0) {
		camera.left = window.innerWidth/-2;
		camera.right = window.innerWidth/2;
		camera.top = window.innerHeight/2;
		camera.bottom = window.innerHeight/-2;
		camera.updateProjectionMatrix();
	}
}

function init() {
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});

	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	window.addEventListener("keydown", keyHandler.onKeyDown.bind(keyHandler), true);
	window.addEventListener("keyup", keyHandler.onKeyUp.bind(keyHandler), true);
	window.addEventListener("resize", onResize);
}

function animate(current) {
	delta = clock.getDelta();

	keyHandler.doKeyPress(delta);

	renderer.render(scene, camera);

	requestAnimationFrame(animate);
}
