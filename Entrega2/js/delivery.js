class Garbage{

	constructor(C, distance, planet){
		this.h1 = new THREE.Group();
		this.h2 = new THREE.Group();
		this.h3 = new THREE.Group();
		this.h4 = new THREE.Group();

		this.r = C/2;
		let material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
		let geometry = new THREE.BoxGeometry((this.r*2)/Math.sqrt(3), (this.r*2)/Math.sqrt(3), (this.r*2)/Math.sqrt(3));
		
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
		geometry = new THREE.BoxGeometry((this.r*2)/Math.sqrt(3), (this.r*2)/Math.sqrt(3), (this.r*2)/Math.sqrt(3));
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0xced6d1 });
		geometry = new THREE.BoxGeometry((this.r*2)/Math.sqrt(3), (this.r*2)/Math.sqrt(3), (this.r*2)/Math.sqrt(3));
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
		geometry = new THREE.ConeGeometry(this.r, this.r, 30);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0xff00ff });
		geometry = new THREE.ConeGeometry(this.r, this.r, 30);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0x5568e0 });
		geometry = new THREE.ConeGeometry(this.r, this.r, 30);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0x1db51d});
		geometry = new THREE.ConeGeometry(this.r, this.r, 30);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
		geometry = new THREE.DodecahedronGeometry(this.r, 0);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);


		material = new THREE.MeshStandardMaterial({ color: 0xa15916 });
		geometry = new THREE.DodecahedronGeometry(this.r, 0);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0xbed45b });
		geometry = new THREE.DodecahedronGeometry(this.r, 0);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0x1db5a8 });
		geometry = new THREE.DodecahedronGeometry(this.r, 0);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0xa5f0eb });
		geometry = new THREE.IcosahedronGeometry(this.r, 0);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0xdc6df2});
		geometry = new THREE.IcosahedronGeometry(this.r, 0);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0xd4c65b});
		geometry = new THREE.IcosahedronGeometry(this.r, 0);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0x00ff3c});
		geometry = new THREE.OctahedronGeometry(this.r, 0);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0xff5e00});
		geometry = new THREE.OctahedronGeometry(this.r, 0);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0x591010});
		geometry = new THREE.OctahedronGeometry(this.r, 0);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0x00ffb3});
		geometry = new THREE.TetrahedronGeometry(this.r, 0);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0x8c00ff});
		geometry = new THREE.TetrahedronGeometry(this.r, 0);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);

		material = new THREE.MeshStandardMaterial({ color: 0xaadbe6});
		geometry = new THREE.TetrahedronGeometry(this.r, 0);
		this.body = new THREE.Mesh(geometry, material);
		this.setGarbagePosRot(this.body);

		this.addToSemiHemisphere(this.body);
	}

	addToSemiHemisphere(o){
		if (o.position.y >= 0 && o.position.x >= 0){
			this.h1.add(o);
		}
		else if (o.position.y >= 0 && o.position.x < 0){
			this.h2.add(o);
		}
		else if (o.position.y < 0 && o.position.x >= 0){
			this.h3.add(o);
		}
		else if (o.position.y < 0 && o.position.x < 0){
			this.h4.add(o);
		}
	}

	collides(o1, o2){
		let r_A;
		if(o1 === spaceship.getSpaceship()){
			r_A = H/2;
		}
		else{
			r_A = C;
		}
		r_A *=  spaceship.getSpaceship().scale.x;
		let r_B = C * spaceship.getSpaceship().scale.x;
		let min_distance = r_A + r_B;
		let c_Ax = o1.position.x;
		let c_Ay = o1.position.y;
		let c_Az = o1.position.z;
		let c_Bx = o2.position.x;
		let c_By = o2.position.y;
		let c_Bz = o2.position.z;
		let real_distance = Math.sqrt((c_Ax - c_Bx)**2 + (c_Ay - c_By)**2 + (c_Az - c_Bz)**2);
		if (min_distance >= real_distance){
			return true;
		}
		return false;
	}

	hasCollision(o){
		let hToUse;
		if (o.position.y >= 0 && o.position.x >= 0){
			hToUse = this.h1;
		}
		if (o.position.y >= 0 && o.position.x < 0){
			hToUse = this.h2;
		}
		if (o.position.y < 0 && o.position.x >= 0){
			hToUse = this.h3;
		}
		if (o.position.y < 0 && o.position.x < 0){
			hToUse = this.h4;
		}

		for (let i = hToUse.children.length-1; i >= 0; i--) {
			if (this.collides(o, hToUse.children[i])) {
				hToUse.remove(hToUse.children[i]);
			}
		}
	}

	getGarbage(){
		return this.garbage;
	}

	getGarbageItems(){
		return this.garbage.children;
	}

	getGarbageR(){
		return this.r;
	}

	setGarbagePosRot(body){
		let [x, y, z] = keyHandler.getCartesianCoordinates(
			distance,
			Math.random() * (Math.PI*2 - 0 + 1) + 0,
			Math.random() * (Math.PI*2 - 0 + 1) + 0
		);
		body.position.set(x, y, z);
		if(this.collides(spaceship.getSpaceship(), body)){
			this.setGarbagePosRot(body);
		}
		let hToUse;
		if (body.position.y >= 0 && body.position.x >= 0){
			hToUse = this.h1;
		}
		if (body.position.y >= 0 && body.position.x < 0){
			hToUse = this.h2;
		}
		if (body.position.y < 0 && body.position.x >= 0){
			hToUse = this.h3;
		}
		if (body.position.y < 0 && body.position.x < 0){
			hToUse = this.h4;
		}
		for (let o in hToUse.children){
			if (!this.collides(hToUse.children[o], body)){
				hToUse.add(body) ;
				body.rotation.x = Math.random() * Math.PI/2;
				body.rotation.y = Math.random() * Math.PI/2;
				body.rotation.z = Math.random() * Math.PI/2;
			}
			else this.setGarbagePosRot(body);
		}
	}
}
class KeyHandler {
	constructor() {
		this.keyMap = [];
		this.inverted = false;
		this.spaceshipCameraOn = false;
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
		if (code == 38 || code == 40) {
			this.inverted = false;
		}
	}

