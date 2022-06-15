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
	doKeyPress(delta, objects) {
		if (this.keyMap[81] || this.keyMap[113]) { // Q/q
			objects.children[0].rotateY(3 * delta)
			// rodar peça 1
		}

		if (this.keyMap[87] || this.keyMap[119]) { // W/w
			objects.children[0].rotateY(-3 * delta)
			// rodar peça 1
		}

		if (this.keyMap[69] || this.keyMap[101]) { // E/e
			objects.children[1].rotateY(3 * delta)
			// rodar peça 2
		}

		if (this.keyMap[82] || this.keyMap[114]) { // R/r
			objects.children[1].rotateY(-3 * delta)
			// rodar peça 2
		}

		if (this.keyMap[84] || this.keyMap[116]) { // T/t
			objects.children[2].rotateY(3 * delta)
			// rodar peça 3
		}

		if (this.keyMap[89] || this.keyMap[121]) { // Y/y
			objects.children[2].rotateY(-3 * delta)
			// rodar peça 3
		}
	}

	// Handler for toggles, e.g. axesHelper.
	doOneTimeEvent(code) {
		switch (code) {
			case 65:  // A
			case 97:  // a
				// alternar sombreamento
				break;
			case 83:  // S
			case 115: // s
				// toggle calculo da iluminação
				break;
			case 90:  // Z
			case 122: // z
				// toggle 1 spotlight
				break;
			case 88:  // X
			case 120: // x
				// toggle 2 spotlight
				break;
			case 67:  // C
			case 99:  // c
				// toggle 3 spotlight
				break;
			// devia ser S
			case 80:  // P
			case 112: // p
				// play/pause
				if (clock.running) {
					cancelAnimationFrame(id);
					clock.stop();
				} else {
					id = requestAnimationFrame(animate);
					clock.start();
				}
				break;
			// devia ser R
			case 79:  // O
			case 111: // o
				// reset
				break;
			case 49: // 1
				// perspetiva
				break;
			case 50: // 2
				// fixa, ortogonal
				break;
			default:
				return false;
		}
		return true;
	}
}
