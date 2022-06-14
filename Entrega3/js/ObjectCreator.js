class ObjectCreator {
	constructor() {
		this.group = new THREE.Group();

		//this.palanque = this.createPalanque();
		
		//this.floor = this.createFloor();
		this.createObjects();
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
		let material, geometry, path, vertices;
		let objects = [];

		geometry = new THREE.BufferGeometry();
		vertices = new Float32Array( [
			0, -100,  0,
			100 , 0,  -30,
			0,  100,  0,
			
			-100, 0,  -30,
			0, -100,  0,
			0,  100,  0
	
		] );
		geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
		material = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
		objects[0] = new THREE.Mesh( geometry, material );

		objects[0].position.set(-350, 0 ,0);

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
			0.0,  56.98,  10.0,

			0.0, -100.0,  0.0,
			29.3 , 42.41,  0.0,
			0.0,  56.98,  10.0,

			0.0, -100.0,  0.0,
			0.0,  56.98,  10.0,
			-33.136 , 66.26,  0.0,

			0.0, -100.0,  0.0,
			0.0,  56.98,  10.0,
			-29.3 , 42.41,  0.0,
			
			0.0, -100.0, 0.0,
			29.3, 42.41, 0.0,
			0.0, 42.41, -10.0,

			0.0, -100.0, 0.0,
			0.0, 42.41, -10.0,
			-29.3, 42.41, 0.0
			
		] );
		geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
		material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		objects[1] = new THREE.Mesh( geometry, material );

		objects[1].position.set(0, 0 ,0);

		objects.map(obj => {
			this.group.add(obj);
		});
	}
}
