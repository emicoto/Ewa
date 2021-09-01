window["BLENDMODE"] = {
	"SOURCE_OVER": "source-over",
	"SOURCE_IN": "source-in",
	"SOURCE_OUT": "source-out",
	"SOURCE_ATOP": "source-atop",
	"DESTINATION_OVER": "destination-over",
	"DESTINATION_IN": "destination-in",
	"DESTINATION_OUT": "destination-out",
	"DESTINATION_ATOP": "destination-atop",
	"LIGHTER": "lighter",
	"COPY": "copy",
	"XOR": "xor",
	"MULTIPLY": "multiply",
	"SCREEN": "screen",
	"OVERLAY": "overlay",
	"DARKEN": "darken",
	"LIGHTEN": "lighten",
	"COLOR_DODGE": "color-dodge",
	"COLOR_BURN": "color-burn",
	"HARD_LIGHT": "hard-light",
	"SOFT_LIGHT": "soft-light",
	"DIFFERENCE": "difference",
	"EXCLUSION": "exclusion",
	"HUE": "hue",
	"SATURATION": "saturation",
	"COLOR": "color",
	"LUMINOSITY": "luminosity"
}
function randomColor() {
	return { r: Math.round(Math.random() * 255), g: Math.round(Math.random() * 255), b: Math.round(Math.random() * 255) }
}
function isObject(props) {
	return Object.prototype.toString.call(props) === "[object Object]"
}
Renderer.GeneratedPatterns = {};

function registerGeneratedPattern(name, generator) {
	Renderer.GeneratedPatterns[name] = generator;
}

function registerImagePattern(name, src) {
	let image = new Image();
	image.onload = function () {
		Renderer.Patterns[name] = Renderer.globalC2D.createPattern(image, "repeat")
	};
	image.src = src;
}


Renderer.PatternProvider = function (spec) {
	// Return named pattern
	if (typeof spec === "string") return Renderer.Patterns[spec]

	// Indexed patterns
	if (spec.type in Renderer.GeneratedPatterns) {
		let image = Renderer.GeneratedPatterns[spec.type](spec);
		return Renderer.globalC2D.createPattern(image, "repeat");
	}

	// Unknown pattern
	console.warn("Unknown pattern spec " + JSON.stringify(spec));
	return null;
}
console.log(Story);



namespace Avatar {
	const AVATARPATH = "image/avatar"
	const __resolve = (mainpath, ...paths) => path.resolve(mainpath, ...paths)
	const cache = {}
	interface layersOption {
		show?: boolean,
		src?: string,
		z?: number,
		alpha?: number,
		desaturate?: boolean,
		brightness?: number,
		contrast?: number,
		blendMode?: string,
		blend?: string | object,
		masksrc?: string,
		animation?: string,
		frames?: number,
		filters?: string[],
		dx?: number,
		dy?: number,
		width?: number,
		height?: number,
		showfn?: (options) => boolean,
		srcfn?: (options) => string,
		zfn?: (options) => number,
		alphafn?: (options) => number,
		desaturatefn?: (options) => boolean,
		brightnessfn?: (options) => number,
		contrastftn?: (options) => number,
		blendModefn?: (options) => string,
		blendfn?: (options) => string | object,
		masksrcfn?: (options) => string,
		animationfn?: (options) => string,
		framesfn?: (options) => number[],
		filtersfn?: (options) => string[],
		dxfn?: (options) => number,
		dyfn?: (options) => number,
		widthfn?: (options) => number,
		heightfn?: (options) => number
	}
	Renderer.CanvasModels["Shop"] = {
		name: "Avatar",
		width: 166,
		height: 240,
		frames: 8,
		generatedOptions() {
			// console.log("generatedOptions");
			return []
		},
		defaultOptions() {

			return {
				dress:null,
				acc:null,
				dummy: __resolve(AVATARPATH, "dummy.png"),
				filters: {}
			}
		}, preprocess(options) {
			// console.log("preprocess", options);
		},
		layers: {
		},

	}
	Renderer.CanvasModels["Avatar"] = {
		name: "Avatar",
		width: 180,
		height: 260,
		frames: 8,
		generatedOptions() {
			// console.log("generatedOptions");
			return []
		},
		defaultOptions() {
			return {
				frame: null,
				addon: { body: false, bottom: false, face: false, hair: false, mouth: false, penis: false },

				neck: null, hand: null, face: null,
				hat: null, outter: null, top: null,
				bottom: null, inner_up: null, inner_bt: null,
				shoes: null, legs: null,

				emoadd: { tear: false, shy: false, red: false, hurt: false },

				eyebrow: null, hairfront: null, kemofront: { mimi: null, horn: null }, eyes: null,
				mouth: null, tatoos: null, penis: null,
				body: null, hairback: null, kemoback: { wing: null, tail: null }, back: null,
				background: null,
				animation: "",
				dummy: __resolve(AVATARPATH, "dummy.png"),
				eyesframe: 1,
				filters: {}
			}
		}, preprocess(options) {
			// console.log("preprocess", options);
		},
		layers: {
		},

	}
	Renderer.CanvasModels["Portrait"] = {
		name: "Avatar",
		width: 120,
		height: 120,
		frames: 8,
		generatedOptions() {
			// console.log("generatedOptions");
			return []
		},
		defaultOptions() {
			console.log("defaultOptions", V.avatar);

			return {
				frame: null,
				addon: { body: false, bottom: false, face: false, hair: false, mouth: false, penis: false },

				neck: null, hand: null, face: null,
				hat: null, outter: null, top: null,
				bottom: null, inner_up: null, inner_bt: null,
				shoes: null, legs: null,

				emoadd: { tear: false, shy: false, red: false, hurt: false },

				eyebrow: null, hairfront: null, kemofront: { mimi: null, horn: null }, eyes: null,
				mouth: null, tatoos: null, penis: null,
				body: null, hairback: null, kemoback: { wing: null, tail: null }, back: null,
				background: null,
				animation: "",
				dummy: __resolve(AVATARPATH, "dummy.png"),
				eyesframe: 1,
				filters: {}
			}
		}, preprocess(options) {
			// console.log("preprocess", options);
		},
		layers: {
		},

	}

