class SceneCreator {
	constructor() {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0x020122);
		this.perspectiveCamera = this.createPerspectiveCamera();
		this.orthographicCamera = this.createOrthographicCamera();
		this.scene.add(this.perspectiveCamera);
		this.scene.add(this.orthographicCamera);
		this.globalLight = this.createLight();
		this.spotlights;
	}

	createLight() {
		let light = new THREE.DirectionalLight(0xffffff, 1);
		light.position.set(0, 500, 1000);
		light.castShadow = true;
		light.target = this.scene;
		this.scene.add(light);
		return light;
	}

	createSpotlights(objects) {
		let light;
		let group = new THREE.Group();
		light = new THREE.SpotLight(0xffffff, 0.6);
		light.castShadow = true;
		light.position.set(-500, 1000, 600);
		light.angle = Math.PI/12;
		light.target = objects.children[0];
		group.add(light);
		light = new THREE.SpotLight(0xffffff, 0.6);
		light.castShadow = true;
		light.position.set(0, 1000, 600);
		light.angle = Math.PI/12;
		light.target = objects.children[1];
		group.add(light);
		light = new THREE.SpotLight(0xffffff, 0.6);
		light.castShadow = true;
		light.position.set(500, 1000, 600);
		light.angle = Math.PI/12;
		light.target = objects.children[2];
		group.add(light);
		let material, geometry, mesh;
		let spotlight = new THREE.Group();
		material = new THREE.MeshStandardMaterial({color: 0x666666});
		material.castShadow = true;
		geometry = new THREE.SphereGeometry(30, 20 ,20);
		mesh = new THREE.Mesh(geometry, material);
		spotlight.add(mesh);
		geometry = new THREE.ConeGeometry(30, 70, 8);
		mesh = new THREE.Mesh(geometry, material);
		mesh.rotation.x = Math.PI/2;
		mesh.rotation.z = Math.PI;
		mesh.position.set(0,0,55);
		spotlight.add(mesh);
		spotlight.position.set(-500, 650, 600);
		spotlight.lookAt(...objects.children[0].position);
		group.add(spotlight);
		spotlight = new THREE.Group();
		geometry = new THREE.SphereGeometry(30, 20 ,20);
		mesh = new THREE.Mesh(geometry, material);
		spotlight.add(mesh);
		geometry = new THREE.ConeGeometry(30, 70, 8);
		mesh = new THREE.Mesh(geometry, material);
		mesh.rotation.x = Math.PI/2;
		mesh.rotation.z = Math.PI;
		mesh.position.set(0,0,55);
		spotlight.add(mesh);
		spotlight.position.set(0, 650, 600);
		spotlight.lookAt(...objects.children[1].position);
		group.add(spotlight);
		spotlight = new THREE.Group();
		geometry = new THREE.SphereGeometry(30, 20 ,20);
		mesh = new THREE.Mesh(geometry, material);
		spotlight.add(mesh);
		geometry = new THREE.ConeGeometry(30, 70, 8);
		mesh = new THREE.Mesh(geometry, material);
		mesh.rotation.x = Math.PI/2;
		mesh.rotation.z = Math.PI;
		mesh.position.set(0,0,55);
		spotlight.add(mesh);
		spotlight.position.set(500, 650, 600);
		spotlight.lookAt(...objects.children[2].position);
		group.add(spotlight);
		this.scene.add(group);
		return group;
	}

	createOrthographicCamera() {
		let camera = new THREE.OrthographicCamera(
			window.innerWidth/-2,
			window.innerWidth/2,
			window.innerHeight/2,
			window.innerHeight/-2,
			-10000,
			10000
		);
		camera.position.x = 0;
		camera.position.y = 2000;
		camera.position.z = 10;
		camera.zoom = 0.3;
		camera.lookAt(...this.scene.position);
		return camera;
	}

	createPerspectiveCamera() {
		let camera = new THREE.PerspectiveCamera(
			70,
			window.innerWidth / window.innerHeight,
			1,
			10000
		);
		camera.position.x = 0;
		camera.position.y = 300;
		camera.position.z = 1500;
		camera.lookAt(...this.scene.position);
		return camera;
	}
}
class ObjectCreator {
	constructor() {
		this.group = new THREE.Group();
		this.palanque = this.createPalanque();
		this.floor = this.createFloor();
		this.createMaterials();
		this.createObjects();
	}

