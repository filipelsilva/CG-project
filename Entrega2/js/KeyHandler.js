class KeyHandler {
	constructor() {
		this.keyMap = [];
		this.inverted = false;
		this.spaceshipCameraOn = false;
	}

	onKeyDown(event) {
		const code = event.keyCode;
		if (!this.doOneTimeEvent(code)) {
			this.keyMap[code] = true;
		}
	}

	onKeyUp(event) {
		const code = event.keyCode;
		this.keyMap[code] = false;
		if (code == 38 || code == 40) {
			this.inverted = false;
		}
	}

	clamp(number, minimum, maximum) {
		return Math.min(Math.max(number, minimum), maximum);
	}

	getPolarCoordinates(x, y, z) {
		let radius, phi, theta;
		radius = Math.sqrt(x * x + y * y + z * z);

		if (radius === 0) {
			theta = 0;
			phi = 0;
		} else {
			theta = Math.atan2(x, z);
			phi = Math.acos(this.clamp(y / radius, - 1, 1));
		}

		return [radius, phi, theta]
	}

	getCartesianCoordinates(radius, phi, theta) {
		return new THREE.Vector3(
			Math.sin(phi) * radius * Math.sin(theta),
			Math.cos(phi) * radius,
			Math.sin(phi) * radius * Math.cos(theta),
		);
	}

	// Handler for the movement of the objects.
	doKeyPress(delta) { // TODO delta needs to be used
		let sphere = this.getPolarCoordinates(
			spaceship.getSpaceship().position.x,
			spaceship.getSpaceship().position.y,
			spaceship.getSpaceship().position.z
		);

		if (this.keyMap[37]) { // left
			spaceship.getSpaceship().position.set(
				this.getCartesianCoordinates(
					distance,
					sphere[1],
					sphere[2]-0.01*Math.PI/8
				)
			);
		}

		if (this.keyMap[38]) { // up
			spaceship.getSpaceship().position.set(
				this.getCartesianCoordinates(
					distance,
					sphere[1]+0.01*Math.PI/8,
					sphere[2]-Math.PI
				)
			);
		}

		if (this.keyMap[39]) { // right
			spaceship.getSpaceship().position.set(
				this.getCartesianCoordinates(
					distance,
					sphere[1],
					sphere[2]+0.01*Math.PI/8
				)
			);
		}

		if (this.keyMap[40]) { // down
			spaceship.getSpaceship().position.set(
				this.getCartesianCoordinates(distance,
					sphere[1]-0.01*Math.PI/8,
					sphere[2]-Math.PI
				)
			);
		}

		console.log(spaceship.getSpaceship().position);
	}

	// Handler for toggles, e.g. axesHelper.
	doOneTimeEvent(code) {
		switch (code) {
			case 69:  // E
			case 101: // e
				axes.visible = !axes.visible;
				break;
			case 49: // 1
				scene.activeCamera = sceneCreator.cameras[0];
				camera = scene.activeCamera;
				this.spaceshipCameraOn = false;
				break;
			case 50: // 2
				scene.activeCamera = sceneCreator.cameras[1];
				camera = scene.activeCamera;
				this.spaceshipCameraOn = false;
				break;
			case 51: // 3
				scene.activeCamera = sceneCreator.cameras[2];
				camera = scene.activeCamera;
				camera.lookAt(spaceship.getSpaceship().position.x, spaceship.getSpaceship().position.y, spaceship.getSpaceship().position.z);
				this.spaceshipCameraOn = true;
				break;
			case 52: // 4
				function changeWireframe(listMesh) {
					listMesh.children.map(child => {
						child.material.wireframe = !child.material.wireframe;
						if (child.children.length != 0) {
							changeWireframe(child);
						}
					});
				}
				changeWireframe(group);
				break;
			default:
				return false;
		}
		return true;
	}
}