	clamp(number, minimum, maximum) {
		return Math.min(Math.max(number, minimum), maximum);
	}

	makeSafe(angle) {
		const epsilon = 0.01;
		let minusPi = angle - Math.PI;
		if (Math.abs(minusPi) < epsilon) {
			this.inverted = !this.inverted;
			spaceship.camera.up.set(0, keyHandler.inverted ? -1 : 1, 0);
			if (minusPi < 0) {
				return angle+epsilon;
			} else {
				return angle-epsilon;
			}
		} else if (Math.abs(angle) < epsilon) {
			this.inverted = !this.inverted;
			spaceship.camera.up.set(0, keyHandler.inverted ? -1 : 1, 0);
			if (angle < 0) {
				return angle+epsilon;
			} else {
				return angle-epsilon;
			}
		}
		return angle;
	}

	getPolarCoordinates(x, y, z) {
		let radius = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
		let phi = 0;
		let theta = 0;

		if (radius !== 0) {
			theta = Math.atan2(x, z);
			phi = Math.acos(this.clamp(y / radius, - 1, 1));
		}

		return [radius, phi, theta]
	}

	getCartesianCoordinates(radius, phi, theta) {
		let x = Math.sin(phi) * radius * Math.sin(theta);
		let y = Math.cos(phi) * radius;
		let z = Math.sin(phi) * radius * Math.cos(theta);
		return [x, y, z];
	}

