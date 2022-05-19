'use strict';

let camera, scene, renderer;
let material, geometry, group;
const objects = [];
const keyMap = [];

function rotateAroundPoint(object, point, axis, rotation){
	object.position.sub(point);
	object.position.applyAxisAngle(axis, rotation);
	object.position.add(point);
	object.rotateOnAxis(axis, rotation);
}

function getObjectCenterPoint(mesh) {
	var geometry = mesh.geometry;
	geometry.computeBoundingBox();
	var center = new THREE.Vector3();
	geometry.boundingBox.getCenter(center);
	return center;
}

function createObjects() {
	material = new THREE.MeshBasicMaterial({ color: 0xffb700 });
	geometry = new THREE.BoxGeometry(110,110,110);
	objects.push(new THREE.Mesh(geometry, material));

	material = new THREE.MeshBasicMaterial({ color: 0xffb700 });
	geometry = new THREE.BoxGeometry(110,440,110);
	objects.push(new THREE.Mesh(geometry, material));

	material = new THREE.MeshBasicMaterial({ color: 0xffb700 });
	geometry = new THREE.BoxGeometry(440,110,110);
	objects.push(new THREE.Mesh(geometry, material));

	objects[0].position.set(50, 0, 0);
	objects[1].position.set(0, objects[0].geometry.parameters.height * 3, 0);
	objects[2].position.set(objects[0].geometry.parameters.height, objects[0].geometry.parameters.height * 3, 0);
	objects[0].add(objects[1]);
	objects[1].add(objects[2]);

	scene.add(objects[0]);
	// objects[0] = new THREE.objects[0]();
	// scene.add(objects[0]);

	// objects.map(obj => {
	// 	objects[0].add(obj);
	// 	// scene.add(obj);
	// });

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
		// rodar o objeto todo para um lado
		objects[0].rotation.y += 0.01;
	}

	if (keyMap[87] || keyMap[119]) { // W/w
		// rodar o objeto todo para o lado oposto
		objects[0].rotation.y -= 0.01;
	}

	if (keyMap[65] || keyMap[97]) { // A/a
		// rodar parte do objeto para um lado
		rotateAroundPoint(
			objects[1],
			getObjectCenterPoint(objects[0]),
			new THREE.Vector3(1, 0, 0),
			0.01
		);
	}

	if (keyMap[83] || keyMap[115]) { // S/s
		// rodar parte do objeto para o lado oposto
		rotateAroundPoint(
			objects[1],
			getObjectCenterPoint(objects[0]),
			new THREE.Vector3(1, 0, 0),
			-0.01
		);
	}

	if (keyMap[90] || keyMap[122]) { // Z/z
		// rodar unico objeto para o lado oposto
		rotateAroundPoint(
			objects[2],
			getObjectCenterPoint(objects[1]),
			new THREE.Vector3(0, 1, 0),
			0.01
		);
	}

	if (keyMap[88] || keyMap[120]) { // X/x
		// rodar unico objeto para o lado oposto
		rotateAroundPoint(
			objects[2],
			getObjectCenterPoint(objects[1]),
			new THREE.Vector3(0, 1, 0),
			-0.01
		);
	}

	if (keyMap[37]) { // left
		objects[0].position.x -= 10;
	}

	if (keyMap[38]) { // up
		objects[0].position.y += 10;
	}

	if (keyMap[39]) { // right
		objects[0].position.x += 10;
	}

	if (keyMap[40]) { // down
		objects[0].position.y -= 10;
	}

	if (keyMap[68] || keyMap[100]) { // D/d
		objects[0].position.z += 10;
	}

	if (keyMap[67] || keyMap[99]) { // C/c
		objects[0].position.z -= 10;
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
