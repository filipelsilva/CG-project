class ObjectCreator {
	constructor() {
		this.group = new THREE.Group();
		this.palanque = this.createPalanque();
		this.floor = this.createFloor();
		this.createObjects();
	}

	createPalanque() {
		let material, geometry, mesh;
		let group = new THREE.Group();
		material = new THREE.MeshPhongMaterial({color: 0x994b00});
		geometry = new THREE.BoxGeometry(1200, 120, 600);
		mesh = new THREE.Mesh(geometry, material);
		group.add(mesh);
		material = new THREE.MeshPhongMaterial({color: 0x994b00});
		geometry = new THREE.BoxGeometry(900, 80, 120);
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0,-20,360);
		group.add(mesh);
		material = new THREE.MeshPhongMaterial({color: 0x994b00});
		geometry = new THREE.BoxGeometry(600, 40, 120);
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0,-40,420);
		group.add(mesh);
		return group;
	}

	createFloor() {
		let geometry, material;
		geometry = new THREE.PlaneGeometry(15000, 10000);
		material = new THREE.MeshPhongMaterial({color: 0x555555, side: THREE.DoubleSide});
		let floor = new THREE.Mesh(geometry, material);
		floor.rotation.x = Math.PI/2;
		floor.position.set(0,-60,0);
		return floor;
	}

	createObjects() {
		let material, geometry, vertices;
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
		geometry.computeVertexNormals();
		geometry.normalizeNormals();
		material = new THREE.MeshPhongMaterial( { color: 0xff0000, side: THREE.DoubleSide});
		objects[0] = new THREE.Mesh( geometry, material );

		objects[0].position.set(-300, 300, 0);
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
		geometry.computeVertexNormals();
		geometry.normalizeNormals();
		material = new THREE.MeshPhongMaterial( { color: 0x00ff00, side: THREE.DoubleSide } );
		objects[1] = new THREE.Mesh( geometry, material );

		objects[1].position.set(0, 300, 0);
		objects[1].scale.set(2,2,2);

		geometry = new THREE.BufferGeometry();
		vertices = new Float32Array( [
			-50.0, 0.0,  0.0,
			-15.24, -33.14, 20.0,
			50, 0.0, 0.0,

			-15.24, -33.14, 20.0,
			41.09, -21.20,  20.0,
			50, 0.0, 0.0,

			-50.0, 0.0,  0.0,
			-15.24, -33.14, -20.0,
			50, 0.0, 0.0,

			-15.24, -33.14, -20.0,
			41.09, -21.20,  -20.0,
			50, 0.0, 0.0,

			-15.24, -33.14, 20.0,
			41.09, -21.20,  20.0,
			0.0, 0.0, 25.0,

			0.0, 0.0, 25.0,
			41.09, -21.20,  20.0,
			50.0, 0, 25.0,

			-15.24, -33.14, -20.0,
			41.09, -21.20,  -20.0,
			0.0, 0.0, -25.0,

			0.0, 0.0, -25.0,
			41.09, -21.20,  -20.0,
			50.0, 0, -25.0,

			0.0, 0.0, 25.0,
			9.28, -27.17, 25.0,
			41.09, -21.20,  25.0,

			0.0, 0.0, 25.0,
			41.09, -21.20,  25.0,
			50.0, 0, 25.0,

			0.0, 0.0, -25.0,
			9.28, -27.17, -25.0,
			41.09, -21.20,  -25.0,

			0.0, 0.0, -25.0,
			41.09, -21.20, -25.0,
			50.0, 0, -25.0,

			9.28, 32.47, 15.0,
			41.09, -21.20, 25.0,
			50.0, 0, 25.0,

			9.28, 32.47, 15.0,
			50.0, 0, 25.0,
			15.24, 40.42, 0.0,

			9.28, 32.47, -15.0,
			41.09, -21.20, -25.0,
			50.0, 0, -25.0,

			9.28, 32.47, -15.0,
			50.0, 0, -25.0,
			15.24, 40.42, 0.0,

			15.24, 40.42, 0.0,
			9.28, 32.47, 15.0,
			50.0, 26.21, 0.0,

			15.24, 40.42, 0.0,
			9.28, 32.47, -15.0,
			50.0, 26.21, 0.0,
			
		] );
		geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
		geometry.computeVertexNormals();
		geometry.normalizeNormals();
		material = new THREE.MeshPhongMaterial( { color: 0x0000ff, side: THREE.DoubleSide } );
		objects[2] = new THREE.Mesh( geometry, material );

		objects[2].position.set(300, 300, 0);
		objects[2].scale.set(4,4,4);

		objects.map(obj => {
			this.group.add(obj);
		});
	}
}
