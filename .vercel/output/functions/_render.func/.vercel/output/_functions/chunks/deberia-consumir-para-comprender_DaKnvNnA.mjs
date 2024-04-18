import { a6 as __astro_tag_component__, j as Fragment, a5 as createVNode } from './astro_DBWtJ5Wz.mjs';
import './astro/assets-service_Bo7imOfC.mjs';
import { k as $$Image } from './pages/404_CWz3tLlB.mjs';
import 'clsx';

const frontmatter = {
  "publishDate": "2022-03-17T00:00:00.000Z",
  "title": "\xBFDeber\xEDa consumir drogas para comprender a una persona que las usa?",
  "excerpt": "Entrada para el blog de Psicolog\xEDa Cl\xEDnica de la Fundaci\xF3n Universitaria Konrad Lorenz. Intento explicar por qu\xE9 es una falacia pretender que s\xF3lo quien consume SPA's tiene una opini\xF3n informada sobre ellas.",
  "image": "~/assets/images/consumir-comprender.png",
  "category": "Consumo de SPA",
  "tags": ["Consumo SPA"],
  "metadata": {
    "canonical": "https://www.konradlorenz.edu.co/blog/deberia-consumir-drogas-para-entender-a-una-persona-que-las-usa/"
  },
  "readingTime": 1
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: ["Puedes ingresar al art\xEDculo a trav\xE9s de ", createVNode(_components.a, {
      href: "https://www.konradlorenz.edu.co/blog/deberia-consumir-drogas-para-entender-a-una-persona-que-las-usa/",
      children: "este enlace"
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/post/deberia-consumir-para-comprender.mdx";
const file = "E:/astrowind/src/content/post/deberia-consumir-para-comprender.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "E:/astrowind/src/content/post/deberia-consumir-para-comprender.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