	createPalanque() {
		let material, geometry, mesh;
		let group = new THREE.Group();
		material = new THREE.MeshStandardMaterial({color: 0x994b00});
		geometry = new THREE.BoxGeometry(1500, 120, 1200);
		mesh = new THREE.Mesh(geometry, material);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		group.add(mesh);
		material = new THREE.MeshStandardMaterial({color: 0x994b00});
		geometry = new THREE.BoxGeometry(1200, 80, 120);
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0,-20,660);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		group.add(mesh);
		material = new THREE.MeshStandardMaterial({color: 0x994b00});
		geometry = new THREE.BoxGeometry(900, 40, 120);
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0,-40,720);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		group.add(mesh);
		return group;
	}

	createFloor() {
		let geometry, material;
		geometry = new THREE.PlaneGeometry(15000, 10000);
		material = new THREE.MeshStandardMaterial({color: 0x555555, side: THREE.DoubleSide});
		let floor = new THREE.Mesh(geometry, material);
		floor.castShadow = true;
		floor.receiveShadow = true;
		floor.rotation.x = Math.PI/2;
		floor.position.set(0,-60,0);
		return floor;
	}

	createMaterials() {
		let phongMaterial, lambertMaterial, normalMaterial;

		const texture = new THREE.TextureLoader().load( "media/origami.jpg" );

		phongMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, side: THREE.FrontSide});
		phongMaterial.map = texture;
		this.phongMaterials = [phongMaterial, new THREE.MeshPhongMaterial({color: 0xffffff, side: THREE.BackSide})];

		this.phongMaterials.forEach((mat) => {
			mat.needsUpdate = true;
		});

		lambertMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.FrontSide});
		lambertMaterial.map = texture;
		this.lambertMaterials = [lambertMaterial, new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.BackSide})];

		normalMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.FrontSide});
		normalMaterial.map = texture;
		this.normalMaterials = [normalMaterial, new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.BackSide})];
	}

	createObjects() {
		let geometry, vertices, objects = [];
		geometry = new THREE.BufferGeometry();
		vertices = new Float32Array( [
			0, -100,  0,
			100 , 0,  -30,
			0,  100,  0,
			
			-100, 0,  -30,
			0, -100,  0,
			0,  100,  0
	
		] );
		let uvs = new Float32Array( [
			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,	
		]);
		geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
		geometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
		geometry.computeVertexNormals();
		geometry.normalizeNormals();
		geometry.addGroup(0, 6, 0);
		geometry.addGroup(0, 6, 1);
		objects[0] = new THREE.Mesh( geometry, this.phongMaterials );
		objects[0].castShadow = true;
		objects[0].receiveShadow = true;

		objects[0].position.set(-450, 300, 0);
		objects[0].scale.set(2,2,2);

		geometry = new THREE.BufferGeometry();
		vertices = new Float32Array( [
			0.0, -100.0,  0.0,
			0.0,  100.0,  0.0,
			-33.136 , 66.26,  0.0,
			
			0.0, -100.0,  0.0,
			33.136 , 66.26,  0.0,
			0.0,  100.0,  0.0,

			0.0, -100.0,  0.0,
			33.136 , 66.26,  0.0,
			0.0,  56.98,  5.0,

			0.0, -100.0,  0.0,
			30.3 , 42.41,  0.0,
			0.0,  56.98,  5.0,

			0.0, -100.0,  0.0,
			0.0,  56.98,  5.0,
			-33.136 , 66.26,  0.0,

			0.0, -100.0,  0.0,
			0.0,  56.98,  5.0,
			-30.3 , 42.41,  0.0,
			
			0.0, -100.0, 0.0,
			30.3, 42.41, 0.0,
			0.0, 42.41, -5.0,

			0.0, -100.0, 0.0,
			0.0, 42.41, -5.0,
			-30.3, 42.41, 0.0
			
		] );
		uvs = new Float32Array( [
			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,

			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,

			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,

			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,
			]);
		geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
		geometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
		geometry.computeVertexNormals();
		geometry.normalizeNormals();
		geometry.addGroup(0, 24, 0);
		geometry.addGroup(0, 24, 1);
		objects[1] = new THREE.Mesh( geometry, this.phongMaterials );
		objects[1].castShadow = true;
		objects[1].receiveShadow = true;

		objects[1].position.set(0, 300, 0);
		objects[1].scale.set(2,2,2);

		geometry = new THREE.BufferGeometry();
		vertices = new Float32Array( [
			-48.024, 0.0,  0.0,
			-15.34, -32.01, 15.0,
			53.36, 0.0, 0.0,

			-15.34, -32.01, 15.0,
			41.35, -21.39, 10.0,
			53.36, 0.0, 0.0,

			-48.024, 0.0,  0.0,
			-15.34, -32.01, -15.0,
			53.36, 0.0, 0.0,

			-15.34, -32.01, -15.0,
			41.35, -21.39, -10.0,
			53.36, 0.0, 0.0,

			0.0, 0.0, 10.0,
			-15.34, -32.01, 15.0,
			41.35, -21.39, 10.0,
			
			0.0, 0.0, 10.0,
			41.35, -21.39, 10.0,
			54.36, 0.0, 0.0,

			0.0, 0.0, -10.0,
			-15.34, -32.01, -15.0,
			41.35, -21.39, -10.0,
			
			0.0, 0.0, -10.0,
			41.35, -21.39, -10.0,
			54.36, 0.0, 0.0,

			0.0, 0.0, 10.0,
			9.34, -28.68, 12.0,
			41.35, -21.39, 11.0,

			0.0, 0.0, 10.0,
			41.35, -21.39, 11.0,
			55.36, 0.0, 0.0,

			0.0, 0.0, -10.0,
			9.34, -28.68, -12.0,
			41.35, -21.39, -11.0,

			0.0, 0.0, -10.0,
			41.35, -21.39, -11.0,
			55.36, 0.0, 0.0,

			9.34, 28.01, 5.0,
			41.35, -21.39, 11.0,
			55.36, 0.0, 0.0,

			9.34, 28.01, 5.0,
			55.36, 0.0, 0.0,
			13.34, 35.35, 0.0,

			9.34, 28.01, -5.0,
			41.35, -21.39, -11.0,
			55.36, 0.0, 0.0,

			9.34, 28.01, -5.0,
			55.36, 0.0, 0.0,
			13.34, 35.35, 0.0,

			9.34, 28.01, 5.0,
			55.36, 28.01, 0.0,
			13.34, 35.35, 0.0,

			9.34, 28.01, -5.0,
			55.36, 28.01, 0.0,
			13.34, 35.35, 0.0,

			9.34, -28.68, 12.0,
			41.35, -21.39, 11.0,
			12.0, -2.0, 0.0,

			12.0, -2.0, 0.0,
			41.35, -21.39, 11.0,
			55.36, 0.0, 0.0,

			9.34, -28.68, -12.0,
			41.35, -21.39, -11.0,
			12.0, -2.0, 0.0,

			12.0, -2.0, 0.0,
			41.35, -21.39, -11.0,
			55.36, 0.0, 0.0,

		] );
		uvs = new Float32Array( [
			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,

			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,

			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,
			
			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,

			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,
			
			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,
			
			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,
			
			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,
			
			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,
			
			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,
			
			0.0, 0.0,
			1.0, 0.0,
			1.0, 1.0,

			0.0, 1.0,
			0.0, 0.0,
			1.0, 1.0,
			]);
		geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
		geometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
		geometry.computeVertexNormals();
		geometry.normalizeNormals();
		geometry.addGroup(0, 66, 0);
		geometry.addGroup(0, 66, 1);
		objects[2] = new THREE.Mesh( geometry, this.phongMaterials );
		objects[2].castShadow = true;
		objects[2].receiveShadow = true;

		objects[2].position.set(450, 300, 0);
		objects[2].scale.set(2,2,2);


		objects.map(obj => {
			this.group.add(obj);
		});
	}
}
class KeyHandler {
	constructor() {
		this.keyMap = [];
		this.lastMaterialUsed = [];
	}

