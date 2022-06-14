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
		/*this.articulate = this.createArticulateObject();*/
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
		material = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
		objects[0] = new THREE.Mesh( geometry, material );

		objects[0].position.set(-350, 0 ,0);

		geometry = new THREE.BufferGeometry();
		vertices = new Float32Array( [
			0.0, -100.0,  0.0,
			0.0,  100.0,  0.0,
			-33.136 , 66.26,  0.0
			
			
			/*-50, 0,  -30,
			0, -50,  0,
			0,  50,  0*/
	
		] );
		geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
		material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
		objects[1] = new THREE.Mesh( geometry, material );

		objects[1].position.set(0, 0 ,0);

		objects.map(obj => {
			this.group.add(obj);
		});
	}
}
