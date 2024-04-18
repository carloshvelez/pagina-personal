const tejiendoVinculos = new Proxy({"src":"/_astro/tejiendo-vinculos.BUY4JVHg.png","width":1058,"height":840,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/astrowind/src/assets/images/tejiendo-vinculos.png";
							}
							
							return target[name];
						}
					});

export { tejiendoVinculos as default };
