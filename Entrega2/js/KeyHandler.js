class KeyHandler {
	constructor() {
		this.keyMap = [];
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
	}

	rotateAroundPoint(object, point, axis, rotation) {
		object.position.sub(point);
		object.position.applyAxisAngle(axis, rotation);
		object.position.add(point);
		object.rotateOnAxis(axis, rotation);
	}

	getObjectCenterPoint(mesh) {
		let center = new THREE.Vector3();
		let geometry = mesh.geometry;
		geometry.computeBoundingBox();
		geometry.boundingBox.getCenter(center);
		return center;
	}

	// Handler for the movement of the objects.
	doKeyPress(delta) {
		const vector = new THREE.Vector3(0,0,0);

		if (this.keyMap[37]) { // left
			vector.add(new THREE.Vector3(-1 * delta, 0, 0));
		}

		if (this.keyMap[38]) { // up
			vector.add(new THREE.Vector3(0, 1 * delta, 0));
		}

		if (this.keyMap[39]) { // right
			vector.add(new THREE.Vector3(1 * delta, 0, 0));
		}

		if (this.keyMap[40]) { // down
			vector.add(new THREE.Vector3(0, -1 * delta, 0));
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
				break;
			case 50: // 2
				scene.activeCamera = sceneCreator.cameras[1]
				camera = scene.activeCamera;
				break;
			case 51: // 3
				camera.position.x = 1;
				camera.position.y = 0;
				camera.position.z = 0;
				camera.lookAt(0, 0, 0);
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
