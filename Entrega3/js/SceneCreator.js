class SceneCreator {
	constructor() {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0x020122);
		this.camera = this.createPerspectiveCamera();
		this.scene.add(this.camera);
		this.globalLight = this.createLight();
		this.spotlights;
		this.scenePause = new THREE.Scene();
		this.cameraPause = this.createCamera();
		this.scenePause.add(this.cameraPause);
	}

	createLight() {
		const light = new THREE.DirectionalLight(0xffffff, 1);
		light.position.set(0, 1000, -1000);
		light.castShadow = true;
		light.target = this.scene;
		this.scene.add(light);
		return light;
	}

	createSpotlights(objects) {
		let light;
		let group = new THREE.Group();
		light = new THREE.SpotLight(0xffffff, 0.6);
		light.castShadow = true;
		light.position.set(-300, 1000, 600);
		light.angle = Math.PI/16;
		light.target = objects.children[0];
		group.add(light);
		light = new THREE.SpotLight(0xffffff, 0.6);
		light.castShadow = true;
		light.position.set(0, 1000, 600);
		light.angle = Math.PI/16;
		light.target = objects.children[1];
		group.add(light);
		light = new THREE.SpotLight(0xffffff, 0.6);
		light.castShadow = true;
		light.position.set(300, 1000, 600);
		light.angle = Math.PI/16;
		light.target = objects.children[2];
		group.add(light);
		let material, geometry, mesh;
		let spotlight = new THREE.Group();
		material = new THREE.MeshStandardMaterial({color: 0x666666});
		material.castShadow = true;
		geometry = new THREE.SphereGeometry(30, 20 ,20);
		mesh = new THREE.Mesh(geometry, material);
		spotlight.add(mesh);
		geometry = new THREE.ConeGeometry(30, 70, 4);
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0,-55,0);
		spotlight.add(mesh);
		spotlight.position.set(-300, 650, 600);
		spotlight.lookAt(...objects.children[0].position);
		group.add(spotlight);
		spotlight = new THREE.Group();
		geometry = new THREE.SphereGeometry(30, 20 ,20);
		mesh = new THREE.Mesh(geometry, material);
		spotlight.add(mesh);
		geometry = new THREE.ConeGeometry(30, 70, 4);
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0,-55,0);
		spotlight.add(mesh);
		spotlight.position.set(0, 650, 600);
		spotlight.lookAt(...objects.children[1].position);
		group.add(spotlight);
		spotlight = new THREE.Group();
		geometry = new THREE.SphereGeometry(30, 20 ,20);
		mesh = new THREE.Mesh(geometry, material);
		spotlight.add(mesh);
		geometry = new THREE.ConeGeometry(30, 70, 4);
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0,-55,0);
		spotlight.add(mesh);
		spotlight.position.set(300, 650, 600);
		spotlight.lookAt(...objects.children[2].position);
		group.add(spotlight);
		this.scene.add(group);
		return group;
	}

	createCamera() {
		return new THREE.OrthographicCamera(
			window.innerWidth/-2,
			window.innerWidth/2,
			window.innerHeight/2,
			window.innerHeight/-2,
			-1000,
			1000
		);
	}

	createPerspectiveCamera() {
		let camera = new THREE.PerspectiveCamera(
			70,
			window.innerWidth / window.innerHeight,
			1,
			10000
		);
		camera.position.x = 0;
		camera.position.y = 300;
		camera.position.z = 1500;
		camera.lookAt(this.scene.position);
		return camera;
	}
}
