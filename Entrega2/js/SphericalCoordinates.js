class SphericalCoordinates {
	constructor(radius, phi, theta) {
		this.radius = radius;
		this.phi = phi;
		this.theta = theta;
	}

	getCartesianCoordinates() {
		return new THREE.Vector3(
			Math.sin(this.phi) * this.radius * Math.sin(this.theta),
			Math.cos(this.phi) * this.radius,
			Math.sin(this.phi) * this.radius * Math.cos(this.theta),
		);
	}
}