	// Handler for the movement of the objects.
	doKeyPress(delta) {
		let [radius, phi, theta] = this.getPolarCoordinates(
			spaceship.getSpaceship().position.x,
			spaceship.getSpaceship().position.y,
			spaceship.getSpaceship().position.z
		);

		let newPhi = 0;
		let newTheta = 0;

		if (this.keyMap[37]) { // left
			spaceship.left = true;
			if (this.inverted) {
				newTheta += Math.PI/8;
			}
			else {
				newTheta -= Math.PI/8;
			}
			spaceship.rotate = false;
		}

		if (this.keyMap[38]) { // up
			spaceship.up = true;
			if (this.inverted) {
				newPhi += Math.PI/8;
			} else {
				newPhi -= Math.PI/8;
			}
			spaceship.rotate = false;
		}

		if (this.keyMap[39]) { // right
			spaceship.right = true;
			if (this.inverted) {
				newTheta -= Math.PI/8;
			}
			else {
				newTheta += Math.PI/8;
			}
			spaceship.rotate = false;
		}

		if (this.keyMap[40]) { // down
			spaceship.down = true;
			if (this.inverted) {
				newPhi -= Math.PI/8;
				spaceship.rotate = true;
			} else {
				newPhi += Math.PI/8;
				spaceship.rotate = false;
			}
		}

		let normalized = new THREE.Vector2(newPhi * delta, newTheta * delta);
		normalized.normalize();
		normalized.divideScalar(100);

		newPhi = normalized.x;
		newTheta = normalized.y;

		let [newX, newY, newZ] = this.getCartesianCoordinates(
			radius,
			this.makeSafe(phi + newPhi),
			theta + newTheta
		);

		spaceship.getSpaceship().position.set(newX, newY, newZ);

		garbage.hasCollision(spaceship.getSpaceship());
	}

	// Handler for toggles, e.g. axesHelper.
	doOneTimeEvent(code) {
		switch (code) {
			case 69:  // E
			case 101: // e
				axes.visible = !axes.visible;
				spaceship.axes.visible = !spaceship.axes.visible;
				break;
			case 49: // 1
				scene.activeCamera = sceneCreator.cameras[0];
				camera = scene.activeCamera;
				this.spaceshipCameraOn = false;
				onResize();
				break;
			case 50: // 2
				scene.activeCamera = sceneCreator.cameras[1];
				camera = scene.activeCamera;
				this.spaceshipCameraOn = false;
				onResize();
				break;
			case 51: // 3
				scene.activeCamera = spaceship.camera;
				camera = scene.activeCamera;
				this.spaceshipCameraOn = true;
				onResize();
				break;
			default:
				return false;
		}
		return true;
	}
}
class Planet {
	constructor(R) {
		let material = new THREE.MeshStandardMaterial({ color: 0x1aa9d9 });
		let geometry = new THREE.SphereGeometry(R, 32, 16);
		this.planet = new THREE.Mesh(geometry, material);
		this.planet.position.set(0, 0, 0);
		this.planet.rotation.y = -Math.PI/2 - 0.9;
		this.planet.rotation.x = Math.PI/16;
	}

