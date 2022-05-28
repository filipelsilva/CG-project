class Spaceship {
	constructor(H, distance, planet) {
		let bodyRadius = 3;

		// H spaceship height

		// 4H/6
		let material = new THREE.MeshStandardMaterial({ color: 0xcccccc });
		let geometry = new THREE.CylinderGeometry(bodyRadius, bodyRadius, 4*H/6, 30);
		this.body = new THREE.Mesh(geometry, material);
		this.body.position.set(0, 0, 0);
		
		// H/6
		material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
		geometry = new THREE.CylinderGeometry(bodyRadius, bodyRadius, H/6, 30);
		this.nose = new THREE.Mesh(geometry, material);
		this.nose.position.set(0, (4*H/6)/2 + (H/6)/2, 0);
		this.body.add(this.nose);

		// H/6
		this.capsules = new THREE.Group();

		material = new THREE.MeshStandardMaterial({ color: 0xffffff });
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

		//this.axes = new THREE.AxesHelper(100);
		//this.axes.visible = true;

		this.spaceship = new THREE.Object3D();
		this.spaceship.add(this.body);
		this.spaceship.add(this.axes);
		
		// Random position with correct distance
		let x, y, z = 0;
		while (x == 0 || y == 0 || z == 0){
			x = Math.random() * (Math.random() > 0.5) ? 1 : -1;
			y = Math.random() * (Math.random() > 0.5) ? 1 : -1;
			z = Math.random() * (Math.random() > 0.5) ? 1 : -1;
		}
		let vector = new THREE.Vector3(x, y, z);
		vector.normalize().multiplyScalar(distance);
		this.spaceship.position.set(vector.x, vector.y, vector.z);
		this.spaceship.lookAt(planet.getPlanet().position);
		
		// Random direction
		this.spaceship.rotateOnAxis(new THREE.Vector3(0,0,1).normalize(), Math.random() * (Math.PI*2 - 0 + 1) + 0);
	}

	getSpaceship(){
		return this.spaceship;
	}
}
