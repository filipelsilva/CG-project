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

let garbage = new Garbage(C);

let sceneCreator = new SceneCreator();
let scene = sceneCreator.scene;
let camera = scene.activeCamera;
let axes = sceneCreator.axes;

let renderer;
let group = new THREE.Group();	

group.add(garbage.h1);
group.add(garbage.h2);
group.add(garbage.h3);
group.add(garbage.h4);
group.add(planet.getPlanet());
group.add(spaceship.getSpaceship());
scene.add(group);

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
	if(!removed){
		let hToUse;
		if (removeH1 == true){
			hToUse = garbage.h1;
		}
		else if (removeH2 == true){
			hToUse = garbage.h2;
		}
		else if (removeH3 == true){
			hToUse = garbage.h3;
		}
		else if (removeH4 == true){
			hToUse = garbage.h4;
		}
		for (let i = toRemove.length-1; i >= 0; i--) {
			hToUse.remove(hToUse.children[toRemove[i]]);
		}
		removed = true;
	}
	keyHandler.doKeyPress(delta);
	spaceship.getSpaceship().lookAt(planet.getPlanet().position);
	spaceship.setDirection();
	let nosePosition = new THREE.Vector3();
	spaceship.nose.getWorldPosition(nosePosition);
	spaceship.camera.updateProjectionMatrix();
}

function animate() {
	delta = clock.getDelta();

	update(delta);

	renderer.render(scene, camera);

	requestAnimationFrame(animate);
}
