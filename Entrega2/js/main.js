'use strict';

let R = 200;
let distance = 1.2*R;
let H = R/11; // R/12 < H < R/10
let C = R/22; // R/24 < C < R/20

let clock = new THREE.Clock();
let delta = 0;

let keyHandler = new KeyHandler();

let planet = new Planet(R);

let spaceship = new Spaceship(H, distance, planet);
//spaceship.getSpaceship().scale.set(3,3,3); //TODO remover

let garbage = new Garbage(C, distance, planet);

let collision = new Collision(garbage);

let sceneCreator = new SceneCreator();
let scene = sceneCreator.scene;
let camera = scene.activeCamera;
let axes = sceneCreator.axes;
scene.add(planet.getPlanet());
scene.add(spaceship.getSpaceship());
scene.add(collision.h1, collision.h2, collision.h3, collision.h4);
// TODO Remove
const helper = new THREE.CameraHelper(spaceship.camera);
scene.add(helper);

let renderer;

function onResize() {
	renderer.setSize(window.innerWidth, window.innerHeight);

	if (window.innerHeight > 0 && window.innerWidth > 0) {
		if (camera === sceneCreator.cameras[0]){
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
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});

	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	window.addEventListener("keydown", keyHandler.onKeyDown.bind(keyHandler), true);
	window.addEventListener("keyup", keyHandler.onKeyUp.bind(keyHandler), true);
	window.addEventListener("resize", onResize);
}

function update(delta) {
	keyHandler.doKeyPress(delta);
	spaceship.getSpaceship().lookAt(planet.getPlanet().position);
	spaceship.setDirection();
	let nosePosition = new THREE.Vector3();
	spaceship.nose.getWorldPosition(nosePosition);
	spaceship.camera.lookAt(nosePosition.x, nosePosition.y, nosePosition.z);
}

function animate() {
	delta = clock.getDelta();

	update(delta);

	renderer.render(scene, camera);

	requestAnimationFrame(animate);
}
