class SceneCreator {
	constructor() {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0x020122);
		this.cameras = [this.createOrthographicCamera(), this.createPerspectiveCamera()];
		this.scene.activeCamera = this.cameras[0];
		this.axes = this.createAxes();
		this.createLights();
		this.cameras.forEach((cam) => this.scene.add(cam));
	}

	createAxes() {
		this.axes = new THREE.AxesHelper(1000);
		this.axes.visible = false;
		this.scene.add(this.axes);
		return this.axes;
	}

	createLights() {
		const light1 = new THREE.DirectionalLight(0xffffff, 1);
		light1.position.set(1000, 1000, 1000);
		light1.castShadow = true;
		this.scene.add(light1);

		const light2 = new THREE.DirectionalLight(0xffffff, 1);
		light2.position.set(-1000, 1000, -1000);
		light2.castShadow = true;
		this.scene.add(light2);

		const light3 = new THREE.DirectionalLight(0xffffff, 1);
		light3.position.set(0, -500, 0);
		light3.castShadow = true;
		this.scene.add(light3);
	}

	createOrthographicCamera() {
		let camera = new THREE.OrthographicCamera(
			window.innerWidth/-2,
			window.innerWidth/2,
			window.innerHeight/2,
			window.innerHeight/-2,
			-1000,
			1000
		);
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
		camera.position.y = 0;
		camera.position.z = 500;
		camera.lookAt(this.scene.position);
		return camera;
	}
}