	Renderer.CanvasModels["Emoji"] = {
		name: "Avatar",
		width: 120,
		height: 120,
		frames: 8,
		generatedOptions() {
			// console.log("generatedOptions");
			return []
		},
		defaultOptions() {
			console.log("defaultOptions", V.avatar);

			return {
				frame: null,
				addon: { body: false, bottom: false, face: false, hair: false, mouth: false, penis: false },

				neck: null, hand: null, face: null,
				hat: null, outter: null, top: null,
				bottom: null, inner_up: null, inner_bt: null,
				shoes: null, legs: null,

				emoadd: { tear: false, shy: false, red: false, hurt: false },

				eyebrow: null, hairfront: null, kemofront: { mimi: null, horn: null }, eyes: null,
				mouth: null, tatoos: null, penis: null,
				body: null, hairback: null, kemoback: { wing: null, tail: null }, back: null,
				background: null,
				animation: "",
				dummy: __resolve(AVATARPATH, "dummy.png"),
				eyesframe: 1,
				filters: {}
			}
		}, preprocess(options) {
			// console.log("preprocess", options);
		},
		layers: {
		},

	}



	export function setLayer(id: string, name: string, options: layersOption) {
		Renderer.CanvasModels[id].layers[name] = options
	}
	function Shoplayer(ID: string): void {
		let layerID = 0
		// setLayer(ID, "background", {
		// 	width: 166,
		// 	height: 240,
		// 	z: layerID++,
			
		// 	src:__resolve(AVATARPATH, `manekin.png`)
		// })
	setLayer(ID, "manekin", {
			width: 166,
			height: 240,
			z: layerID++,
					show:true,
			srcfn(){return __resolve(AVATARPATH, `manekin.png`)}
		})
	setLayer(ID, "dress", {
			width: 166,
			height: 240,
			z: layerID++,
			show:true,
			srcfn(options){
				if (isObject(options.dress)) {
						return options.dress ? __resolve(AVATARPATH,`${options.dress.src}.png`) :options.dummy
				}
				return options.dress ? __resolve(AVATARPATH,`${options.dress.src}.png`) :options.dummy
			},
			blendModefn(options){
				if (isObject(options.dress)) {
						if (!options.dress.fixcolor) {
							return  BLENDMODE.MULTIPLY
						}
				}
			},
			blendfn(options){
				if (isObject(options.dress)) {
						if (!options.dress.fixcolor) {
							return  options.dress.color
						}
				}
			}
		})
	setLayer(ID, "acc", {
			width: 166,
			height: 240,
			z: layerID++,
					show:true,
			srcfn(options){
				// if (isObject(options.dress)) {
				// 		return options.dress ? __resolve(AVATARPATH,V.showcase.layers,`${options.acc.src}.png`) :options.dummy
				// }
				// return options.acc ? __resolve(AVATARPATH,V.showcase.layers,`${options.acc}.png`) :options.dummy
				return options.acc ? __resolve(AVATARPATH,`${options.acc}.png`) :options.dummy
			},
			// desaturatefn(options){
			// 	if (isObject(options.acc)) {
						
			// 			return !options.acc.fixcolor
			// 	}
			// },
			// blendModefn(options){
			// 	if (isObject(options.acc)) {
			// 			if (!options.acc.fixcolor) {
			// 				return  BLENDMODE.MULTIPLY
			// 			}
			// 	}
			// },
			// blendfn(options){
			// 	if (isObject(options.acc)) {
			// 			if (!options.acc.fixcolor) {
			// 				return  options.acc.color
			// 			}
			// 	}
			// }
		})

	}
	function Portraitlayer(ID: string, dx: number = -25): void {
		let layerID = 0

		setLayer(ID, "kemoback_wing", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {
				return !!options.kemoback.wing
			},
			srcfn(options) {
				return options.kemoback.wing ? __resolve(AVATARPATH, `kemoback/${options.kemoback.wing.src}.png`) : options.dummy
			},
			blendModefn(options) {
				if (options.kemoback.wing) {
					if (!options.kemoback.wing.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (options.kemoback.wing) {
					if (!options.kemoback.wing.fixcolor) {
						return options.kemoback.wing.color
					}
				}
			}


		})
		setLayer(ID, "kemoback_tail", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {
				return !!options.kemoback.tail
			},
			srcfn(options) {
				return options.kemoback.tail ? __resolve(AVATARPATH, `kemoback/${options.kemoback.tail.src}.png`) : options.dummy
			},
			blendModefn(options) {
				if (options.kemoback.tail) {
					if (!options.kemoback.tail.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (options.kemoback.tail) {
					if (!options.kemoback.tail.fixcolor) {
						return options.kemoback.tail.color
					}
				}
			}


		})
		setLayer(ID, "back", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {
				return !!options.back
			},
			srcfn(options) {
				return options.back ? __resolve(AVATARPATH, `back/${options.back.src}.png`) : options.dummy
			},
			blendModefn(options) {
				if (options.back) {
					if (!options.back.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (options.back) {
					if (!options.back.fixcolor) {
						return options.back.color
					}
				}
			}


		})
		setLayer(ID, "hairback", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {
				return !!options.hairback
			},
			srcfn(options) {
				if (isObject(options.hairback)) {
					return options.hairback ? __resolve(AVATARPATH, `hairback/${options.hairback.src}.png`) : options.dummy
				}
				return options.hairback ? __resolve(AVATARPATH, `hairback/${options.hairback}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.hairback)) {
					if (!options.hairback.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.hairback)) {
					if (!options.hairback.fixcolor) {
						return options.hairback.color[0]
					}
				}
			}


		})
		setLayer(ID, "body", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {
				return !!options.body
			},
			srcfn(options) {

				return options.body ? __resolve(AVATARPATH, `body/${options.body}.png`) : options.dummy
			},



		})


		setLayer(ID, "hand", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.hand
			},
			srcfn(options) {
				if (isObject(options.hand)) {
					return options.hand ? __resolve(AVATARPATH, `hand/${options.hand.src}.png`) : options.dummy
				}
				return options.hand ? __resolve(AVATARPATH, `hand/${options.hand}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.hand)) {
					if (!options.hand.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.hand)) {

					if (!options.hand.fixcolor) {

						return options.hand.color
					}
				}
			}
		})
		setLayer(ID, "inner_up", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.inner_up
			},
			srcfn(options) {
				if (isObject(options.inner_up)) {
					return options.inner_up ? __resolve(AVATARPATH, `inner_up/${options.inner_up.src}.png`) : options.dummy
				}
				return options.inner_up ? __resolve(AVATARPATH, `inner_up/${options.inner_up}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.inner_up)) {
					if (!options.inner_up.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.inner_up)) {

					if (!options.inner_up.fixcolor) {

						return options.inner_up.color
					}
				}
			}
		})
		setLayer(ID, "top", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {
				return !!options.top
			},
			srcfn(options) {
				if (isObject(options.top)) {
					return options.top ? __resolve(AVATARPATH, `top/${options.top.src}.png`) : options.dummy
				}
				return options.top ? __resolve(AVATARPATH, `top/${options.top}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.top)) {
					if (!options.top.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.top)) {

					if (!options.top.fixcolor) {

						return options.top.color
					}
				}
			}
		})
		setLayer(ID, "top_acc", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {
				if (isObject(options.top)) {
					return !!options.top.acc
				}
				return false
			},
			srcfn(options) {
				if (isObject(options.top)) {
					return options.top.acc ? __resolve(AVATARPATH, `top/${options.top.acc}.png`) : options.dummy
				}
				return options.dummy
			},
		})
		setLayer(ID, "outter", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.inner_up
			},
			srcfn(options) {
				if (isObject(options.outter)) {
					return options.outter ? __resolve(AVATARPATH, `outter/${options.outter.src}.png`) : options.dummy
				}
				return options.outter ? __resolve(AVATARPATH, `outter/${options.outter}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.outter)) {
					if (!options.outter.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.outter)) {

					if (!options.outter.fixcolor) {

						return options.outter.color
					}
				}
			}
		})
		setLayer(ID, "mouth", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.mouth
			},
			srcfn(options) {
				if (isObject(options.mouth)) {
					return options.mouth ? __resolve(AVATARPATH, `mouth/${options.mouth.src}.png`) : options.dummy
				}
				return options.mouth ? __resolve(AVATARPATH, `mouth/${options.mouth}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.mouth)) {
					if (!options.mouth.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.mouth)) {

					if (!options.mouth.fixcolor) {

						return options.mouth.color
					}
				}
			}
		})
		setLayer(ID, "eyes", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.eyes
			},
			srcfn(options) {
				if (isObject(options.eyes)) {
					return options.eyes ? __resolve(AVATARPATH, `eyes/${options.eyes.src}.png`) : options.dummy
				}
				return options.eyes ? __resolve(AVATARPATH, `eyes/${options.eyes}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.eyes)) {
					if (!options.eyes.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.eyes)) {

					if (!options.eyes.fixcolor) {

						return options.eyes.color
					}
				}
			}, animationfn(options) {
				return "eyes"
			}
		})
		setLayer(ID, "emoadd_tear", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.emoadd.tear
			},
			srcfn(options) {
				return options.emoadd.tear ? __resolve(AVATARPATH, `emoadd/tear.png`) : options.dummy
			},

		})
		setLayer(ID, "emoadd_shy", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.emoadd.shy
			},
			srcfn(options) {
				return options.emoadd.shy ? __resolve(AVATARPATH, `emoadd/shy.png`) : options.dummy
			},

		})
		setLayer(ID, "emoadd_red", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.emoadd.red
			},
			srcfn(options) {
				return options.emoadd.red ? __resolve(AVATARPATH, `emoadd/red.png`) : options.dummy
			},

		})
		setLayer(ID, "emoadd_hurt", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.emoadd.hurt
			},
			srcfn(options) {
				return options.emoadd.hurt ? __resolve(AVATARPATH, `emoadd/hurt.png`) : options.dummy
			},

		})
		setLayer(ID, "face", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.face
			},
			srcfn(options) {
				if (isObject(options.face)) {
					return options.face ? __resolve(AVATARPATH, `face/${options.face.src}.png`) : options.dummy
				}
				return options.face ? __resolve(AVATARPATH, `face/${options.face}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.face)) {
					if (!options.face.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.face)) {

					if (!options.face.fixcolor) {

						return options.face.color
					}
				}
			}
		})
		setLayer(ID, "neck", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.neck
			},
			srcfn(options) {
				if (isObject(options.neck)) {
					return options.neck ? __resolve(AVATARPATH, `neck/${options.neck.src}.png`) : options.dummy
				}
				return options.neck ? __resolve(AVATARPATH, `neck/${options.neck}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.neck)) {
					if (!options.neck.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.neck)) {

					if (!options.neck.fixcolor) {

						return options.neck.color
					}
				}
			}
		})
		setLayer(ID, "hairfront", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.hairfront
			},
			srcfn(options) {
				if (isObject(options.hairfront)) {
					return options.hairfront ? __resolve(AVATARPATH, `hairfront/${options.hairfront.src}.png`) : options.dummy
				}
				return options.hairfront ? __resolve(AVATARPATH, `hairfront/${options.hairfront}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.hairfront)) {
					if (!options.hairfront.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.hairfront)) {

					if (!options.hairfront.fixcolor) {

						return options.hairfront.color[0]
					}
				}
			}
		})

		setLayer(ID, "eyebrow", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.eyebrow
			},
			srcfn(options) {
				if (isObject(options.eyebrow)) {
					return options.eyebrow ? __resolve(AVATARPATH, `eyebrow/${options.eyebrow.src}.png`) : options.dummy
				}
				return options.eyebrow ? __resolve(AVATARPATH, `eyebrow/${options.eyebrow}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.eyebrow)) {
					if (!options.eyebrow.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.eyebrow)) {

					if (!options.eyebrow.fixcolor) {

						return options.eyebrow.color
					}
				}
			}
		})
		setLayer(ID, "kemofront_mimi", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.kemofront.mimi
			},
			srcfn(options) {
				if (isObject(options.kemofront.mimi)) {
					return options.kemofront.mimi ? __resolve(AVATARPATH, `kemofront/${options.kemofront.mimi.src}.png`) : options.dummy
				}
				return options.kemofront.mimi ? __resolve(AVATARPATH, `kemofront/${options.kemofront.mimi}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.kemofront.mimi)) {
					if (!options.kemofront.mimi.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.kemofront.mimi)) {

					if (!options.kemofront.mimi.fixcolor) {

						return options.kemofront.mimi.color
					}
				}
			}
		})
		setLayer(ID, "kemofront_horn", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.kemofront.horn
			},
			srcfn(options) {
				if (isObject(options.kemofront.horn)) {
					return options.kemofront.horn ? __resolve(AVATARPATH, `kemofront/${options.kemofront.horn.src}.png`) : options.dummy
				}
				return options.kemofront.horn ? __resolve(AVATARPATH, `kemofront/${options.kemofront.horn}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.kemofront.horn)) {
					if (!options.kemofront.horn.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.kemofront.horn)) {

					if (!options.kemofront.horn.fixcolor) {

						return options.kemofront.horn.color
					}
				}
			}
		})
		setLayer(ID, "hat", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.hat
			},
			srcfn(options) {
				if (isObject(options.hat)) {
					return options.hat ? __resolve(AVATARPATH, `hat/${options.hat.src}.png`) : options.dummy
				}
				return options.hat ? __resolve(AVATARPATH, `hat/${options.hat}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.hat)) {
					if (!options.hat.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.hat)) {

					if (!options.hat.fixcolor) {

						return options.hat.color
					}
				}
			}
		})

		setLayer(ID, "addon_face", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.addon.face
			},
			srcfn(options) {
				return options.addon.face ? __resolve(AVATARPATH, `addon/face.png`) : options.dummy
			},

		})
		setLayer(ID, "addon_hair", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.addon.hair
			},
			srcfn(options) {
				return options.addon.hair ? __resolve(AVATARPATH, `addon/hair.png`) : options.dummy
			},

		})
		setLayer(ID, "addon_mouth", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.addon.mouth
			},
			srcfn(options) {
				return options.addon.mouth ? __resolve(AVATARPATH, `addon/mouth.png`) : options.dummy
			},

		})

		setLayer(ID, "frame", {
			width: 180,
			height: 260,
			z: layerID++,
			dx: dx,
			showfn(options) {

				return !!options.frame
			},
			srcfn(options) {
				if (isObject(options.frame)) {
					return options.frame ? __resolve(AVATARPATH, `frame/${options.frame.src}.png`) : options.dummy
				}
				return options.frame ? __resolve(AVATARPATH, `frame/${options.frame}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.frame)) {
					if (!options.frame.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.frame)) {

					if (!options.frame.fixcolor) {

						return options.frame.color
					}
				}
			}
		})

	}
	function Avatarlayer(ID: string): void {
		let layerID = 0
		setLayer(ID, "background", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {
				return !!options.background
			},
			srcfn(options) {
				return options.background ? __resolve(AVATARPATH, `background/${options.background}.png`) : options.dummy
			}
		})
		setLayer(ID, "kemoback_wing", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {
				return !!options.kemoback.wing
			},
			srcfn(options) {
				return options.kemoback.wing ? __resolve(AVATARPATH, `kemoback/${options.kemoback.wing.src}.png`) : options.dummy
			},
			blendModefn(options) {
				if (options.kemoback.wing) {
					if (!options.kemoback.wing.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (options.kemoback.wing) {
					if (!options.kemoback.wing.fixcolor) {
						return options.kemoback.wing.color
					}
				}
			}


		})
		setLayer(ID, "kemoback_tail", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {
				return !!options.kemoback.tail
			},
			srcfn(options) {
				return options.kemoback.tail ? __resolve(AVATARPATH, `kemoback/${options.kemoback.tail.src}.png`) : options.dummy
			},
			blendModefn(options) {
				if (options.kemoback.tail) {
					if (!options.kemoback.tail.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (options.kemoback.tail) {
					if (!options.kemoback.tail.fixcolor) {
						return options.kemoback.tail.color
					}
				}
			}


		})
		setLayer(ID, "back", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {
				return !!options.back
			},
			srcfn(options) {
				return options.back ? __resolve(AVATARPATH, `back/${options.back.src}.png`) : options.dummy
			},
			blendModefn(options) {
				if (options.back) {
					if (!options.back.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (options.back) {
					if (!options.back.fixcolor) {
						return options.back.color
					}
				}
			}


		})
		setLayer(ID, "hairback", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {
				return !!options.hairback
			},
			srcfn(options) {
				if (isObject(options.hairback)) {
					return options.hairback ? __resolve(AVATARPATH, `hairback/${options.hairback.src}.png`) : options.dummy
				}
				return options.hairback ? __resolve(AVATARPATH, `hairback/${options.hairback}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.hairback)) {
					if (!options.hairback.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.hairback)) {
					if (!options.hairback.fixcolor) {
						return options.hairback.color[0]
					}
				}
			}


		})
		setLayer(ID, "body", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {
				return !!options.body
			},
			srcfn(options) {

				return options.body ? __resolve(AVATARPATH, `body/${options.body}.png`) : options.dummy
			},



		})
		setLayer(ID, "penis", {
			width: 180,
			height: 260,
			z: layerID++,
			show:true,
			srcfn(options) {

				return options.penis ? __resolve(AVATARPATH, `body/${options.penis}.png`) : options.dummy
			},



		})
		setLayer(ID, "legs", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {
				return !!options.legs
			},
			srcfn(options) {
				if (isObject(options.legs)) {
					return options.legs ? __resolve(AVATARPATH, `legs/${options.legs.src}.png`) : options.dummy
				}
				return options.legs ? __resolve(AVATARPATH, `legs/${options.legs}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.legs)) {
					if (!options.legs.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.legs)) {
					if (!options.legs.fixcolor) {
						return options.legs.color
					}
				}
			}
		})
		setLayer(ID, "shoes", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {
				return !!options.shoes
			},
			srcfn(options) {
				if (isObject(options.shoes)) {
					return options.shoes ? __resolve(AVATARPATH, `shoes/${options.shoes.src}.png`) : options.dummy
				}
				return options.shoes ? __resolve(AVATARPATH, `shoes/${options.shoes}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.shoes)) {
					if (!options.shoes.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.shoes)) {
					if (!options.shoes.fixcolor) {
						return options.shoes.color
					}
				}
			}
		})
		setLayer(ID, "inner_bt", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {
				return !!options.inner_bt
			},
			srcfn(options) {
				if (isObject(options.inner_bt)) {
					return options.inner_bt ? __resolve(AVATARPATH, `inner_bt/${options.inner_bt.src}.png`) : options.dummy
				}
				return options.inner_bt ? __resolve(AVATARPATH, `inner_bt/${options.inner_bt}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.inner_bt)) {
					if (!options.inner_bt.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.inner_bt)) {

					if (!options.inner_bt.fixcolor) {

						return options.inner_bt.color
					}
				}
			}
		})
		setLayer(ID, "inner_bt_acc", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {
				if (isObject(options.inner_bt)) {
					return !!options.inner_bt.acc
				}
				return false
			},
			srcfn(options) {
				if (isObject(options.inner_bt)) {
					return options.inner_bt.acc ? __resolve(AVATARPATH, `inner_bt/${options.inner_bt.acc}.png`) : options.dummy
				}
				return options.dummy
			},
		})
		setLayer(ID, "bottom", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {


				return !!options.bottom
			},
			srcfn(options) {
				if (isObject(options.bottom)) {
					return options.bottom ? __resolve(AVATARPATH, `bottom/${options.bottom.src}.png`) : options.dummy
				}
				return options.bottom ? __resolve(AVATARPATH, `bottom/${options.bottom}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.bottom)) {
					if (!options.bottom.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.bottom)) {

					if (!options.bottom.fixcolor) {

						return options.bottom.color
					}
				}
			}
		})
		setLayer(ID, "bottom_acc", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {
				if (isObject(options.bottom)) {
					return !!options.bottom.acc
				}
				return false
			},
			srcfn(options) {
				if (isObject(options.bottom)) {
					return options.bottom.acc ? __resolve(AVATARPATH, `bottom/${options.bottom.acc}.png`) : options.dummy
				}
				return options.dummy
			},
		})
		setLayer(ID, "hand", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.hand
			},
			srcfn(options) {
				if (isObject(options.hand)) {
					return options.hand ? __resolve(AVATARPATH, `hand/${options.hand.src}.png`) : options.dummy
				}
				return options.hand ? __resolve(AVATARPATH, `hand/${options.hand}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.hand)) {
					if (!options.hand.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.hand)) {

					if (!options.hand.fixcolor) {

						return options.hand.color
					}
				}
			}
		})
		setLayer(ID, "inner_up", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.inner_up
			},
			srcfn(options) {
				if (isObject(options.inner_up)) {
					return options.inner_up ? __resolve(AVATARPATH, `inner_up/${options.inner_up.src}.png`) : options.dummy
				}
				return options.inner_up ? __resolve(AVATARPATH, `inner_up/${options.inner_up}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.inner_up)) {
					if (!options.inner_up.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.inner_up)) {

					if (!options.inner_up.fixcolor) {

						return options.inner_up.color
					}
				}
			}
		})
		setLayer(ID, "inner_up_acc", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {
				if (isObject(options.inner_up)) {
					return !!options.inner_up.acc
				}
				return false
			},
			srcfn(options) {
				if (isObject(options.inner_up)) {
					return options.inner_up.acc ? __resolve(AVATARPATH, `inner_up/${options.inner_up.acc}.png`) : options.dummy
				}
				return options.dummy
			},
		})
		setLayer(ID, "top", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {
				return !!options.top
			},
			srcfn(options) {
				if (isObject(options.top)) {
					return options.top ? __resolve(AVATARPATH, `top/${options.top.src}.png`) : options.dummy
				}
				return options.top ? __resolve(AVATARPATH, `top/${options.top}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.top)) {
					if (!options.top.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.top)) {

					if (!options.top.fixcolor) {

						return options.top.color
					}
				}
			}
		})
		setLayer(ID, "top_acc", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {
				if (isObject(options.top)) {
					return !!options.top.acc
				}
				return false
			},
			srcfn(options) {
				if (isObject(options.top)) {
					return options.top.acc ? __resolve(AVATARPATH, `top/${options.top.acc}.png`) : options.dummy
				}
				return options.dummy
			},
		})
		setLayer(ID, "outter", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.inner_up
			},
			srcfn(options) {
				if (isObject(options.outter)) {
					return options.outter ? __resolve(AVATARPATH, `outter/${options.outter.src}.png`) : options.dummy
				}
				return options.outter ? __resolve(AVATARPATH, `outter/${options.outter}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.outter)) {
					if (!options.outter.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.outter)) {

					if (!options.outter.fixcolor) {

						return options.outter.color
					}
				}
			}
		})
		setLayer(ID, "mouth", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.mouth
			},
			srcfn(options) {
				if (isObject(options.mouth)) {
					return options.mouth ? __resolve(AVATARPATH, `mouth/${options.mouth.src}.png`) : options.dummy
				}
				return options.mouth ? __resolve(AVATARPATH, `mouth/${options.mouth}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.mouth)) {
					if (!options.mouth.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.mouth)) {

					if (!options.mouth.fixcolor) {

						return options.mouth.color
					}
				}
			}
		})
		setLayer(ID, "eyes", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.eyes
			},
			srcfn(options) {
				if (isObject(options.eyes)) {
					return options.eyes ? __resolve(AVATARPATH, `eyes/${options.eyes.src}.png`) : options.dummy
				}
				return options.eyes ? __resolve(AVATARPATH, `eyes/${options.eyes}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.eyes)) {
					if (!options.eyes.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.eyes)) {

					if (!options.eyes.fixcolor) {

						return options.eyes.color
					}
				}
			}, animationfn(options) {
				return "eyes"
			}
		})
		setLayer(ID, "emoadd_tear", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.emoadd.tear
			},
			srcfn(options) {
				return options.emoadd.tear ? __resolve(AVATARPATH, `emoadd/tear.png`) : options.dummy
			},

		})
		setLayer(ID, "emoadd_shy", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.emoadd.shy
			},
			srcfn(options) {
				return options.emoadd.shy ? __resolve(AVATARPATH, `emoadd/shy.png`) : options.dummy
			},

		})
		setLayer(ID, "emoadd_red", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.emoadd.red
			},
			srcfn(options) {
				return options.emoadd.red ? __resolve(AVATARPATH, `emoadd/red.png`) : options.dummy
			},

		})
		setLayer(ID, "emoadd_hurt", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.emoadd.hurt
			},
			srcfn(options) {
				return options.emoadd.hurt ? __resolve(AVATARPATH, `emoadd/hurt.png`) : options.dummy
			},

		})
		setLayer(ID, "face", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.face
			},
			srcfn(options) {
				if (isObject(options.face)) {
					return options.face ? __resolve(AVATARPATH, `face/${options.face.src}.png`) : options.dummy
				}
				return options.face ? __resolve(AVATARPATH, `face/${options.face}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.face)) {
					if (!options.face.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.face)) {

					if (!options.face.fixcolor) {

						return options.face.color
					}
				}
			}
		})
		setLayer(ID, "neck", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.neck
			},
			srcfn(options) {
				if (isObject(options.neck)) {
					return options.neck ? __resolve(AVATARPATH, `neck/${options.neck.src}.png`) : options.dummy
				}
				return options.neck ? __resolve(AVATARPATH, `neck/${options.neck}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.neck)) {
					if (!options.neck.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.neck)) {

					if (!options.neck.fixcolor) {

						return options.neck.color
					}
				}
			}
		})
		setLayer(ID, "hairfront", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.hairfront
			},
			srcfn(options) {
				if (isObject(options.hairfront)) {
					return options.hairfront ? __resolve(AVATARPATH, `hairfront/${options.hairfront.src}.png`) : options.dummy
				}
				return options.hairfront ? __resolve(AVATARPATH, `hairfront/${options.hairfront}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.hairfront)) {
					if (!options.hairfront.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.hairfront)) {

					if (!options.hairfront.fixcolor) {

						return options.hairfront.color[0]
					}
				}
			}
		})
		setLayer(ID, "hairfront_msk", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.hairfront
			},
			srcfn(options) {
				if (isObject(options.hairfront)) {
					return options.hairfront ? __resolve(AVATARPATH, `hairfront/${options.hairfront.src}.png`) : options.dummy
				}
				return options.hairfront ? __resolve(AVATARPATH, `hairfront/${options.hairfront}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.hairfront)) {
					if (!options.hairfront.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.hairfront)) {

					if (!options.hairfront.fixcolor) {

						return options.hairfront.color[1]
					}
				}
			},
			masksrcfn(options) {
				if (isObject(options.hairfront)) {
					if (options.hairfront) {
						return __resolve(AVATARPATH, `hairfront/` + V.Equip.hairfront + `/hl_mask.png`)
					}

				}
				if (options.hairfront) {
					__resolve(AVATARPATH, `hairfront/` + V.Equip.hairfront + `/hl_mask.png`)
				}
			}
		})
		setLayer(ID, "eyebrow", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.eyebrow
			},
			srcfn(options) {
				if (isObject(options.eyebrow)) {
					return options.eyebrow ? __resolve(AVATARPATH, `eyebrow/${options.eyebrow.src}.png`) : options.dummy
				}
				return options.eyebrow ? __resolve(AVATARPATH, `eyebrow/${options.eyebrow}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.eyebrow)) {
					if (!options.eyebrow.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.eyebrow)) {

					if (!options.eyebrow.fixcolor) {

						return options.eyebrow.color
					}
				}
			}
		})
		setLayer(ID, "kemofront_mimi", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.kemofront.mimi
			},
			srcfn(options) {
				if (isObject(options.kemofront.mimi)) {
					return options.kemofront.mimi ? __resolve(AVATARPATH, `kemofront/${options.kemofront.mimi.src}.png`) : options.dummy
				}
				return options.kemofront.mimi ? __resolve(AVATARPATH, `kemofront/${options.kemofront.mimi}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.kemofront.mimi)) {
					if (!options.kemofront.mimi.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.kemofront.mimi)) {

					if (!options.kemofront.mimi.fixcolor) {

						return options.kemofront.mimi.color
					}
				}
			}
		})
		setLayer(ID, "kemofront_horn", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.kemofront.horn
			},
			srcfn(options) {
				if (isObject(options.kemofront.horn)) {
					return options.kemofront.horn ? __resolve(AVATARPATH, `kemofront/${options.kemofront.horn.src}.png`) : options.dummy
				}
				return options.kemofront.horn ? __resolve(AVATARPATH, `kemofront/${options.kemofront.horn}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.kemofront.horn)) {
					if (!options.kemofront.horn.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.kemofront.horn)) {

					if (!options.kemofront.horn.fixcolor) {

						return options.kemofront.horn.color
					}
				}
			}
		})
		setLayer(ID, "hat", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.hat
			},
			srcfn(options) {
				if (isObject(options.hat)) {
					return options.hat ? __resolve(AVATARPATH, `hat/${options.hat.src}.png`) : options.dummy
				}
				return options.hat ? __resolve(AVATARPATH, `hat/${options.hat}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.hat)) {
					if (!options.hat.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.hat)) {

					if (!options.hat.fixcolor) {

						return options.hat.color
					}
				}
			}
		})
		setLayer(ID, "addon_body", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.addon.body
			},
			srcfn(options) {
				return options.addon.tear ? __resolve(AVATARPATH, `addon/body.png`) : options.dummy
			},

		})
		setLayer(ID, "addon_bottom", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.addon.bottom
			},
			srcfn(options) {
				return options.addon.bottom ? __resolve(AVATARPATH, `addon/bottom.png`) : options.dummy
			},

		})
		setLayer(ID, "addon_face", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.addon.face
			},
			srcfn(options) {
				return options.addon.face ? __resolve(AVATARPATH, `addon/face.png`) : options.dummy
			},

		})
		setLayer(ID, "addon_hair", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.addon.hair
			},
			srcfn(options) {
				return options.addon.hair ? __resolve(AVATARPATH, `addon/hair.png`) : options.dummy
			},

		})
		setLayer(ID, "addon_mouth", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.addon.mouth
			},
			srcfn(options) {
				return options.addon.mouth ? __resolve(AVATARPATH, `addon/mouth.png`) : options.dummy
			},

		})
		setLayer(ID, "addon_penis", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.addon.penis
			},
			srcfn(options) {
				return options.addon.penis ? __resolve(AVATARPATH, `addon/penis.png`) : options.dummy
			},

		})
		setLayer(ID, "frame", {
			width: 180,
			height: 260,
			z: layerID++,
			showfn(options) {

				return !!options.frame
			},
			srcfn(options) {
				if (isObject(options.frame)) {
					return options.frame ? __resolve(AVATARPATH, `frame/${options.frame.src}.png`) : options.dummy
				}
				return options.frame ? __resolve(AVATARPATH, `frame/${options.frame}.png`) : options.dummy
			},
			blendModefn(options) {
				if (isObject(options.frame)) {
					if (!options.frame.fixcolor) {
						return BLENDMODE.MULTIPLY
					}
				}

			},
			blendfn(options) {
				if (isObject(options.frame)) {

					if (!options.frame.fixcolor) {

						return options.frame.color
					}
				}
			}
		})

	}
	Avatarlayer("Avatar")
	new Portraitlayer("Portrait")
	new Portraitlayer("Emoji")
	new Shoplayer("Shop")
	interface AnimationsOption {
		name: string,
		seconds: number,
		frames: (number | number[] | number[][]),
		percentual?: Array<number[]>,
		duration?: number
	}
	interface AnimationsProps {
		blend?: string | string[] | string[][] | object | object[] | object[][],
		alpha?: number | number[] | number[][],
		show?: boolean | boolean[] | boolean[][],
		brightness?: number | number[] | number[][],
		dx?: number | number[] | number[][],
		dy?: number | number[] | number[][],
		contrast?: number | number[] | number[][],
	}
	export function animation(options: AnimationsOption, props: AnimationsProps = {}): void {
		if (!options.seconds) {
			throw new Error("options对象必须有name frames seconds 属性" + JSON.stringify(options));

		}
		if (!options.frames) {
			throw new Error("options对象必须有name frames seconds 属性" + JSON.stringify(options));

		}
		if (!options.name) {
			throw new Error("options对象必须有name frames seconds 属性" + JSON.stringify(options));

		}

		const s = 1000 * options.seconds
		let n = 0
		const obj = {}
		const propskey = Object.keys(props)
		// console.log(Object.keys(props));

		const frames = options.frames
		if (typeof options.frames === "number") {
			obj["frames"] = options.frames
			options.duration ? obj["duration"] = options.duration : obj["duration"] = s / options.frames

		}
		if (Array.isArray(options.frames) && Array.isArray(options.percentual)) {
			obj["keyframes"] = options.percentual.map((v1, i1) => v1.map(
				(v2, i2) => {
					let num

					if (n === 0) {
						n = s / 100 * v2
						num = n
					} else {
						num = n
						n = (s / 100 * v2)
						num = n - num
					}
					// console.log(v2, options.frames[i], n, num, i);
					const o = {

						duration: num,
					}
					Array.isArray(frames[i1]) ? o["frame"] = frames[i1][i2] : o["frame"] = frames[i2]


					propskey.forEach((v3) => {
						if (Array.isArray(props[v3])) {
							if (Array.isArray(props[v3][i1])) {
								o[v3] = props[v3][i1][i2]
							} else {
								o[v3] = props[v3][i2]
							}
						} else {
							o[v3] = props[v3]
						}
					})
					return o
				}
			)).flat()
		}
		console.log(obj);

		Renderer.Animations[options.name] = obj
	}
	animation({
		name: "eyes",
		seconds: 5,
		frames: [0, 1, 2, 3, 2, 1, 0],
		percentual: [[58, 60, 62, 64, 66, 68, 70], [84, 85, 86, 87, 88, 89, 90], [94, 95, 96, 97, 98, 99, 100]],
	})
	export var AVATARMODEL = Renderer.locateModel("Avatar", "avatar");
	export var PORTRAITMODEL = Renderer.locateModel("Portrait", "portrait");
	export var SHOPMODEL = Renderer.locateModel("Shop", "shop");
	export var options = AVATARMODEL.defaultOptions();
	export var shopoptions = SHOPMODEL.defaultOptions();

	var AVATARCANVAS = AVATARMODEL.createCanvas();
	AVATARMODEL.render(AVATARCANVAS, options);
	AVATARMODEL.animate(AVATARCANVAS, options)
	var PORTRAITCANVAS = PORTRAITMODEL.createCanvas();
	PORTRAITMODEL.render(PORTRAITCANVAS, options)
	PORTRAITMODEL.animate(PORTRAITCANVAS, options)
		var SHOPCANVAS = AVATARMODEL.createCanvas();
	SHOPMODEL.render(SHOPCANVAS, shopoptions);
	export const cacheEmoji = new Map()


	export function RandomNPCEmoji(FACES, O?) {
		const randomArray = (arr) => arr[parseInt(Math.random() * (arr.length - 1))]
		const OPTION = {
			fliter: {},
			emoadd: {}
		}
		const CM = {
			CMSkin: [
				"health",
				"white",
				"mugi",
				"dark",
				"black"
			], CMHairColor: [
				"black",
				"darkbrown",
				"wine",
				"brown",
				"milktea",
				"blond",
				"softblond",
				"platinum",
				"silver",
				"white",
				"purple",
				"green",
				"blue",
				"aqua",
				"pink"
			], CMHairstyle: [
				"natural",
				"straight"
			], CMEyeColor: [
				"black",
				"brown",
				"emerald",
				"green",
				"lightgreen",
				"blue",
				"aqua",
				"purple",
				"lightpurple",
				"white",
				"amber",
				"red"
			], CMEyetype: ["a", "b"]
		}
		const hair = randomArray(CM.CMHairColor)
		const randomplus1 = v => parseInt(Math.random() * v) + 1
		OPTION["hairback"] = `straight/${hair}_${randomplus1(4)}`
		OPTION["hairfront"] = `${randomArray(CM.CMHairstyle)}/${hair}_1`
		OPTION["body"] = `${randomArray(CM.CMSkin)}/body_${randomplus1(3)}`
		let emote = A.emote[FACES]
		const emoadd = ["tear", "shy", "red", "hurt"]
		const nomal = ["eyebrow", "mouth", "frame"]
		emoadd.forEach(va => {
			OPTION["emoadd"][va] = emote[va]
		})
		nomal.forEach(va => {
			OPTION[va] = emote[va]
		})
		OPTION["eyes"] = [randomArray(CM.CMEyeColor), emote["eyes"].includes("full") ? emote["eyes"] + randomArray(CM.CMEyetype) + "_idle" : emote["eyes"]].join("/")


		var EMOJIMODEL = Renderer.locateModel("Emoji");
		var EMOJICANVAS = EMOJIMODEL.createCanvas();
		EMOJIMODEL.render(EMOJICANVAS, OPTION)
		EMOJIMODEL.animate(EMOJICANVAS, OPTION)
		O["ID"] ? EMOJICANVAS.canvas.id = O["ID"] : null
		O["CLASS"] ? EMOJICANVAS.canvas.className = O["CLASS"] : null
		return EMOJICANVAS.canvas
	}
	export function avatarEmoji(FACES, O?) {
		const OPTIONSTR = JSON.stringify(options)
		const OPTION = JSON.parse(OPTIONSTR)
		let emote = A.emote[FACES]
		const emoadd = ["tear", "shy", "red", "hurt"]
		const nomal = ["eyebrow", "mouth", "frame"]
		emoadd.forEach(va => {
			OPTION["emoadd"][va] = emote[va]
		})
		nomal.forEach(va => {
			OPTION[va] = emote[va]
		})
		OPTION["eyes"] = [V.PC.info.eyecolor, emote["eyes"].includes("full") ? emote["eyes"] + T.type[V.PC.eyes] + "_idle" : emote["eyes"]].join("/")
		var EMOJIMODEL = Renderer.locateModel("Emoji");
		var EMOJICANVAS = EMOJIMODEL.createCanvas();
		EMOJIMODEL.render(EMOJICANVAS, OPTION)
		EMOJIMODEL.animate(EMOJICANVAS, OPTION)
		O["ID"] ? EMOJICANVAS.canvas.id = O["ID"] : null
		O["CLASS"] ? EMOJICANVAS.canvas.className = O["CLASS"] : null
		return EMOJICANVAS.canvas
	}
	export function getCanvas() {
		return AVATARCANVAS.canvas
	}
	export function getShop() {
		return SHOPCANVAS.canvas
	}
	export function getPortrait() {
		return PORTRAITCANVAS.canvas
	}
	export function setShop(colors) {
		const group = ["outter","top","inner_up"]

		const opt = shopoptions
		const showcase = V.showcase
			const isbeast = group.includes(showcase.layer) && showcase.hasDif.breast
		const fixcolor = showcase.fixcolor
		const color = colors ? colors : showcase.color
		let src = fixcolor ? __resolve(showcase.layer,showcase.index,`${color}${isbeast ? "_1"  :""}`) : __resolve(showcase.layer,showcase.index,`basic${isbeast ? "_1"  :""}`)

		// console.log(src,SHOPMODEL);
		
		

		opt["acc"] = showcase.acc ?__resolve(showcase.layer,showcase.index,showcase.acc) : null
		opt["dress"] = {
			fixcolor,
			color,
			src
		}
		// console.log(opt,SHOPMODEL);
		SHOPMODEL.redraw()
	}

	export function setAvatar(key: string, option,updates:boolean ) {

		
		if (!options) { return option }
		const keyName = key.includes(".")
		const keys = key.split(".")
		let change
		let last = key
		if (keyName) {
			last = keys[keys.length - 1]
			change = options[keys[0]]
		} else {
			change = options
		}
		if (!change[last]) change[last] = option
		let update = updates ? true :false 
		const isObject = Object.prototype.toString.call(option) === "[object Object]"
		const isArray = Array.isArray(options)
		if (isObject) {
			const keyOption = option ? Object.entries(option) : []
			keyOption.forEach((value, index) => {
				if (change[last][value[0]] !== value[1]) {
					change[last][value[0]] = value[1]
					update = true
				}
			});
		}
		if (!isObject && !isArray) {
			if (change[last] !== option) {
				change[last] = option
				update = true
			}
		}
		if (!update) {
					console.log("未更新:",key,option,change,last,change[last] );
					if (last ==="penis") {
						console.log(last ==="penis");
						
						AVATARMODEL.redraw()
					}
		}
		if (update) {
					console.log("更新:",key,option,change,last,change[last] );
			AVATARMODEL.redraw()
			PORTRAITMODEL.redraw()
		}
		return option

	}
}
window.Avatar = Avatar
window.setAvatar = (key, options) => Avatar.setAvatar(key, options)
window["avatarEmoji"] = (FACE, option) => Avatar.avatarEmoji(FACE, option)
window["RandomNPCEmoji"] = (FACE, option) => Avatar.RandomNPCEmoji(FACE, option)