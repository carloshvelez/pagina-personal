const calculadoraIcf = new Proxy({"src":"/_astro/calculadora-icf.CEWWk2Bt.png","width":576,"height":557,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/astrowind/src/assets/images/calculadora-icf.png";
							}
							
							return target[name];
						}
					});

export { calculadoraIcf as default };
