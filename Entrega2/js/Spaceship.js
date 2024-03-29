class Spaceship {
	constructor(H, distance, planet) {
		let bodyRadius = 3;
		// H -> spaceship height

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
		this.camera = this.createSpaceshipCamera();
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

	createSpaceshipCamera(){
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
