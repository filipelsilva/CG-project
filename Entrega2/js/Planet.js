class Planet {
	constructor(R) {
		//let material = new THREE.MeshStandardMaterial({ color: 0x01fc93 });
		const texture = new THREE.TextureLoader().load( "js/textures/earth.jpg" );
		let material = new THREE.MeshStandardMaterial({map : texture });
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
