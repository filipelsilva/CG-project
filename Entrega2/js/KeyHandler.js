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

	// Handler for the movement of the objects.
	doKeyPress(delta) {
		const vector = new THREE.Vector3(0,0,0);
		let sphere = new THREE.Spherical();
		sphere.setFromCartesianCoords(spaceship.getSpaceship().position.x, spaceship.getSpaceship().position.y, spaceship.getSpaceship().position.z);

		if (this.keyMap[37]) { // left
			spaceship.getSpaceship().position.setFromSphericalCoords(distance, sphere.phi, sphere.theta-0.01*Math.PI/8);
		}
		
		if (this.keyMap[38]) { // up
			if(sphere.phi-0.01*Math.PI/8 < 0){
				this.inverted = !this.inverted;
				spaceship.getSpaceship().position.setFromSphericalCoords(distance, sphere.phi+0.01*Math.PI/8, sphere.theta-Math.PI);
			}
			else if (!this.inverted){
				spaceship.getSpaceship().position.setFromSphericalCoords(distance, sphere.phi-0.01*Math.PI/8, sphere.theta);
			}
			else if (this.inverted) {
				if(sphere.phi+0.01*Math.PI/8 > Math.PI){
					this.inverted = !this.inverted;
					spaceship.getSpaceship().position.setFromSphericalCoords(distance, sphere.phi-0.01*Math.PI/8, sphere.theta-Math.PI);
				}
				else {
					spaceship.getSpaceship().position.setFromSphericalCoords(distance, sphere.phi+0.01*Math.PI/8, sphere.theta);
				}
			}
		}

		if (this.keyMap[39]) { // right
			spaceship.getSpaceship().position.setFromSphericalCoords(distance, sphere.phi, sphere.theta+0.01*Math.PI/8);
		}

		if (this.keyMap[40]) { // down
			if(sphere.phi+0.01*Math.PI/8 > Math.PI){
				this.inverted = !this.inverted;
				spaceship.getSpaceship().position.setFromSphericalCoords(distance, sphere.phi-0.01*Math.PI/8, sphere.theta-Math.PI);
			}
			else if (!this.inverted){
				spaceship.getSpaceship().position.setFromSphericalCoords(distance, sphere.phi+0.01*Math.PI/8, sphere.theta);
			}
			else if (this.inverted) {
				if(sphere.phi-0.01*Math.PI/8 < 0){
					this.inverted = !this.inverted;
					spaceship.getSpaceship().position.setFromSphericalCoords(distance, sphere.phi+0.01*Math.PI/8, sphere.theta-Math.PI);
				}
				else {
					spaceship.getSpaceship().position.setFromSphericalCoords(distance, sphere.phi-0.01*Math.PI/8, sphere.theta);
				}
			}
		}

		if (this.keyMap[68] || this.keyMap[100]) { // D/d
			vector.add(new THREE.Vector3(0, 0, 1 * delta));
		}

		if (this.keyMap[67] || this.keyMap[99]) { // C/c
			vector.add(new THREE.Vector3(0, 0, -1 * delta));
		}

		vector.normalize();
		spaceship.getSpaceship().position.add(vector);
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
