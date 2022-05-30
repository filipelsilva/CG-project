class Planet {
	constructor(R) {
		let material = new THREE.MeshStandardMaterial({ color: 0x01fc93 });
		let geometry = new THREE.SphereGeometry(R, 32, 16);
		this.planet = new THREE.Mesh(geometry, material);
		this.planet.position.set(0, 0, 0);
	}

	getPlanet(){
		return this.planet;
	}
}