class SceneCreator {
	constructor() {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0x020122);
		this.perspectiveCamera = this.createPerspectiveCamera();
		this.orthographicCamera = this.createOrthographicCamera();
		this.scene.add(this.perspectiveCamera);
		this.scene.add(this.orthographicCamera);
		this.globalLight;
		this.spotlights;
	}

	createLight() {
		let light = new THREE.DirectionalLight(0xffffff, 1);
		light.position.set(0, 500, 1000);
		light.castShadow = true;
		light.target = this.scene;
		mainGroup.add(light);
		return light;
	}

	createSpotlights(objects) {
		let light;
		let group = new THREE.Group();
		light = new THREE.SpotLight(0xffffff, 0.6);
		light.castShadow = true;
		light.position.set(-500, 1000, 600);
		light.angle = Math.PI/12;
		light.target = objects.children[0];
		group.add(light);
		light = new THREE.SpotLight(0xffffff, 0.6);
		light.castShadow = true;
		light.position.set(0, 1000, 600);
		light.angle = Math.PI/12;
		light.target = objects.children[1];
		group.add(light);
		light = new THREE.SpotLight(0xffffff, 0.6);
		light.castShadow = true;
		light.position.set(500, 1000, 600);
		light.angle = Math.PI/12;
		light.target = objects.children[2];
		group.add(light);
		let material, geometry, mesh;
		let spotlight = new THREE.Group();
		material = new THREE.MeshStandardMaterial({color: 0x666666});
		material.castShadow = true;
		geometry = new THREE.SphereGeometry(30, 20 ,20);
		mesh = new THREE.Mesh(geometry, material);
		spotlight.add(mesh);
		geometry = new THREE.ConeGeometry(30, 70, 8);
		mesh = new THREE.Mesh(geometry, material);
		mesh.rotation.x = Math.PI/2;
		mesh.rotation.z = Math.PI;
		mesh.position.set(0,0,55);
		spotlight.add(mesh);
		spotlight.position.set(-500, 650, 600);
		spotlight.lookAt(...objects.children[0].position);
		group.add(spotlight);
		spotlight = new THREE.Group();
		geometry = new THREE.SphereGeometry(30, 20 ,20);
		mesh = new THREE.Mesh(geometry, material);
		spotlight.add(mesh);
		geometry = new THREE.ConeGeometry(30, 70, 8);
		mesh = new THREE.Mesh(geometry, material);
		mesh.rotation.x = Math.PI/2;
		mesh.rotation.z = Math.PI;
		mesh.position.set(0,0,55);
		spotlight.add(mesh);
		spotlight.position.set(0, 650, 600);
		spotlight.lookAt(...objects.children[1].position);
		group.add(spotlight);
		spotlight = new THREE.Group();
		geometry = new THREE.SphereGeometry(30, 20 ,20);
		mesh = new THREE.Mesh(geometry, material);
		spotlight.add(mesh);
		geometry = new THREE.ConeGeometry(30, 70, 8);
		mesh = new THREE.Mesh(geometry, material);
		mesh.rotation.x = Math.PI/2;
		mesh.rotation.z = Math.PI;
		mesh.position.set(0,0,55);
		spotlight.add(mesh);
		spotlight.position.set(500, 650, 600);
		spotlight.lookAt(...objects.children[2].position);
		group.add(spotlight);
		mainGroup.add(group);
		return group;
	}

	createOrthographicCamera() {
		let camera = new THREE.OrthographicCamera(
			window.innerWidth/-2,
			window.innerWidth/2,
			window.innerHeight/2,
			window.innerHeight/-2,
			-10000,
			10000
		);
		camera.position.x = 0;
		camera.position.y = 2000;
		camera.position.z = 10;
		camera.zoom = 0.3;
		camera.lookAt(...this.scene.position);
		return camera;
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
		camera.lookAt(...this.scene.position);
		return camera;
	}
}
