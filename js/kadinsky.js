'use strict';

let last = 0;
let axes = new THREE.AxesHelper(100);
let camera, scene, renderer;
let material, geometry, group, path, articulate;
const keyMap = [];

class CustomSinCurve extends THREE.Curve {
	constructor( scale = 1 ) {
		super();
		this.scale = scale;
	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {
		const tx = t * 3 - 1.5;
		const ty = Math.sin( Math.PI/1.1 * t );
		const tz = 0;
		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );
	}
}

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

function changeWireframe(listMeshes) {
	listMeshes.children.map(child => {
		child.material.wireframe = !child.material.wireframe;
		if (child.children.length != 0) {
			changeWireframe(child);
		}
	});
}

function createObjects() {
	let objects = [];
	group = new THREE.Group();

	//avô
	material = new THREE.MeshStandardMaterial({ color: 0xffb700 });
	geometry = new THREE.BoxGeometry(110, 110, 110);
	objects.push(new THREE.Mesh(geometry, material));

	objects[0].position.set(0, 0, 0);
	objects[0].rotation.z = Math.PI /4;
	objects[0].rotation.x = Math.PI /4;

	//avó
	material = new THREE.MeshStandardMaterial({ color: 0xffffff });
	geometry = new THREE.TorusGeometry(120, 11, 30, 30);
	objects.push(new THREE.Mesh(geometry, material));

	objects[1].position.set(0, 0, 0);
	objects[1].rotation.x = -Math.PI /2.5;
	objects[1].rotation.y = Math.PI /4;

	material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
	geometry = new THREE.OctahedronGeometry(120, 0);
	objects.push(new THREE.Mesh(geometry, material));

	objects[2].position.set(-400, -170, 100);
	objects[2].rotation.z = Math.PI /3;

	//pai
	material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
	geometry = new THREE.SphereGeometry(60, 20 ,20);
	objects.push(new THREE.Mesh(geometry, material));

	objects[3].position.set(150, -210, 100);

	material = new THREE.MeshStandardMaterial({ color: 0xfffb00 });
	geometry = new THREE.SphereGeometry(75, 20 ,20);
	objects.push(new THREE.Mesh(geometry, material));

	objects[4].position.set(100, 220, 40);

	material = new THREE.MeshStandardMaterial({ color: 0x00ffff });
	geometry = new THREE.IcosahedronGeometry(120, 0);
	objects.push(new THREE.Mesh(geometry, material));

	objects[5].position.set(350, 100, 100);
	//objects[5].rotation.z = Math.PI /3;

	material = new THREE.MeshStandardMaterial({ color: 0xfc01a8 });
	geometry = new THREE.SphereGeometry(35, 20 ,20);
	objects.push(new THREE.Mesh(geometry, material));

	objects[6].position.set(-100, -220, 30);

	material = new THREE.MeshStandardMaterial({ color: 0x82877e });
	geometry = new THREE.SphereGeometry(110, 20 ,20);
	objects.push(new THREE.Mesh(geometry, material));

	objects[7].position.set(-330, 130, -250);

	material = new THREE.MeshStandardMaterial({ color: 0xff2f00 });
	geometry = new THREE.CylinderGeometry(10, 10, 650, 50);
	objects.push(new THREE.Mesh(geometry, material));

	objects[8].position.set(350, -270, -100);
	objects[8].rotation.z = -(Math.PI / 2.2);

	material = new THREE.MeshStandardMaterial({ color: 0x01fc93 });
	geometry = new THREE.CylinderGeometry(25, 25, 650, 50);
	objects.push(new THREE.Mesh(geometry, material));

	objects[9].position.set(600, 0, -250);
	objects[9].rotation.z = -(Math.PI / 25);

	material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
	geometry = new THREE.ConeGeometry(45, 150, 4);
	objects.push(new THREE.Mesh(geometry, material));

	objects[10].position.set(-420, 75, -110);
	objects[10].rotation.z = -1.2*(Math.PI / 4) ;

	//neto
	material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
	geometry = new THREE.ConeGeometry(25, 100, 50);
	objects.push(new THREE.Mesh(geometry, material));

	objects[11].position.set(240, -200, 100);
	objects[11].rotation.z =Math.PI/30;

	material = new THREE.MeshStandardMaterial({ color: 0xff008c });
	path = new CustomSinCurve( 250 );
	geometry = new THREE.TubeGeometry(path, 30, 8, 13);
	objects.push(new THREE.Mesh(geometry, material));

	objects[12].position.set(-365, 25, 0);
	objects[12].rotation.z = 0.7*Math.PI/4
	
	material = new THREE.MeshStandardMaterial({ color: 0x6057ff });
	geometry = new THREE.CylinderGeometry(70, 30, 120, 13);
	objects.push(new THREE.Mesh(geometry, material));

	objects[13].position.set(-180, -100, 0);
	objects[13].rotation.z = -1.2*Math.PI/6

	material = new THREE.MeshStandardMaterial({ color: 0xff57cd });
	geometry = new THREE.OctahedronGeometry(70, 0);
	objects.push(new THREE.Mesh(geometry, material));

	objects[14].position.set(400, -130, 100);
	objects[14].rotation.z = -1.6*Math.PI /3;
	objects[14].rotation.z = -1.6*Math.PI /2;

	material = new THREE.MeshStandardMaterial({ color: 0xc1c1c1 });
	geometry = new THREE.BoxGeometry(80, 80, 80 );
	objects.push(new THREE.Mesh(geometry, material));

	objects[15].position.set(510, 250, 300);
	objects[15].rotation.z = -1.6*Math.PI /3;
	objects[15].rotation.z = -1.6*Math.PI /2;

	objects[3].add(objects[11]);
	objects[0].add(objects[3]);
	objects[0].add(objects[1]);
	articulate = objects[0];

	objects.map(obj => {
		if (obj != objects[1] && obj != objects[3] && obj != objects[11]) {
			group.add(obj);
		}
	});

	scene.add(group);
}

