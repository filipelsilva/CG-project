'use strict';

let id;
let clock = new THREE.Clock();
let delta = 0;
let isPaused = false;

let renderer;

let keyHandler = new KeyHandler();
let sceneCreator = new SceneCreator();
let objectCreator;

let scene = sceneCreator.scene;
let perspectiveCamera = sceneCreator.perspectiveCamera;
let orthographicCamera = sceneCreator.orthographicCamera;

let camera = perspectiveCamera;

let group;
let palanque;
let floor;

function initObjects() {
	scene.remove(group);
	scene.remove(palanque);
	scene.remove(floor);
	scene.remove(sceneCreator.spotlights);

	objectCreator = new ObjectCreator();

	group = objectCreator.group;
	palanque = objectCreator.palanque;
	floor = objectCreator.floor;

	scene.add(palanque);
	scene.add(floor);
	scene.add(group);

	sceneCreator.spotlights = sceneCreator.createSpotlights(group);
}

// Pause menu
let scenePause = new THREE.Scene();
let cameraPause = new THREE.OrthographicCamera(
	window.innerWidth/-2,
	window.innerWidth/2,
	window.innerHeight/2,
	window.innerHeight/-2,
	-1000,
	1000
);

let light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1000, 1000);
light.castShadow = true;
light.target = scenePause;
scenePause.add(light);

scenePause.add(cameraPause);
let texture = new THREE.TextureLoader().load("media/pause_menu.png");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

let material = new THREE.MeshStandardMaterial({map: texture, transparent: true});
let geometry = new THREE.PlaneGeometry(910, 512);

let pauseMenu = new THREE.Mesh(geometry, material);

scenePause.add(pauseMenu);
cameraPause.lookAt(scenePause.position);
// End of pause menu

function onResize() {
	texture.updateMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);

	if (window.innerHeight > 0 && window.innerWidth > 0) {
		if (camera === sceneCreator.orthographicCamera) {
			camera.left = window.innerWidth/-2;
			camera.right = window.innerWidth/2;
			camera.top = window.innerHeight/2;
			camera.bottom = window.innerHeight/-2;
		}
		else{
			camera.aspect = window.innerWidth / window.innerHeight;
		}
		camera.updateProjectionMatrix();
	}
}

function init() {
	initObjects();

	renderer = new THREE.WebGLRenderer({
		alpha: true,
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

	keyHandler.doKeyPress(delta, group);

	render();

	requestAnimationFrame(animate);
}
