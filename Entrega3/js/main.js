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

let group = objectCreator.group;

let palanque = objectCreator.palanque;
let floor = objectCreator.floor;
scene.add(palanque);
scene.add(floor);
scene.add(group);

sceneCreator.spotlights = sceneCreator.createSpotlights(group);

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
let texture = new THREE.TextureLoader().load("media/pause_menu2.png");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

let material = new THREE.MeshStandardMaterial({map: texture, transparent: true});
let geometry = new THREE.PlaneGeometry(500, 500);

let pauseMenu = new THREE.Mesh(geometry, material);
// pauseMenu.position.y -= 400;

scenePause.add(pauseMenu);
cameraPause.lookAt(scenePause.position);
// End of pause menu

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

	keyHandler.doKeyPress(delta);

	render();

	requestAnimationFrame(animate);
}