	onKeyDown(event) {
		const code = event.keyCode;
		if (!this.doOneTimeEvent(code)) {
			this.keyMap[code] = true;
		}
	}

	onKeyUp(event) {
		const code = event.keyCode;
		this.keyMap[code] = false;
	}

	// Handler for the movement of the objects.
	doKeyPress(delta) {
		if (this.keyMap[81] || this.keyMap[113]) { // Q/q
			group.children[0].rotateY(3 * delta)
			// rodar peça 1
		}

		if (this.keyMap[87] || this.keyMap[119]) { // W/w
			group.children[0].rotateY(-3 * delta)
			// rodar peça 1
		}

		if (this.keyMap[69] || this.keyMap[101]) { // E/e
			group.children[1].rotateY(3 * delta)
			// rodar peça 2
		}

		if (this.keyMap[82] || this.keyMap[114]) { // R/r
			group.children[1].rotateY(-3 * delta)
			// rodar peça 2
		}

		if (this.keyMap[84] || this.keyMap[116]) { // T/t
			group.children[2].rotateY(3 * delta)
			// rodar peça 3
		}

		if (this.keyMap[89] || this.keyMap[121]) { // Y/y
			group.children[2].rotateY(-3 * delta)
			// rodar peça 3
		}
	}

	doOneTimeEvent(code) {
		switch (code) {
			case 65:  // A
			case 97:  // a
				group.children.forEach((child) => {
					if (child.material === objectCreator.phongMaterials) {
						child.material = objectCreator.lambertMaterials;
					} else {
						child.material = objectCreator.phongMaterials;
					}
					console.log(child.material);
				});
				// alternar sombreamento
				break;
			case 83:  // S
			case 115: // s
				group.children.forEach((child) => {
					if (child.material === objectCreator.normalMaterials) {
						child.material = this.lastMaterialUsed;
					} else {
						this.lastMaterialUsed = child.material;
						child.material = objectCreator.normalMaterials;
					}
					console.log(child.material);
				});
				// toggle calculo da iluminação
				break;
			case 68:  // D
			case 100: // d
				// toggle calculo da iluminação global
				isGlobalLight = !isGlobalLight;
				if (isGlobalLight) {
					sceneCreator.globalLight.intensity = 1;
				} else {
					sceneCreator.globalLight.intensity = 0;
				}
				break;
			case 90:  // Z
			case 122: // z
				// toggle 1 spotlight
				isSpotlight1 = !isSpotlight1;
				if (isSpotlight1) {
					sceneCreator.spotlights.children[0].intensity = 0.6;
				} else {
					sceneCreator.spotlights.children[0].intensity = 0;
				}
				break;
			case 88:  // X
			case 120: // x
				// toggle 2 spotlight
				isSpotlight2 = !isSpotlight2;
				if (isSpotlight2) {
					sceneCreator.spotlights.children[1].intensity = 0.6;
				} else {
					sceneCreator.spotlights.children[1].intensity = 0;
				}
				break;
			case 67:  // C
			case 99:  // c
				// toggle 3 spotlight
				isSpotlight3 = !isSpotlight3;
				if (isSpotlight3) {
					sceneCreator.spotlights.children[2].intensity = 0.6;
				} else {
					sceneCreator.spotlights.children[2].intensity = 0;
				}
				break;
			case 49: // 1
				// perspetiva
				scene.activeCamera = sceneCreator.perspectiveCamera;
				camera = scene.activeCamera;
				onResize();
				break;
			case 50: // 2
				// fixa, ortogonal
				scene.activeCamera = sceneCreator.orthographicCamera;
				camera = scene.activeCamera;
				onResize();
				break;
			case 32:  // space
				// play/pause
				isPaused = !isPaused;
				if (isPaused) {
					clock.stop();
				} else {
					clock.start();
				}
				break;
			case 51:  // 3
				// reset
				initObjects();
				if (isPaused) {
					isPaused = false;
					clock.start();
				}
				break;
			default:
				return false;
		}
		return true;
	}
}
'use strict';

