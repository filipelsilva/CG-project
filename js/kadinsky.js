'use strict';

let camera, scene, renderer;
let material, geometry, group;
const objects = [];
const keyMap = [];

function createObjects() {
	material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
	geometry = new THREE.ConeGeometry(50,200,70);
	objects.push(new THREE.Mesh(geometry, material));

	objects[0].position.set(-550, 250, -320);
	objects[0].rotation.z = -(Math.PI / 4) - (Math.PI /12);

	material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	geometry = new THREE.BoxGeometry(30,650,50);
	objects.push(new THREE.Mesh(geometry, material));

	objects[1].position.set(-500, 0, -100);
	objects[1].rotation.z = Math.PI / 24;

	material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
	geometry = new THREE.SphereGeometry(50, 20 ,20);
	objects.push(new THREE.Mesh(geometry, material));

	objects[2].position.set(-530, 120, 100);

	material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
	geometry = new THREE.ConeGeometry(50, 200, 4);
	objects.push(new THREE.Mesh(geometry, material));

	objects[3].position.set(-500, 0, -320);
	objects[3].rotation.z = (Math.PI / 4) * 2.5;
	objects[3].rotation.x =  Math.PI /50;

	material = new THREE.MeshBasicMaterial({ color: 0x24daf2 });
	geometry = new THREE.CylinderGeometry(15, 15, 650, 50);
	objects.push(new THREE.Mesh(geometry, material));

	objects[4].position.set(-320, -10, -200);
	objects[4].rotation.z = -(Math.PI / 4) * 1.4;

	material = new THREE.MeshBasicMaterial({ color: 0xff7300 });
	geometry = new THREE.BoxGeometry(125, 125, 125);
	objects.push(new THREE.Mesh(geometry, material));

	objects[5].position.set(-480,-225,150);
	objects[5].rotation.y = -Math.PI / 8;
	objects[5].rotation.z = -Math.PI / 24;

	material = new THREE.MeshBasicMaterial({ color: 0xffffff });
	geometry = new THREE.TorusGeometry(100,10, 30, 30);
	objects.push(new THREE.Mesh(geometry, material));

	objects[6].position.set(-215, 215, 0);

	material = new THREE.MeshBasicMaterial({ color: 0x000000 });
	geometry = new THREE.BoxGeometry(30,690,50);
	objects.push(new THREE.Mesh(geometry, material));

	objects[7].position.set(-100, -10, 680);
	objects[7].rotation.z = Math.PI /2.8;

	material = new THREE.MeshBasicMaterial({ color: 0x45db00 });
	geometry = new THREE.BoxGeometry(130,130,130);
	objects.push(new THREE.Mesh(geometry, material));

	objects[8].position.set(-125, -200, -500);
	objects[8].rotation.z = Math.PI /4;
	objects[8].rotation.x = Math.PI /12;

	material = new THREE.MeshBasicMaterial({ color: 0xfc8a8a });
	geometry = new THREE.CylinderGeometry(15, 15, 900, 50);
	objects.push(new THREE.Mesh(geometry, material));

	objects[9].position.set(225, -70, 680);
	objects[9].rotation.z = Math.PI / 2;

	material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
	geometry = new THREE.SphereGeometry(100, 20, 20);
	objects.push(new THREE.Mesh(geometry, material));

	objects[10].position.set(350, -225, 450);

	material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	geometry = new THREE.ConeGeometry(125, 350, 4);
	objects.push(new THREE.Mesh(geometry, material));

	objects[11].position.set(550, -80, 580);
	objects[11].rotation.z = -Math.PI/1.05 ;
	objects[11].rotation.y = Math.PI/24 ;

	material = new THREE.MeshBasicMaterial({ color: 0x000b70 });
	geometry = new THREE.SphereGeometry(150, 20, 20);
	objects.push(new THREE.Mesh(geometry, material));

	objects[12].position.set(350, 150, -550);

	material = new THREE.MeshBasicMaterial({ color: 0xddff00 });
	geometry = new THREE.TorusGeometry(175, 12, 30, 30);
	objects.push(new THREE.Mesh(geometry, material));

	objects[13].position.set(350, 150, -550)
	objects[13].rotation.y = -Math.PI / 4;
	objects[13].rotation.x = -Math.PI /2.5;
	objects[13].rotation.z = Math.PI;

	material = new THREE.MeshBasicMaterial({ color: 0x9500ff });
	geometry = new THREE.ConeGeometry(50,200,70);
	objects.push(new THREE.Mesh(geometry, material));

	objects[14].position.set(75, 75, 200);
	objects[14].rotation.z = -Math.PI /3.7;

	material = new THREE.MeshBasicMaterial({ color: 0xa14e00 });
	geometry = new THREE.BoxGeometry(125,125,125);
	objects.push(new THREE.Mesh(geometry, material));

	objects[15].position.set(50, 230, 400);
	objects[15].rotation.z = -Math.PI/4;
	objects[15].rotation.x = -Math.PI /12;

	group = new THREE.Group();
	group.add(objects[6]);
	group.add(objects[7]);
	group.add(objects[8]);
	scene.add(group);

	objects.map(obj => {
		if (!group.children.includes(obj)) {
			scene.add(obj);
		}
	});
}

function createScene() {
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xf8ea8b );
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
