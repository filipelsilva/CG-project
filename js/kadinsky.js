'use strict';

let camera, scene, renderer;
let material, geometry, group;
const objects = [];
const keyMap = [];

function createObjects() {
	material = new THREE.MeshBasicMaterial({ color: 0xffb700 });
	geometry = new THREE.BoxGeometry(110,110,110);
	objects.push(new THREE.Mesh(geometry, material));

	objects[0].position.set(0, 0, 0);
	objects[0].rotation.z = Math.PI /4;
	objects[0].rotation.x = Math.PI /4;

	group = new THREE.Group();
	scene.add(group);

	objects.map(obj => {
		group.add(obj);
	});
}

function createScene() {
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x020122 );
	scene.add(new THREE.AxesHelper(100));
}

function createCamera() {
	camera = new THREE.OrthographicCamera(
		window.innerWidth/-2,
		window.innerWidth/2,
		window.innerHeight/2,
		window.innerHeight/-2,
		-1000,
		1000
	);
}

function doKeyPress() {
	if (keyMap[81] || keyMap[113]) { // Q/q
		group.rotation.y += 0.01;
		// rodar o objeto todo para um lado
	}

	if (keyMap[87] || keyMap[119]) { // W/w
		group.rotation.y -= 0.01;
		// rodar o objeto todo para o lado oposto
	}

	if (keyMap[65] || keyMap[97]) { // A/a
		// rodar parte do objeto para um lado
	}

	if (keyMap[83] || keyMap[115]) { // S/s
		// rodar parte do objeto para o lado oposto
	}

	if (keyMap[90] || keyMap[122]) { // Z/z
		// rodar unico objeto para o lado oposto
	}

	if (keyMap[88] || keyMap[120]) { // X/x
		// rodar unico objeto para o lado oposto
	}

	if (keyMap[37]) { // left
		group.position.x -= 1;
	}

	if (keyMap[38]) { // up
		group.position.y += 1;
	}

	if (keyMap[39]) { // right
		group.position.x += 1;
	}

	if (keyMap[40]) { // down
		group.position.y -= 1;
	}

	if (keyMap[68] || keyMap[100]) { // D/d
		group.position.z += 1;
	}

	if (keyMap[67] || keyMap[99]) { // C/c
		group.position.z -= 1;
	}
}

function doOneTimeEvent(code) {
	var flag = false;
	switch (code) {
		case 69:  // E
		case 101: // e
			flag = true;
			scene.traverse(function (node) {
				if (node instanceof THREE.AxesHelper) {
					node.visible = !node.visible;
				}
			});
		break;
		case 49: // 1
			flag = true;
			camera.position.x = 0;
			camera.position.y = 0;
			camera.position.z = 1;
			camera.lookAt(0, 0, 0);
		break;
		case 50: // 2
			flag = true;
			camera.position.x = 0;
			camera.position.y = 1;
			camera.position.z = 0;
			camera.lookAt(0, 0, 0);
		break;
		case 51: // 3
			flag = true;
			camera.position.x = 1;
			camera.position.y = 0;
			camera.position.z = 0;
			camera.lookAt(0, 0, 0);
		break;
		case 52: // 4
			scene.traverse(function (node) {
				if (node instanceof THREE.Mesh) {
					node.material.wireframe = !node.material.wireframe;
				}
			});
		break;
	}
	return flag;
}

function onKeyDown(event) {
	const code = event.keyCode;
	if (!doOneTimeEvent(code)) {
		keyMap[code] = true;
	}
}

function onKeyUp(event) {
	const code = event.keyCode;
	keyMap[code] = false;
}

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

	createScene();
	createCamera();
	createObjects();

	window.addEventListener("keydown", onKeyDown, true);
	window.addEventListener("keyup", onKeyUp, true);
	window.addEventListener("resize", onResize);
}

function animate() {
	doKeyPress();

	renderer.render(scene, camera);

	requestAnimationFrame(animate);
};