let id;
let clock = new THREE.Clock();
let delta = 0;
let isPaused = false;
let isGlobalLight = true;
let isSpotlight1 = true;
let isSpotlight2 = true;
let isSpotlight3 = true;

let renderer;

let objectCreator;
let sceneCreator = new SceneCreator();
let keyHandler = new KeyHandler();

let scene = sceneCreator.scene;
let perspectiveCamera = sceneCreator.perspectiveCamera;
let orthographicCamera = sceneCreator.orthographicCamera;

let camera = perspectiveCamera;

let group;
let palanque;
let floor;

function initObjects() {
	scene.remove(group);
	scene.remove(palanque);
	scene.remove(floor);
	scene.remove(sceneCreator.spotlights);
	scene.remove(sceneCreator.globalLight);

	objectCreator = new ObjectCreator();

	group = objectCreator.group;
	palanque = objectCreator.palanque;
	floor = objectCreator.floor;
	camera = perspectiveCamera;

	scene.add(palanque);
	scene.add(floor);
	scene.add(group);

	sceneCreator.globalLight = sceneCreator.createLight();
	sceneCreator.spotlights = sceneCreator.createSpotlights(group);
}

// Pause menu
let scenePause = new THREE.Scene();
let cameraPause = new THREE.OrthographicCamera(
	window.innerWidth/-2,
	window.innerWidth/2,
	window.innerHeight/2,
	window.innerHeight/-2,
	-1000,
	1000
);

