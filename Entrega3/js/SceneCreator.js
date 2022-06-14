class SceneCreator {
	constructor() {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0x020122);
		this.camera = this.createPerspectiveCamera();
		this.axes = this.createAxes();
		this.globalLight = this.createLight();
		this.spotlights;
	}

	createAxes() {
		this.axes = new THREE.AxesHelper(100);
		this.axes.visible = false;
		this.scene.add(this.axes);
		return this.axes;
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
		light.position.set(-225, 1000, 0);
		light.angle = Math.PI/16;
		light.target = objects.children[0];
		group.add(light);
		light = new THREE.SpotLight(0xffffff, 0.6);
		light.castShadow = true;
		light.position.set(0, 1000, 0);
		light.angle = Math.PI/16;
		light.target = objects.children[1];
		group.add(light);
		/*
		light = new THREE.SpotLight(0xffffff, 0.6);
		light.castShadow = true;
		light.position.set(225, 1000, 0);
		light.angle = Math.PI/16;
		light.target = objects.children[2];
		group.add(light);
		*/
		let material, geometry, mesh;
		let spotlight = new THREE.Group();
		material = new THREE.MeshStandardMaterial({color: 0x666666});
		geometry = new THREE.SphereGeometry(30, 20 ,20);
		mesh = new THREE.Mesh(geometry, material);
		spotlight.add(mesh);
		geometry = new THREE.ConeGeometry(30, 70, 4);
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0,-55,0);
		spotlight.add(mesh);
		spotlight.position.set(-225, 1100, 0);
		group.add(spotlight);
		spotlight = new THREE.Group();
		geometry = new THREE.SphereGeometry(30, 20 ,20);
		mesh = new THREE.Mesh(geometry, material);
		spotlight.add(mesh);
		geometry = new THREE.ConeGeometry(30, 70, 4);
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0,-55,0);
		spotlight.add(mesh);
		spotlight.position.set(0, 1100, 0);
		group.add(spotlight);
		spotlight = new THREE.Group();
		geometry = new THREE.SphereGeometry(30, 20 ,20);
		mesh = new THREE.Mesh(geometry, material);
		spotlight.add(mesh);
		geometry = new THREE.ConeGeometry(30, 70, 4);
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0,-55,0);
		spotlight.add(mesh);
		spotlight.position.set(225, 1100, 0);
		group.add(spotlight);
		this.scene.add(group);
		return group;
	}

	createPerspectiveCamera() {
		let camera = new THREE.PerspectiveCamera(
			70,
			window.innerWidth / window.innerHeight,
			1,
			10000
		);
		camera.position.x = 0;
		camera.position.y = 1000;
		camera.position.z = 2000;
		camera.lookAt(this.scene.position);
		return camera;
	}
}
