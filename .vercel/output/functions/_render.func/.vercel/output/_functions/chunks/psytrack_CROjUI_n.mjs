const psytrack = new Proxy({"src":"/_astro/psytrack.CDOqp4Th.png","width":447,"height":506,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/astrowind/src/assets/images/psytrack.png";
							}
							
							return target[name];
						}
					});

export { psytrack as default };
