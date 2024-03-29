class SceneCreator {
	constructor() {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0x020122);
		this.camera = this.createCamera();
		this.axes = this.createAxes();
		this.createLights();
	}

	createAxes() {
		this.axes = new THREE.AxesHelper(100);
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
	}

	createCamera() {
		this.camera = new THREE.OrthographicCamera(
			window.innerWidth/-2,
			window.innerWidth/2,
			window.innerHeight/2,
			window.innerHeight/-2,
			-1000,
			1000
		);
		this.scene.add(this.camera);
		return this.camera;
	}
}
