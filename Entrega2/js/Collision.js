class Collision{
	constructor(garbage){
		this.h1 = new THREE.Group();
		this.h2 = new THREE.Group();
		this.h3 = new THREE.Group();
		this.h4 = new THREE.Group();
		let list = garbage.garbage.children;
		for (let i = list.length-1; i >=0; i--) {
			if (list[i].position.y >= 0 && list[i].position.x >= 0){
				this.h1.add(list[i]);
			}
			else if (list[i].position.y >= 0 && list[i].position.x < 0){
				this.h2.add(list[i]);
			}
			else if (list[i].position.y < 0 && list[i].position.x >= 0){
				this.h3.add(list[i]);
			}
			else if (list[i].position.y < 0 && list[i].position.x < 0){
				this.h4.add(list[i]);
			}
		}
	}

	hasCollision(spaceship_font, garbage_font, h, c){
		let spaceship = spaceship_font.getSpaceship();
		let garbage = garbage_font.getGarbage();
		let r_A = h/2;

		let r_B = c;

		let r_sum = (r_A + r_B)**2;
		let c_A = spaceship.position.toArray();
		let c_Ax = c_A[0];
		let c_Ay = c_A[1];
		let c_Az = c_A[2];
		let items = garbage_font.getGarbageItems();

		let hToUse;
		if (spaceship.position.y >= 0 && spaceship.position.x >= 0){
			hToUse = this.h1;
		}
		if (spaceship.position.y >= 0 && spaceship.position.x < 0){
			hToUse = this.h2;
		}
		if (spaceship.position.y < 0 && spaceship.position.x >= 0){
			hToUse = this.h3;
		}
		if (spaceship.position.y < 0 && spaceship.position.x < 0){
			hToUse = this.h4;
		}

		for (let i = hToUse.children.length-1; i >= 0; i--) {
			let c_Bx = hToUse.children[i].position.x;
			let c_By = hToUse.children[i].position.y;
			let c_Bz = hToUse.children[i].position.z;
			let c_sum = (c_Ax - c_Bx)**2 + (c_Ay - c_By)**2 + (c_Az - c_Bz)**2

			if (r_sum >= c_sum){
				hToUse.remove(hToUse.children[i]);
			}
		}
	}
}