let light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1000, 1000);
light.castShadow = true;
light.target = scenePause;
scenePause.add(light);

scenePause.add(cameraPause);
let texture = new THREE.TextureLoader().load("media/pause_menu.png");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

let material = new THREE.MeshStandardMaterial({map: texture, transparent: true});
let geometry = new THREE.PlaneGeometry(910, 512);

let pauseMenu = new THREE.Mesh(geometry, material);

scenePause.add(pauseMenu);
cameraPause.lookAt(scenePause.position);
// End of pause menu

function onResize() {
	texture.updateMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);

	if (window.innerHeight > 0 && window.innerWidth > 0) {
		if (camera === sceneCreator.orthographicCamera) {
			camera.left = window.innerWidth/-2;
			camera.right = window.innerWidth/2;
			camera.top = window.innerHeight/2;
			camera.bottom = window.innerHeight/-2;
			group.scale.set(window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight);
			palanque.scale.set(window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight);
			floor.scale.set(window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight);
			sceneCreator.spotlights.scale.set(window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight);
		}
		else{
			group.scale.set(1,1,1);
			palanque.scale.set(1,1,1);
			floor.scale.set(1,1,1);
			sceneCreator.spotlights.scale.set(1,1,1);
			/* TDOD check intended behaviour
			group.scale.set(window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight);
			palanque.scale.set(window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight);
			floor.scale.set(window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight);
			sceneCreator.spotlights.scale.set(window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight,window.innerWidth / window.innerHeight);
			*/
			camera.aspect = window.innerWidth / window.innerHeight;
		}
		camera.updateProjectionMatrix();
	}
}

function init() {
	initObjects();

	renderer = new THREE.WebGLRenderer({
		alpha: true,
		antialias: true
	});

	renderer.xr.enabled = true;
	renderer.autoClear = false;
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
	document.body.appendChild(VRButton.createButton(renderer));

	window.addEventListener("keydown", keyHandler.onKeyDown.bind(keyHandler), true);
	window.addEventListener("keyup", keyHandler.onKeyUp.bind(keyHandler), true);
	window.addEventListener("resize", onResize);

	renderer.setAnimationLoop(animate);
}

function render() {
	renderer.clear();
	renderer.render(scene, camera);

	if (isPaused) {
		renderer.clearDepth();
		renderer.render(scenePause, cameraPause);
	}
}

function animate() {
	delta = clock.getDelta();

	keyHandler.doKeyPress(delta);

	render();
}
