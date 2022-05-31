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
		let radius = Math.sqrt(x * x + y * y + z * z);
		let phi = 0;
		let theta = 0;

		if (radius !== 0) {
			theta = Math.atan2(x, z);
			phi = Math.acos(this.clamp(y / radius, - 1, 1));
		}

		return [radius, phi, theta]
	}

	getCartesianCoordinates(radius, phi, theta) {
		let x = Math.sin(phi) * radius * Math.sin(theta);
		let y = Math.cos(phi) * radius;
		let z = Math.sin(phi) * radius * Math.cos(theta);
		return [x, y, z];
	}

	// Handler for the movement of the objects.
	doKeyPress(delta) {
		let [radius, phi, theta] = this.getPolarCoordinates(
			spaceship.getSpaceship().position.x,
			spaceship.getSpaceship().position.y,
			spaceship.getSpaceship().position.z
		);

		let [newRadius, newPhi, newTheta] = [radius, phi, theta];

		if (this.keyMap[37]) { // left
			spaceship.left = true;
			newTheta -= 0.01*Math.PI/8;
		}

		if (this.keyMap[38]) { // up
			spaceship.up = true;
			if(phi-0.01*Math.PI/8 < 0){
				this.inverted = !this.inverted;
				newPhi += 0.01*Math.PI/8;
				newTheta -= Math.PI;
			}
			else if (!this.inverted){
				newPhi -= 0.01*Math.PI/8;
			}
			else if (this.inverted) {
				if(phi+0.01*Math.PI/8 > Math.PI){
					this.inverted = !this.inverted;
					newPhi -= 0.01*Math.PI/8;
					newTheta -= Math.PI;
				}
				else {
					newPhi += 0.01*Math.PI/8;
				}
			}
		}

		if (this.keyMap[39]) { // right
			spaceship.right = true;
			newTheta += 0.01*Math.PI/8
		}

		if (this.keyMap[40]) { // down
			spaceship.down = true;
			if(phi+0.01*Math.PI/8 > Math.PI){
				this.inverted = !this.inverted;
				newPhi -= 0.01*Math.PI/8;
				newTheta -= Math.PI;
			}
			else if (!this.inverted){
				newPhi += 0.01*Math.PI/8;
			}
			else if (this.inverted) {
				if(phi-0.01*Math.PI/8 < 0){
					this.inverted = !this.inverted;
					newPhi += 0.01*Math.PI/8;
					newTheta -= Math.PI;
				}
				else {
					newPhi -= 0.01*Math.PI/8;
				}
			}
		}

		spaceship.getSpaceship().position.set(
			...this.getCartesianCoordinates(
				newRadius,
				newPhi,
				newTheta
			)
		);
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
				renderer.setSize(window.innerWidth, window.innerHeight);
				if (window.innerHeight > 0 && window.innerWidth > 0) {
					if (camera === sceneCreator.cameras[0]){
						camera.left = window.innerWidth/-2;
						camera.right = window.innerWidth/2;
						camera.top = window.innerHeight/2;
						camera.bottom = window.innerHeight/-2;
					}
					camera.updateProjectionMatrix();
				}
				break;
			case 50: // 2
				scene.activeCamera = sceneCreator.cameras[1];
				camera = scene.activeCamera;
				this.spaceshipCameraOn = false;
				renderer.setSize(window.innerWidth, window.innerHeight);
				if (window.innerHeight > 0 && window.innerWidth > 0) {
					camera.aspect = window.innerWidth / window.innerHeight;
					camera.updateProjectionMatrix();
				}
				break;
			case 51: // 3
				scene.activeCamera = sceneCreator.cameras[2];
				camera = scene.activeCamera;
				camera.lookAt(spaceship.getSpaceship().position.x, spaceship.getSpaceship().position.y, spaceship.getSpaceship().position.z);
				this.spaceshipCameraOn = true;
				renderer.setSize(window.innerWidth, window.innerHeight);
				if (window.innerHeight > 0 && window.innerWidth > 0) {
					camera.aspect = window.innerWidth / window.innerHeight;
					camera.updateProjectionMatrix();
				}
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
