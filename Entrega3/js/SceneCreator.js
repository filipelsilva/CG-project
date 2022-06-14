class SceneCreator {
	constructor() {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0x020122);
		this.camera = this.createCamera();
		this.scene.add(this.camera);
		this.globalLight = this.createLight();
		this.spotlights = this.createSpotlights();
		// this.scenePause = new THREE.Scene();
		// console.log(this.scenePause);
		// this.scenePause.visible = false;
		// this.cameraPause = this.createCamera();
		// this.scenePause.add(this.cameraPause);
	}

	createLight() {
		const light = new THREE.DirectionalLight(0xffffff, 1);
		light.position.set(0, 1000, 1000);
		light.castShadow = true;
		this.scene.add(light);
		return light;
	}

	createSpotlights() {
		let light;
		let group = new THREE.Group();
		light = new THREE.SpotLight(0xffffff);
		light.castShadow = true;
		light.position.set(150, 1000, 0);
		group.add(light);
		light = new THREE.SpotLight(0xffffff);
		light.castShadow = true;
		light.position.set(450, 1000, 0);
		group.add(light);
		light = new THREE.SpotLight(0xffffff);
		light.castShadow = true;
		light.position.set(750, 1000, 0);
		group.add(light);
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
}
