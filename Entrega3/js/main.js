'use strict';

let id;
let clock = new THREE.Clock();
let delta = 0;

let keyHandler = new KeyHandler();
let sceneCreator = new SceneCreator();
let objectCreator = new ObjectCreator();

let scene = sceneCreator.scene;
let camera = sceneCreator.camera;
let axes = sceneCreator.axes;

let group = objectCreator.group;

let palanque = objectCreator.palanque;
let floor = objectCreator.floor;
scene.add(palanque);
scene.add(floor);
scene.add(group);

sceneCreator.spotlights = sceneCreator.createSpotlights(group);

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

function animate() {
	delta = clock.getDelta();

	keyHandler.doKeyPress(delta);

	renderer.render(scene, camera);

	id = requestAnimationFrame(animate);
}
