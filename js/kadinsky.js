let camera, scene, renderer;

let material1, material2, geometry1, geometry2, cone1, cube2, group, move_group;

var keyMap = [];

function createObjects() {
	material1 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false });
	material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	material3 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: false });
	material4 = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: false });
	material5 = new THREE.MeshBasicMaterial({ color: 0x24daf2, wireframe: false });
	material6 = new THREE.MeshBasicMaterial({ color: 0xff7300, wireframe: false });
	material7 = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false });
	material8 = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: false });
	material9 = new THREE.MeshBasicMaterial({ color: 0x45db00, wireframe: false });
	material10 = new THREE.MeshBasicMaterial({ color: 0xfc8a8a, wireframe: false });
	material11 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false });
	material12 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	material13 = new THREE.MeshBasicMaterial({ color: 0x000b70, wireframe: false });
	material14 = new THREE.MeshBasicMaterial({ color: 0xddff00, wireframe: false });
	material15 = new THREE.MeshBasicMaterial({ color: 0x9500ff, wireframe: false });
	material16 = new THREE.MeshBasicMaterial({ color: 0xa14e00, wireframe: false });


	geometry1 = new THREE.ConeGeometry(50,200,70);
	geometry2 = new THREE.BoxGeometry(30,650,50);
	geometry3 = new THREE.SphereGeometry(50, 20 ,20);
	geometry4 = new THREE.ConeGeometry(50, 200, 4);
	geometry5 = new THREE.CylinderGeometry(15, 15, 650, 50);
	geometry6 = new THREE.BoxGeometry(125, 125, 125);
	geometry7 = new THREE.TorusGeometry(100,10, 30, 30);
	geometry8 = new THREE.BoxGeometry(30,690,50);
	geometry9 = new THREE.BoxGeometry(130,130,130);
	geometry10 = new THREE.CylinderGeometry(15, 15, 900, 50);
	geometry11 = new THREE.SphereGeometry(100, 20, 20);
	geometry12 = new THREE.ConeGeometry(125, 350, 4);
	geometry13 = new THREE.SphereGeometry(150, 20, 20);
	geometry14 = new THREE.TorusGeometry(175, 12, 30, 30);
	geometry15 = new THREE.ConeGeometry(50,200,70);
	geometry16 = new THREE.BoxGeometry(125,125,125);



	cone1 = new THREE.Mesh(geometry1, material1);
	cube2 = new THREE.Mesh(geometry2, material2);
	sphere3 = new THREE.Mesh(geometry3, material3);
	pyramid4 = new THREE.Mesh(geometry4, material4);
	cylinder5 = new THREE.Mesh(geometry5, material5);
	cube6 = new THREE.Mesh(geometry6, material6);
	torus7 = new THREE.Mesh(geometry7, material7);
	cube8 = new THREE.Mesh(geometry8, material8);
	cube9 = new THREE.Mesh(geometry9, material9);
	cylinder10 = new THREE.Mesh(geometry10, material10);
	sphere11 = new THREE.Mesh(geometry11, material11);
	pyramid12 = new THREE.Mesh(geometry12, material12);
	sphere13 = new THREE.Mesh(geometry13, material13);
	torus14 = new THREE.Mesh(geometry14, material14);
	cone15 = new THREE.Mesh(geometry15, material15);
	cube16 = new THREE.Mesh(geometry16, material16);


	cone1.position.set(-550, 250, -320);
	cone1.rotation.z = -(Math.PI / 4) - (Math.PI /12);

	cube2.position.set(-500, 0, -100);
	cube2.rotation.z = Math.PI / 24;

	sphere3.position.set(-530, 120, 100);

	pyramid4.position.set(-500, 0, -320);
	pyramid4.rotation.z = (Math.PI / 4) * 2.5;
	pyramid4.rotation.x =  Math.PI /50;

	cylinder5.position.set(-320, -10, -200);
	cylinder5.rotation.z = -(Math.PI / 4) * 1.4;

	cube6.position.set(-480,-225,150);
	cube6.rotation.y = -Math.PI / 8;
	cube6.rotation.z = -Math.PI / 24;

	torus7.position.set(-215, 215, 0);

	cube8.position.set(-100, -10, 680);
	cube8.rotation.z = Math.PI /2.8;

	cube9.position.set(-125, -200, -500);
	cube9.rotation.z = Math.PI /4;
	cube9.rotation.x = Math.PI /12;

	cylinder10.position.set(225, -70, 680);
	cylinder10.rotation.z = Math.PI / 2;

	sphere11.position.set(350, -225, 450);

	pyramid12.position.set(550, -80, 580);
	pyramid12.rotation.z = -Math.PI/1.05 ;
	pyramid12.rotation.y = Math.PI/24 ;

	sphere13.position.set(350, 150, -550);

	torus14.position.set(350, 150, -550)
	torus14.rotation.y = -Math.PI / 4;
	torus14.rotation.x = -Math.PI /2.5;
	torus14.rotation.z = Math.PI;

	cone15.position.set(75, 75, 200);
	cone15.rotation.z = -Math.PI /3.7;

	cube16.position.set(50, 230, 400);
	cube16.rotation.z = -Math.PI/4;
	cube16.rotation.x = -Math.PI /12;

	group = new THREE.Group();
	group.add(cone1);
	group.add(cube2);
	group.add(sphere3);
	group.add(pyramid4);
	group.add(cylinder5);
	group.add(cube6);
	group.add(torus7);
	group.add(cube8);
	group.add(cube9);
	group.add(cylinder10);
	group.add(sphere11);
	group.add(pyramid12);
	group.add(sphere13);
	group.add(torus14);
	group.add(cone15);
	group.add(cube16);

	scene.add(group);
}

function createScene() {
	'use strict';

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xf8ea8b );


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
		move_group.rotation.y += 0.01;
		// rodar o objeto todo para um lado
	}

	if (keyMap[87] == true || keyMap[119] == true) { // W/w
		move_group.rotation.y -= 0.01;
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
		move_group.position.x += 1;
	}

	if (keyMap[40] == true) { // down
		move_group.position.y -= 1;
	}

	if (keyMap[68] == true || keyMap[100] == true) { // D/d
		move_group.position.z += 1;
	}

	if (keyMap[67] == true || keyMap[99] == true) { // C/c
		move_group.position.z -= 1;
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
	var code = event.keyCode;
	if (!doOneTimeEvent(code)) {
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