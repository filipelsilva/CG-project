let camera, scene, renderer;

let material1, material2, geometry1, geometry2, cone1, cube2, group;


function createObjects() {
	material1 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false });
	material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	material3 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: false });

	geometry1 = new THREE.ConeGeometry(50,200,70);
	geometry2 = new THREE.BoxGeometry(30,650,50);
	geometry3 = new THREE.SphereGeometry(50, 20 ,20);

	cone1 = new THREE.Mesh(geometry1, material1);
	cube2 = new THREE.Mesh(geometry2, material2);
	sphere3 = new THREE.Mesh(geometry3, material3);

	cone1.position.set(-550, 250, -500);
	cone1.rotation.z = -(Math.PI / 4) - (Math.PI /12);

	cube2.position.set(-500, 0, -200);
	cube2.rotation.z = Math.PI / 24;

	sphere3.position.set(-530, 100, 0);


	group = new THREE.Group();
	group.add(cone1);
	group.add(cube2);
	group.add(sphere3);

	scene.add(group);
}

function createScene() {
	'use strict';

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xf8ea8b );

	scene.add(new THREE.AxesHelper(1000));
}

function createCamera() {
	'use strict';

	camera = new THREE.OrthographicCamera(window.innerWidth/-2, window.innerWidth/2, window.innerHeight/2, window.innerHeight/-2, -1000, 1000);

	return camera;
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

function onKeyDown(e) {
	'use strict';

	switch (e.keyCode) {
		case 81: // Q
		case 113: // q
			group.rotation.y += 0.01;
			// rodar o objeto todo para um lado
			break;

		case 87: // W
		case 119: // w
			group.rotation.y -= 0.01;
			// rodar o objeto todo para o lado oposto
			break;

		case 65: // A
		case 97: // a
			// rodar parte do objeto para um lado
			break;

		case 83:  // S
		case 115: // s
			// rodar parte do objeto para o lado oposto
			break;

		case 90:  // Z
		case 122: // z
			// rodar unico objeto para o lado oposto
			break;

		case 88:  // X
		case 120: // x
			// rodar unico objeto para o lado oposto
			break;

		// TODO ainda não aceita vários keypresses ao mesmo tempo, já há ideia para solução
		case 37: // left
			group.position.x -= 1;
			break;

		case 38: // up
			group.position.y += 1;
			break;

		case 39: // right
			group.position.x += 1;
			break;

		case 40: // down
			group.position.y -= 1;
			break;

		case 68:  // D
		case 100: // d
			group.position.z += 1;
			break;

		case 67: // C
		case 99: // c
			group.position.z -= 1;
			break;

		case 69:  // E
		case 101: // e
			scene.traverse(function (node) {
				if (node instanceof THREE.AxesHelper) {
					node.visible = !node.visible;
				}
			});
			break;

		case 76:  // L
		case 108: // l
			scene.traverse(function (node) {
				if (node instanceof THREE.Mesh) {
					node.material.wireframe = !node.material.wireframe;
				}
			});
			break;
	}
}

function render() {
	'use strict';

	renderer.render(scene, camera);
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

	render();

	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("resize", onResize);
}

function animate() {
	'use strict';

	//group.rotation.y += 0.01;

	renderer.render(scene, camera);

	requestAnimationFrame(animate);
};
