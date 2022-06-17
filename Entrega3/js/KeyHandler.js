class KeyHandler {
	constructor() {
		this.keyMap = [];
		this.lastMaterialUsed = [];
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

	// Handler for the movement of the objects.
	doKeyPress(delta) {
		if (this.keyMap[81] || this.keyMap[113]) { // Q/q
			group.children[0].rotateY(3 * delta)
			// rodar peça 1
		}

		if (this.keyMap[87] || this.keyMap[119]) { // W/w
			group.children[0].rotateY(-3 * delta)
			// rodar peça 1
		}

		if (this.keyMap[69] || this.keyMap[101]) { // E/e
			group.children[1].rotateY(3 * delta)
			// rodar peça 2
		}

		if (this.keyMap[82] || this.keyMap[114]) { // R/r
			group.children[1].rotateY(-3 * delta)
			// rodar peça 2
		}

		if (this.keyMap[84] || this.keyMap[116]) { // T/t
			group.children[2].rotateY(3 * delta)
			// rodar peça 3
		}

		if (this.keyMap[89] || this.keyMap[121]) { // Y/y
			group.children[2].rotateY(-3 * delta)
			// rodar peça 3
		}
	}

	doOneTimeEvent(code) {
		switch (code) {
			case 65:  // A
			case 97:  // a
				group.children.forEach((child) => {
					if (child.material === objectCreator.phongMaterials) {
						child.material = objectCreator.lambertMaterials;
					} else {
						child.material = objectCreator.phongMaterials;
					}
					console.log(child.material);
				});
				// alternar sombreamento
				break;
			case 83:  // S
			case 115: // s
				group.children.forEach((child) => {
					if (child.material === objectCreator.normalMaterials) {
						child.material = this.lastMaterialUsed;
					} else {
						this.lastMaterialUsed = child.material;
						child.material = objectCreator.normalMaterials;
					}
					console.log(child.material);
				});
				// toggle calculo da iluminação
				break;
			case 68:  // D
			case 100: // d
				// toggle calculo da iluminação global
				isGlobalLight = !isGlobalLight;
				if (isGlobalLight) {
					sceneCreator.globalLight.intensity = 1;
				} else {
					sceneCreator.globalLight.intensity = 0;
				}
				break;
			case 90:  // Z
			case 122: // z
				// toggle 1 spotlight
				isSpotlight1 = !isSpotlight1;
				if (isSpotlight1) {
					sceneCreator.spotlights.children[0].intensity = 0.6;
				} else {
					sceneCreator.spotlights.children[0].intensity = 0;
				}
				break;
			case 88:  // X
			case 120: // x
				// toggle 2 spotlight
				isSpotlight2 = !isSpotlight2;
				if (isSpotlight2) {
					sceneCreator.spotlights.children[1].intensity = 0.6;
				} else {
					sceneCreator.spotlights.children[1].intensity = 0;
				}
				break;
			case 67:  // C
			case 99:  // c
				// toggle 3 spotlight
				isSpotlight3 = !isSpotlight3;
				if (isSpotlight3) {
					sceneCreator.spotlights.children[2].intensity = 0.6;
				} else {
					sceneCreator.spotlights.children[2].intensity = 0;
				}
				break;
			case 49: // 1
				// perspetiva
				scene.activeCamera = sceneCreator.perspectiveCamera;
				camera = scene.activeCamera;
				onResize();
				break;
			case 50: // 2
				// fixa, ortogonal
				scene.activeCamera = sceneCreator.orthographicCamera;
				camera = scene.activeCamera;
				onResize();
				break;
			case 32:  // space
				// play/pause
				isPaused = !isPaused;
				if (isPaused) {
					clock.stop();
				} else {
					clock.start();
				}
				break;
			case 51:  // 3
				// reset
				initObjects();
				if (isPaused) {
					isPaused = false;
					clock.start();
				}
				break;
			default:
				return false;
		}
		return true;
	}
}
