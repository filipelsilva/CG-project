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

	makeSafe(angle) {
		const EPS = 0.01;
		let minusPi = angle - Math.PI;
		if (Math.abs(minusPi) < EPS) {
			this.inverted = !this.inverted;
			if (minusPi < 0) {
				return angle+EPS;
			} else {
				return angle-EPS;
			}
		} else if (Math.abs(angle) < EPS) {
			this.inverted = !this.inverted;
			if (angle < 0) {
				return angle+EPS;
			} else {
				return angle-EPS;
			}
		}
		return angle;
	}

	getPolarCoordinates(x, y, z) {
		let radius = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
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

		let newPhi = 0;
		let newTheta = 0;

		if (this.keyMap[37]) { // left
			spaceship.left = true;
			if (this.inverted) {
				newTheta += Math.PI/8;
			}
			else {
				newTheta -= Math.PI/8;
			}
			spaceship.rotate = false;
		}

		if (this.keyMap[38]) { // up
			spaceship.up = true;
			if (this.inverted) {
				newPhi += Math.PI/8;
			} else {
				newPhi -= Math.PI/8;
			}
			spaceship.rotate = false;
		}

		if (this.keyMap[39]) { // right
			spaceship.right = true;
			if (this.inverted) {
				newTheta -= Math.PI/8;
			}
			else {
				newTheta += Math.PI/8;
			}
			spaceship.rotate = false;
		}

		if (this.keyMap[40]) { // down
			spaceship.down = true;
			if (this.inverted) {
				newPhi -= Math.PI/8;
				spaceship.rotate = true;
			} else {
				newPhi += Math.PI/8;
				spaceship.rotate = false;
			}
		}

		let normalized = new THREE.Vector2(newPhi * delta, newTheta * delta);
		normalized.normalize();

		newPhi = normalized.x / 100;
		newTheta = normalized.y / 100;

		let [newX, newY, newZ] = this.getCartesianCoordinates(
			radius,
			this.makeSafe(phi + newPhi),
			theta + newTheta
		);

		// console.log("0----------0");
		// if (newPhi != 0 || newTheta != 0) {
		// 	console.log(spaceship.getSpaceship().position.x, spaceship.getSpaceship().position.y, spaceship.getSpaceship().position.z);
		// 	console.log(phi, theta);
		// 	console.log(phi + newPhi, theta + newTheta);
		// 	console.log(newX, newY, newZ);
		// }

		spaceship.getSpaceship().position.set(newX, newY, newZ);

		collision.hasCollision(spaceship, garbage, H, C);
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
				onResize();
				break;
			case 50: // 2
				scene.activeCamera = sceneCreator.cameras[1];
				camera = scene.activeCamera;
				this.spaceshipCameraOn = false;
				onResize();
				break;
			case 51: // 3
				scene.activeCamera = sceneCreator.cameras[2];
				camera = scene.activeCamera;
				camera.lookAt(spaceship.getSpaceship().position.x, spaceship.getSpaceship().position.y, spaceship.getSpaceship().position.z);
				this.spaceshipCameraOn = true;
				onResize();
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
