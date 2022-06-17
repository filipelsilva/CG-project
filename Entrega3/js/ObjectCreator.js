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
