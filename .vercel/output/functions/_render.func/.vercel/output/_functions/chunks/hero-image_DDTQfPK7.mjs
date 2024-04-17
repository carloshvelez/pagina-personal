const heroImage = new Proxy({"src":"/_astro/hero-image.DwIC_L_T.png","width":1600,"height":939,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/astrowind/src/assets/images/hero-image.png";
							}
							
							return target[name];
						}
					});

export { heroImage as default };
