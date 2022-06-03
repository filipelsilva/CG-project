let removed = false;
let removeH1 = false;
let removeH2 = false;
let removeH3 = false;
let removeH4 = false;
let gToRemove;
let toRemove = [];
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
		if(removed){
			toRemove = [];
			removeH1 = false;
			removeH2 = false;
			removeH3 = false;
			removeH4 = false;
			removed = false;
		}
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
				toRemove.push(i);
				if (hToUse === this.h1){
					removeH1 = true;
				}
				else if (hToUse === this.h2){
					removeH2 = true;
				}
				else if (hToUse === this.h3){
					removeH3 = true;
				}
				else if (hToUse === this.h4){
					removeH4 = true;
				}
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
