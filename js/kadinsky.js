var camera, scene, renderer;

var material1, material2, geometry1, geometry2, cube1, cube2, group;

var keyMap = [];

function createObjects() {
	material1 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
	material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
	geometry1 = new THREE.BoxGeometry(50,50,50);
	geometry2 = new THREE.BoxGeometry(25,25,25);
	geometry2.translate(-25/2, -25/2, 0);

	cube1 = new THREE.Mesh(geometry1, material1);
	cube2 = new THREE.Mesh(geometry2, material2);
	cube1.position.set(0, 0, 0);
	cube2.position.set(-25/2, 25, 0);

	group = new THREE.Group();
	group.add(cube1);
	group.add(cube2);

	scene.add(group);
}

function createScene() {
	'use strict';

	scene = new THREE.Scene();

	scene.add(new THREE.AxesHelper(100));
}

function createCamera() {
	'use strict';

	camera = new THREE.OrthographicCamera(
		window.innerWidth/-2,
		window.innerWidth/2,
		window.innerHeight/2,
		window.innerHeight/-2,
		-1000,
		1000
	);

	return camera;
}

function doKeyPress() {
	'use strict';

	if (keyMap[81] == true || keyMap[113] == true) { // Q/q
		group.rotation.y += 0.01;
		// rodar o objeto todo para um lado
	}

	if (keyMap[87] == true || keyMap[119] == true) { // W/w
		group.rotation.y -= 0.01;
		// rodar o objeto todo para o lado oposto
	}

	if (keyMap[65] == true || keyMap[97] == true) { // A/a
		// rodar parte do objeto para um lado
	}

	if (keyMap[83] == true || keyMap[115] == true) { // S/s
		// rodar parte do objeto para o lado oposto
	}

	if (keyMap[90] == true || keyMap[122] == true) { // Z/z
		// rodar unico objeto para o lado oposto
	}

	if (keyMap[88] == true || keyMap[120] == true) { // X/x
		// rodar unico objeto para o lado oposto
	}

	if (keyMap[37] == true) { // left
		group.position.x -= 1;
	}

	if (keyMap[38] == true) { // up
		group.position.y += 1;
	}

	if (keyMap[39] == true) { // right
		group.position.x += 1;
	}

	if (keyMap[40] == true) { // down
		group.position.y -= 1;
	}

	if (keyMap[68] == true || keyMap[100] == true) { // D/d
		group.position.z += 1;
	}

	if (keyMap[67] == true || keyMap[99] == true) { // C/c
		group.position.z -= 1;
	}
}

function onKeyDown(event) {
	var code = event.keyCode;
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
			camera.position.x = 0;
			camera.position.y = 0;
			camera.position.z = 1;
			camera.lookAt(0, 0, 0);
			break;
		case 50: // 2
			camera.position.x = 0;
			camera.position.y = 1;
			camera.position.z = 0;
			camera.lookAt(0, 0, 0);
			break;
		case 51: // 3
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
	if (flag == false) {
		keyMap[code] = true;
	}
}

function onKeyUp(event) {
	var code = event.keyCode;
	keyMap[code] = false;
}

function onResize() {
	'use strict';

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
	'use strict';

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
	'use strict';

	doKeyPress();

	renderer.render(scene, camera);

	requestAnimationFrame(animate);
};
