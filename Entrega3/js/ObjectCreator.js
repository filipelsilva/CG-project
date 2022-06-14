class ObjectCreator {
	constructor() {
		this.group = new THREE.Group();
		this.palanque = this.createPalanque();
		this.floor = this.createFloor();
		//this.createObjects();
	}

	createPalanque() {
		let material, geometry, mesh;
		let group = new THREE.Group();
		material = new THREE.MeshStandardMaterial({ color: 0x994b00 });
		geometry = new THREE.BoxGeometry(900, 120, 120);
		mesh = new THREE.Mesh(geometry, material);
		group.add(mesh);
		material = new THREE.MeshStandardMaterial({ color: 0x884b00 });
		geometry = new THREE.BoxGeometry(600, 80, 120);
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0,-20,0);
		group.add(mesh);
		material = new THREE.MeshStandardMaterial({ color: 0x774b00 });
		geometry = new THREE.BoxGeometry(300, 40, 120);
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0,-40,0);
		group.add(mesh);
		return group;
	}

	createFloor() {
		let geometry, material;
		geometry = new THREE.PlaneGeometry(1000, 600);
		material = new THREE.MeshBasicMaterial({color: 0x555555, side: THREE.DoubleSide});
		return new THREE.Mesh(geometry, material);
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
