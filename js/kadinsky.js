let camera, scene, renderer;

let material1, material2, geometry1, geometry2, cube1, cube2, group;

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
		camera.aspect = window.innerWidth / window.innerHeight;
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

function onResize() {
	'use strict';

	renderer.setSize(window.innerWidth, window.innerHeight);

	if (window.innerHeight > 0 && window.innerWidth > 0) {
		// TODO isto não funciona, mas também não é para esta entrega
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
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

	group.rotation.y += 0.01;

	renderer.render(scene, camera);

	requestAnimationFrame(animate);
};