	getPlanet(){
		return this.planet;
	}
}
class SceneCreator {
	constructor() {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0x020122);
		this.cameras = [this.createOrthographicCamera(), this.createPerspectiveCamera()];
		this.scene.activeCamera = this.cameras[0];
		this.axes = this.createAxes();
		this.createLights();
		this.cameras.forEach((cam) => this.scene.add(cam));
	}

	createAxes() {
		this.axes = new THREE.AxesHelper(1000);
		this.axes.visible = false;
		this.scene.add(this.axes);
		return this.axes;
	}

	createLights() {
		const light1 = new THREE.DirectionalLight(0xffffff, 1);
		light1.position.set(1000, 1000, 1000);
		light1.castShadow = true;
		this.scene.add(light1);

		const light2 = new THREE.DirectionalLight(0xffffff, 1);
		light2.position.set(-1000, 1000, -1000);
		light2.castShadow = true;
		this.scene.add(light2);

		const light3 = new THREE.DirectionalLight(0xffffff, 1);
		light3.position.set(0, -500, 0);
		light3.castShadow = true;
		this.scene.add(light3);
	}

	createOrthographicCamera() {
		let camera = new THREE.OrthographicCamera(
			window.innerWidth/-2,
			window.innerWidth/2,
			window.innerHeight/2,
			window.innerHeight/-2,
			-1000,
			1000
		);
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
		camera.position.y = 0;
		camera.position.z = 500;
		camera.lookAt(this.scene.position);
		return camera;
	}
}
class Spaceship {
	constructor(H, distance, planet) {
		let bodyRadius = 3;
		let r = H;
		// H spaceship height

		// 4H/6
		let material = new THREE.MeshStandardMaterial({ color: 0xcccccc });
		let geometry = new THREE.CylinderGeometry(bodyRadius, bodyRadius, 4*H/6, 30);
		this.body = new THREE.Mesh(geometry, material);
		//this.body.position.set(0, 0, 0);

		// H/6
		material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
		geometry = new THREE.CylinderGeometry(bodyRadius/4, bodyRadius, H/6, 30);
		this.nose = new THREE.Mesh(geometry, material);
		this.nose.position.set(0, (4*H/6)/2 + (H/6)/2, 0);
		this.body.add(this.nose);

		// H/6
		this.capsules = new THREE.Group();

		material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
		geometry = new THREE.CapsuleGeometry((H/6)/2, (H/6)/2, 6, 9);

		let capsule = new THREE.Mesh(geometry, material);
		capsule.position.set(bodyRadius/Math.sqrt(2), -((4*H/6)/2) - (H/6)/2, bodyRadius/Math.sqrt(2));
		this.capsules.add(capsule);

		capsule = new THREE.Mesh(geometry, material);
		capsule.position.set(bodyRadius/Math.sqrt(2), -((4*H/6)/2) - (H/6)/2, -bodyRadius/Math.sqrt(2));
		this.capsules.add(capsule);

		capsule = new THREE.Mesh(geometry, material);
		capsule.position.set(-bodyRadius/Math.sqrt(2), -((4*H/6)/2) - (H/6)/2, bodyRadius/Math.sqrt(2));
		this.capsules.add(capsule);

		capsule = new THREE.Mesh(geometry, material);
		capsule.position.set(-bodyRadius/Math.sqrt(2), -((4*H/6)/2) - (H/6)/2, -bodyRadius/Math.sqrt(2));
		this.capsules.add(capsule);

		this.body.add(this.capsules);

		this.spaceship = new THREE.Object3D();
		this.spaceship.add(this.body);

		this.axes = new THREE.AxesHelper(100);
		this.axes.visible = false;
		this.spaceship.add(this.axes);

		// Random position with correct distance
		this.spaceship.position.set(...keyHandler.getCartesianCoordinates(distance, Math.random() * (Math.PI*2 - 0 + 1) + 0, Math.random() * (Math.PI*2 - 0 + 1) + 0));

		// Create Spaceship camera
		this.camera = this.createSpaceshipCamera(H, distance);
		this.spaceship.add(this.camera);
		this.camera.position.set(0, -30, -60);
		let nosePosition = new THREE.Vector3();
		this.nose.getWorldPosition(nosePosition);
		let vec = new THREE.Vector3();
		this.camera.getWorldPosition(vec);
		this.camera.lookAt(nosePosition.x, nosePosition.y, nosePosition.z);
		if(vec.y < 0){
			this.camera.up.set(0, -1, 0);
		}
		this.camera.updateProjectionMatrix();

		this.spaceship.lookAt(planet.getPlanet().position);

		// Random direction
		this.spaceship.rotateOnAxis(new THREE.Vector3(0,0,1).normalize(), Math.random() * (Math.PI*2 - 0 + 1) + 0);

		// Moving
		this.up = false;
		this.down = false;
		this.left = false;
		this.right = false;
		this.rotate = false;

		this.lastUp = false;
		this.lastDown = false;
		this.lastLeft = false;
		this.lastRight = false;
	}

	getSpaceship(){
		return this.spaceship;
	}

	getSpaceshipR(){
		return this.r/2;
	}

	getSpaceshipCenter(){
		return this.spaceship.position.toArray();
	}

	createSpaceshipCamera(H, distance){
		let camera = new THREE.PerspectiveCamera(
			70,
			window.innerWidth / window.innerHeight,
			1,
			10000
		);
		return camera;
	}

	clearLast(){
		this.lastUp = false;
		this.lastDown = false;
		this.lastLeft = false;
		this.lastRight = false;
	}

