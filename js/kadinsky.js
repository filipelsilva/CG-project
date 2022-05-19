'use strict';

let last = 0;
let axes = new THREE.AxesHelper(100);
let camera, scene, renderer;
let material, geometry, group;
let articulate;
const keyMap = [];

function rotateAroundPoint(object, point, axis, rotation) {
	object.position.sub(point);
	object.position.applyAxisAngle(axis, rotation);
	object.position.add(point);
	object.rotateOnAxis(axis, rotation);
}

function getObjectCenterPoint(mesh) {
	let center = new THREE.Vector3();
	let geometry = mesh.geometry;
	geometry.computeBoundingBox();
	geometry.boundingBox.getCenter(center);
	return center;
}

function createObjects() {
	let objects = [];
	let tmp;
	group = new THREE.Group();

	material = new THREE.MeshBasicMaterial({ color: 0xffb700 });
	geometry = new THREE.BoxGeometry(110,110,110);
	tmp = new THREE.Mesh(geometry, material);
	objects.push(tmp);
	articulate = tmp;

	material = new THREE.MeshBasicMaterial({ color: 0xffb700 });
	geometry = new THREE.BoxGeometry(110,440,110);
	tmp = new THREE.Mesh(geometry, material);
	objects.push(tmp);
	articulate.add(tmp);

	material = new THREE.MeshBasicMaterial({ color: 0xffb700 });
	geometry = new THREE.BoxGeometry(440,110,110);
	tmp = new THREE.Mesh(geometry, material);
	objects.push(tmp);
	articulate.add(tmp);

	objects[0].position.set(50, 0, 0);
	objects[1].position.set(0, objects[0].geometry.parameters.height * 3, 0);
	objects[2].position.set(objects[0].geometry.parameters.height, objects[0].geometry.parameters.height * 3, 0);
	objects[0].add(objects[1]);
	objects[1].add(objects[2]);

	group.add(articulate);
	scene.add(group);
}

function createScene() {
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x020122);
	scene.add(axes);
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

function doKeyPress(delta) {
	if (keyMap[81] || keyMap[113]) { // Q/q
		// rodar o objeto todo para um lado
		articulate.rotation.z += 0.001 * delta;
	}

	if (keyMap[87] || keyMap[119]) { // W/w
		// rodar o objeto todo para o lado oposto
		articulate.rotation.z -= 0.001 * delta;
	}

	if (keyMap[65] || keyMap[97]) { // A/a
		// rodar parte do objeto para um lado
		rotateAroundPoint(
			articulate.children[0],
			getObjectCenterPoint(articulate),
			new THREE.Vector3(1, 0, 0),
			0.001 * delta
		);
	}

	if (keyMap[83] || keyMap[115]) { // S/s
		// rodar parte do objeto para o lado oposto
		rotateAroundPoint(
			articulate.children[0],
			getObjectCenterPoint(articulate),
			new THREE.Vector3(1, 0, 0),
			-0.001 * delta
		);
	}

	if (keyMap[90] || keyMap[122]) { // Z/z
		// rodar unico objeto para o lado oposto
		rotateAroundPoint(
			articulate.children[0].children[0],
			getObjectCenterPoint(articulate.children[0]),
			new THREE.Vector3(0, 1, 0),
			0.001 * delta
		);
	}

	if (keyMap[88] || keyMap[120]) { // X/x
		// rodar unico objeto para o lado oposto
		rotateAroundPoint(
			articulate.children[0].children[0],
			getObjectCenterPoint(articulate.children[0]),
			new THREE.Vector3(0, 1, 0),
			-0.001 * delta
		);
	}

	if (keyMap[37]) { // left
		articulate.position.x -= 1 * delta;
	}

	if (keyMap[38]) { // up
		articulate.position.y += 1 * delta;
	}

	if (keyMap[39]) { // right
		articulate.position.x += 1 * delta;
	}

	if (keyMap[40]) { // down
		articulate.position.y -= 1 * delta;
	}

	if (keyMap[68] || keyMap[100]) { // D/d
		articulate.position.z += 1 * delta;
	}

	if (keyMap[67] || keyMap[99]) { // C/c
		articulate.position.z -= 1 * delta;
	}
}

function doOneTimeEvent(code) {
	var flag = false;
	switch (code) {
		case 69:  // E
		case 101: // e
			flag = true;
			axes.visible = !axes.visible;
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
			flag = true;
			function changeWireframe(listMesh) {
				listMesh.children.map(child => {
					child.material.wireframe = !child.material.wireframe;
					if (child.children.length != 0) {
						changeWireframe(child);
					}
				});
			}
			changeWireframe(group);
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

function animate(current) {
	const delta = current - last;
	last = current;

	doKeyPress(delta);

	renderer.render(scene, camera);

	requestAnimationFrame(animate);
};
