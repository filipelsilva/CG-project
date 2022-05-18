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

	material = new THREE.MeshBasicMaterial({ color: 0xffffff });
	geometry = new THREE.TorusGeometry(120,11, 30, 30);
	objects.push(new THREE.Mesh(geometry, material));

	objects[1].position.set(0, 0, 0);
	objects[1].rotation.x = -Math.PI /2.5;
	objects[1].rotation.y = Math.PI /4;

	material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
	geometry = new THREE.SphereGeometry(90, 20 ,20);
	objects.push(new THREE.Mesh(geometry, material));

	objects[2].position.set(-400, -170, 100);

	material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	geometry = new THREE.SphereGeometry(60, 20 ,20);
	objects.push(new THREE.Mesh(geometry, material));

	objects[3].position.set(300, -130, 50);

	material = new THREE.MeshBasicMaterial({ color: 0xfffb00 });
	geometry = new THREE.SphereGeometry(75, 20 ,20);
	objects.push(new THREE.Mesh(geometry, material));

	objects[4].position.set(100, 220, 40);

	material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
	geometry = new THREE.SphereGeometry(40, 20 ,20);
	objects.push(new THREE.Mesh(geometry, material));

	objects[5].position.set(370, 150, 200);

	material = new THREE.MeshBasicMaterial({ color: 0xfc01a8 });
	geometry = new THREE.SphereGeometry(35, 20 ,20);
	objects.push(new THREE.Mesh(geometry, material));

	objects[6].position.set(-100, -220, 30);

	material = new THREE.MeshBasicMaterial({ color: 0x82877e });
	geometry = new THREE.SphereGeometry(110, 20 ,20);
	objects.push(new THREE.Mesh(geometry, material));

	objects[7].position.set(-330, 130, 150);


	material = new THREE.MeshBasicMaterial({ color: 0x01fc93 });
	geometry = new THREE.CylinderGeometry(12, 12, 650, 50);
	objects.push(new THREE.Mesh(geometry, material));

	objects[8].position.set(-600, -10, -200);
	objects[8].rotation.z = (Math.PI / 25) ;

	material = new THREE.MeshBasicMaterial({ color: 0xff2f00 });
	geometry = new THREE.CylinderGeometry(15, 15, 650, 50);
	objects.push(new THREE.Mesh(geometry, material));

	objects[9].position.set(-350, 270, 100);
	objects[9].rotation.z = -(Math.PI / 2.1) ;

	material = new THREE.MeshBasicMaterial({ color: 0xffed47 });
	geometry = new THREE.CylinderGeometry(10, 10, 650, 50);
	objects.push(new THREE.Mesh(geometry, material));

	objects[10].position.set(350, -270, -100);
	objects[10].rotation.z = -(Math.PI / 2.2) ;

	material = new THREE.MeshBasicMaterial({ color: 0xff4784 });
	geometry = new THREE.CylinderGeometry(25, 25, 650, 50);
	objects.push(new THREE.Mesh(geometry, material));

	objects[11].position.set(550, 0, -250);
	objects[11].rotation.z = -(Math.PI / 25) ;

	material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	geometry = new THREE.ConeGeometry(45, 150, 4);
	objects.push(new THREE.Mesh(geometry, material));

	objects[12].position.set(-420, 75, 300);
	objects[12].rotation.z = -1.2*(Math.PI / 4) ;

	material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
	geometry = new THREE.ConeGeometry(25, 100, 50);
	objects.push(new THREE.Mesh(geometry, material));

	objects[13].position.set(350, -100, 300);
	objects[13].rotation.z =2.8*(Math.PI / 4) ;


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
