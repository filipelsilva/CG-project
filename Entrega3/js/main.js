'use strict';

let id;
let clock = new THREE.Clock();
let delta = 0;
let isPaused = false;

let renderer;

let keyHandler = new KeyHandler();
let sceneCreator = new SceneCreator();
let objectCreator = new ObjectCreator();

let scene = sceneCreator.scene;
let camera = sceneCreator.camera;
// let scenePause = sceneCreator.scenePause;
// let cameraPause = sceneCreator.cameraPause;
let scenePause = new THREE.Scene();
let cameraPause = new THREE.OrthographicCamera(
	window.innerWidth/-2,
	window.innerWidth/2,
	window.innerHeight/2,
	window.innerHeight/-2,
	-1000,
	1000
);
scenePause.add(cameraPause);

let group = objectCreator.group;

let palanque = objectCreator.palanque;
let floor = objectCreator.floor;
scene.add(palanque);
scene.add(floor);
scene.add(group);

let texture = new THREE.TextureLoader().load("media/pause_menu.png");
let material = new THREE.MeshStandardMaterial({map: texture});
let geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);
let pauseMenu = new THREE.Mesh(geometry, material);
texture.repeat.set(1, 1);
scenePause.add(pauseMenu);

sceneCreator.spotlights = sceneCreator.createSpotlights(group);

function onResize() {
	texture.updateMatrix();
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

	renderer.autoClear = false;
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	window.addEventListener("keydown", keyHandler.onKeyDown.bind(keyHandler), true);
	window.addEventListener("keyup", keyHandler.onKeyUp.bind(keyHandler), true);
	window.addEventListener("resize", onResize);
}

function render() {
	renderer.clear();
	renderer.render(scene, camera);

	if (isPaused) {
		renderer.clearDepth();
		renderer.render(scenePause, cameraPause);
	}
}

function animate() {
	delta = clock.getDelta();

	keyHandler.doKeyPress(delta);

	render();

	requestAnimationFrame(animate);
}