function createScene() {
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x020122);
	scene.add(axes);

	const light1 = new THREE.DirectionalLight( 0xffffff, 1 );
	light1.position.set(1000, 1000, 1000);
	light1.castShadow = true;
	scene.add(light1);
	const light2 = new THREE.DirectionalLight( 0xffffff, 1 );
	light2.position.set(-1000, 1000, -1000);
	light2.castShadow = true;
	scene.add(light2);
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
		articulate.rotation.x += 0.001 * delta;
		//articulate.rotateX(Math.PI * 0.001 * delta)
	}

	if (keyMap[87] || keyMap[119]) { // W/w
		// rodar o objeto todo para o lado oposto
		articulate.rotation.x -= 0.001 * delta;
	}

	if (keyMap[65] || keyMap[97]) { // A/a
		// rodar parte do objeto para um lado
		rotateAroundPoint(
			articulate.children[0],
			getObjectCenterPoint(articulate),
			new THREE.Vector3(0, 1, 0),
			0.001 * delta
		);
	}

	if (keyMap[83] || keyMap[115]) { // S/s
		// rodar parte do objeto para o lado oposto
		rotateAroundPoint(
			articulate.children[0],
			getObjectCenterPoint(articulate),
			new THREE.Vector3(0, 1, 0),
			-0.001 * delta
		);
	}

	if (keyMap[90] || keyMap[122]) { // Z/z
		// rodar unico objeto para o lado oposto
		rotateAroundPoint(
			articulate.children[0].children[0],
			getObjectCenterPoint(articulate.children[0]),
			new THREE.Vector3(0, 0, 1),
			0.001 * delta
		);
	}

	if (keyMap[88] || keyMap[120]) { // X/x
		// rodar unico objeto para o lado oposto
		rotateAroundPoint(
			articulate.children[0].children[0],
			getObjectCenterPoint(articulate.children[0]),
			new THREE.Vector3(0, 0, 1),
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
		default:
			return false;
	}
	return true;
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
