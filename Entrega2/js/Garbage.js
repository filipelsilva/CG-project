class Garbage{

    constructor(C, distance, planet){

        let usedpos = [];
        let material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
		let geometry = new THREE.BoxGeometry(C, C, C);
        let r = C;
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage = new THREE.Object3D();
        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
		geometry = new THREE.BoxGeometry(C, C, C);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0xced6d1 });
		geometry = new THREE.BoxGeometry(C, C, C);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
		geometry = new THREE.ConeGeometry(C, C, 30);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0xff00ff });
		geometry = new THREE.ConeGeometry(C, C, 30);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0x5568e0 });
		geometry = new THREE.ConeGeometry(C, C, 30);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0x1db51d});
		geometry = new THREE.ConeGeometry(C, C, 30);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
		geometry = new THREE.DodecahedronGeometry(C, 0);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);


        material = new THREE.MeshStandardMaterial({ color: 0xa15916 });
		geometry = new THREE.DodecahedronGeometry(C, 0);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0xbed45b });
		geometry = new THREE.DodecahedronGeometry(C, 0);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0x1db5a8 });
		geometry = new THREE.DodecahedronGeometry(C, 0);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0xa5f0eb });
		geometry = new THREE.IcosahedronGeometry(C, 0);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0xdc6df2});
		geometry = new THREE.IcosahedronGeometry(C, 0);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0xd4c65b});
		geometry = new THREE.IcosahedronGeometry(C, 0);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0x00ff3c});
		geometry = new THREE.OctahedronGeometry(C, 0);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0xff5e00});
		geometry = new THREE.OctahedronGeometry(C, 0);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0x591010});
		geometry = new THREE.OctahedronGeometry(C, 0);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0x00ffb3});
		geometry = new THREE.TetrahedronGeometry(C, 0);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0x8c00ff});
		geometry = new THREE.TetrahedronGeometry(C, 0);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);

        material = new THREE.MeshStandardMaterial({ color: 0xaadbe6});
		geometry = new THREE.TetrahedronGeometry(C, 0);
		this.body = new THREE.Mesh(geometry, material);
        this.setGarbagePosRot(this.body, usedpos);

        this.garbage.add(this.body);
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

    setGarbagePosRot(body, usedpos){
        body.position.set(...keyHandler.getCartesianCoordinates(distance, Math.random() * (Math.PI*2 - 0 + 1) + 0, Math.random() * (Math.PI*2 - 0 + 1) + 0));
        if(!(body.position in usedpos)){
            usedpos +=body.position;
            body.rotation.x = Math.random() * Math.PI/2;
            body.rotation.y = Math.random() * Math.PI/2;
            body.rotation.z = Math.random() * Math.PI/2;
        }
        else this.setGarbagePosRot(body, usedpos);
    }
}
