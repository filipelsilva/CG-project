class Planet {
	constructor(R) {
		let material = new THREE.MeshStandardMaterial({ color: 0x1aa9d9 });
		let geometry = new THREE.SphereGeometry(R, 32, 16);
		this.planet = new THREE.Mesh(geometry, material);
		this.planet.position.set(0, 0, 0);
		this.planet.rotation.y = -Math.PI/2 - 0.9;
		this.planet.rotation.x = Math.PI/16;
	}

	getPlanet(){
		return this.planet;
	}
}
