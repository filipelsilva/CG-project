class CustomSinCurve extends THREE.Curve {
	constructor(scale = 1) {
		super();
		this.scale = scale;
	}

	getPoint(t, optionalTarget = new THREE.Vector3()) {
		const tx = t * 3 - 1.5;
		const ty = Math.sin(Math.PI/1.1 * t);
		const tz = 0;
		return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
	}
}

class ObjectCreator {
	constructor() {
		this.group = new THREE.Group();
		this.articulate = this.createArticulateObject();
		this.createObjects();
	}

	createArticulateObject() {
		let material, geometry;
		let obj1, obj2_1, obj2_2, obj3;

		// avô
		material = new THREE.MeshStandardMaterial({ color: 0xffb700 });
		geometry = new THREE.BoxGeometry(110, 110, 110);
		obj1 = new THREE.Mesh(geometry, material);

		obj1.position.set(0, 0, 0);
		obj1.rotation.z = Math.PI/4;
		obj1.rotation.x = Math.PI/4;

		// pai1
		material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
		geometry = new THREE.SphereGeometry(60, 20, 20);
		obj2_1 = new THREE.Mesh(geometry, material);

		obj2_1.position.set(-100, -270, 0);

		// pai2
		material = new THREE.MeshStandardMaterial({ color: 0xffffff });
		geometry = new THREE.TorusGeometry(120, 11, 30, 30);
		obj2_2 = new THREE.Mesh(geometry, material);

		obj2_2.position.set(0, 0, 0);
		obj2_2.rotation.x = -Math.PI/2.5;
		obj2_2.rotation.y = Math.PI/4;

		// neto
		material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
		geometry = new THREE.ConeGeometry(25, 100, 50);
		obj3 = new THREE.Mesh(geometry, material);

		obj3.position.set(80, -70, 0);

		obj2_1.add(obj3);
		obj1.add(obj2_1);
		obj1.add(obj2_2);

		this.group.add(obj1);
		return obj1;
	}

	createObjects() {
		let material, geometry, path;
		let objects = [];

		material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
		geometry = new THREE.OctahedronGeometry(120, 0);
		objects.push(new THREE.Mesh(geometry, material));

		objects[0].position.set(-400, -170, 100);
		objects[0].rotation.z = Math.PI/3;

		material = new THREE.MeshStandardMaterial({ color: 0xfffb00 });
		geometry = new THREE.SphereGeometry(75, 20 ,20);
		objects.push(new THREE.Mesh(geometry, material));

		objects[1].position.set(100, 220, -240);

		material = new THREE.MeshStandardMaterial({ color: 0x00ffff });
		geometry = new THREE.IcosahedronGeometry(120, 0);
		objects.push(new THREE.Mesh(geometry, material));

		objects[2].position.set(350, 100, 100);

		material = new THREE.MeshStandardMaterial({ color: 0xfc01a8 });
		geometry = new THREE.SphereGeometry(35, 20 ,20);
		objects.push(new THREE.Mesh(geometry, material));

		objects[3].position.set(-100, -220, 30);

		material = new THREE.MeshStandardMaterial({ color: 0x82877e });
		geometry = new THREE.SphereGeometry(110, 20 ,20);
		objects.push(new THREE.Mesh(geometry, material));

		objects[4].position.set(-330, 130, -250);

		material = new THREE.MeshStandardMaterial({ color: 0xff2f00 });
		geometry = new THREE.CylinderGeometry(10, 10, 650, 50);
		objects.push(new THREE.Mesh(geometry, material));

		objects[5].position.set(350, -270, -100);
		objects[5].rotation.z = -(Math.PI / 2.2);

		material = new THREE.MeshStandardMaterial({ color: 0x01fc93 });
		geometry = new THREE.CylinderGeometry(25, 25, 650, 50);
		objects.push(new THREE.Mesh(geometry, material));

		objects[6].position.set(600, 0, -250);
		objects[6].rotation.z = -(Math.PI / 25);

		material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
		geometry = new THREE.ConeGeometry(45, 150, 4);
		objects.push(new THREE.Mesh(geometry, material));

		objects[7].position.set(-420, 75, -110);
		objects[7].rotation.z = -1.2*(Math.PI / 4) ;

		material = new THREE.MeshStandardMaterial({ color: 0xff008c });
		path = new CustomSinCurve( 250 );
		geometry = new THREE.TubeGeometry(path, 30, 8, 13);
		objects.push(new THREE.Mesh(geometry, material));

		objects[8].position.set(-365, 25, 0);
		objects[8].rotation.z = 0.7*Math.PI/4

		material = new THREE.MeshStandardMaterial({ color: 0x6057ff });
		geometry = new THREE.CylinderGeometry(70, 30, 120, 13);
		objects.push(new THREE.Mesh(geometry, material));

		objects[9].position.set(-180, -100, 0);
		objects[9].rotation.z = -1.2*Math.PI/6

		material = new THREE.MeshStandardMaterial({ color: 0xff57cd });
		geometry = new THREE.OctahedronGeometry(70, 0);
		objects.push(new THREE.Mesh(geometry, material));

		objects[10].position.set(400, -130, 100);
		objects[10].rotation.z = -1.6*Math.PI /3;
		objects[10].rotation.z = -1.6*Math.PI /2;

		material = new THREE.MeshStandardMaterial({ color: 0xc1c1c1 });
		geometry = new THREE.BoxGeometry(80, 80, 80 );
		objects.push(new THREE.Mesh(geometry, material));

		objects[11].position.set(510, 250, 300);
		objects[11].rotation.z = -1.6*Math.PI /3;
		objects[11].rotation.z = -1.6*Math.PI /2;

		objects.map(obj => {
			this.group.add(obj);
		});
	}
}