	lastDirection(){
		let moved = false;
		if (this.rotate){
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI);
			this.rotate = false;
		}
		if (!moved && this.lastUp && this.lastLeft) {
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/4);
			moved = true;
		}
		if (!moved && this.lastUp && this.lastRight) {
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/4);
			moved = true;
		}
		if (!moved && this.lastDown && this.lastLeft) {
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI + Math.PI/4);
			moved = true;
		}
		if (!moved && this.lastDown && this.lastRight) {
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI - Math.PI/4);
			moved = true;
		}
		if (!moved && this.lastUp) {
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI);
			moved = true;
		}
		if (!moved && this.lastDown) {
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI);
			moved = true;
		}
		if (!moved && this.lastLeft) {
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
			moved = true;
		}
		if (!moved && this.lastRight) {
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
			moved = true;
		}

	}

	setDirection(){
		let moved = false;
		if (this.rotate){
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI);
		}
		if (!moved && this.up && this.left) {
			this.clearLast();
			this.lastUp = true;
			this.lastLeft = true;
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/4);
			moved = true;
		}
		if (!moved && this.up && this.right) {
			this.clearLast();
			this.lastUp = true;
			this.lastRight = true;
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/4);
			moved = true;
		}
		if (!moved && this.down && this.left) {
			this.clearLast();
			this.lastDown = true;
			this.lastLeft = true;
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI + Math.PI/4);
			moved = true;
		}
		if (!moved && this.down && this.right) {
			this.clearLast();
			this.lastDown = true;
			this.lastRight = true;
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI - Math.PI/4);
			moved = true;
		}
		if (!moved && keyHandler.inverted) {
			this.clearLast();
			this.lastUp = true;
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI);
			moved = true;
		}
		if (!moved && this.up && !keyHandler.inverted) {
			this.clearLast();
			moved = true;
		}
		if (!moved && this.down) {
			this.clearLast();
			this.lastDown = true;
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI);
			moved = true;
		}
		if (!moved && this.left) {
			this.clearLast();
			this.lastLeft = true;
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI/2);
			moved = true;
		}
		if (!moved && this.right) {
			this.clearLast();
			this.lastRight = true;
			this.spaceship.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI/2);
			moved = true;
		}
		if (!moved) {
			this.lastDirection();
		}
		this.up = false;
		this.down = false;
		this.left = false;
		this.right = false;
	}
}
'use strict';

let R = 200;
let distance = 1.2*R;
let H = R/11; // R/12 < H < R/10
let C = R/22; // R/24 < C < R/20

let clock = new THREE.Clock();
let delta = 0;

let keyHandler = new KeyHandler();

let planet = new Planet(R);

let spaceship = new Spaceship(H, distance, planet);

let garbage = new Garbage(C, distance, planet);

let sceneCreator = new SceneCreator();
let scene = sceneCreator.scene;
let camera = scene.activeCamera;
let axes = sceneCreator.axes;

let renderer;

scene.add(planet.getPlanet());
scene.add(spaceship.getSpaceship());
scene.add(garbage.h1, garbage.h2, garbage.h3, garbage.h4);

planet.getPlanet().add(garbage.h1);
planet.getPlanet().add(garbage.h2);
planet.getPlanet().add(garbage.h3);
planet.getPlanet().add(garbage.h4);
planet.getPlanet().add(spaceship.getSpaceship());

function onResize() {
	renderer.setSize(window.innerWidth, window.innerHeight);

	if (window.innerHeight > 0 && window.innerWidth > 0) {
		if (camera === sceneCreator.cameras[0]){
			camera.left = window.innerWidth/-2;
			camera.right = window.innerWidth/2;
			camera.top = window.innerHeight/2;
			camera.bottom = window.innerHeight/-2;
		}
		else{
			camera.aspect = window.innerWidth / window.innerHeight;
		}
		camera.updateProjectionMatrix();
	}
}

function init() {
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});

	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	window.addEventListener("keydown", keyHandler.onKeyDown.bind(keyHandler), true);
	window.addEventListener("keyup", keyHandler.onKeyUp.bind(keyHandler), true);
	window.addEventListener("resize", onResize);
}

function update(delta) {
	keyHandler.doKeyPress(delta);
	spaceship.getSpaceship().lookAt(planet.getPlanet().position);
	spaceship.setDirection();
	let nosePosition = new THREE.Vector3();
	spaceship.nose.getWorldPosition(nosePosition);
	spaceship.camera.updateProjectionMatrix();
}

function animate() {
	delta = clock.getDelta();

	update(delta);

	renderer.render(scene, camera);

	requestAnimationFrame(animate);
}
