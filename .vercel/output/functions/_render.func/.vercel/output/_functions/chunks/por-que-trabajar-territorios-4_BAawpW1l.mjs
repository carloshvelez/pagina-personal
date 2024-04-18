import { a6 as __astro_tag_component__, j as Fragment, a5 as createVNode } from './astro_DBWtJ5Wz.mjs';
import './astro/assets-service_Bo7imOfC.mjs';
import { k as $$Image } from './pages/404_CWz3tLlB.mjs';
import 'clsx';

const frontmatter = {
  "publishDate": "2023-07-23T00:00:00.000Z",
  "title": '\xBFPor qu\xE9 deber\xEDas trabajar en "los territorios"? - Parte 4',
  "excerpt": "Tercera entrega de una serie sobre las razones para ejercer la psicolog\xEDa cl\xEDnica en territorios diferentes a las ciudades principales.",
  "image": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "category": "Reflexiones basadas en datos",
  "tags": ["Conflicto armado", "Psicolog\xEDa cl\xEDnica", "An\xE1lisis de datos", "R"],
  "metadata": {
    "canonical": "https://astrowind.vercel.app/astrowind-template-in-depth"
  },
  "readingTime": 6
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "relaci\xF3n-entre-tasa-de-eventos-violentos-y-tasa-de-atenci\xF3n-en-salud-mental-en-colombia",
    "text": "Relaci\xF3n entre tasa de eventos violentos y tasa de atenci\xF3n en salud mental en Colombia."
  }, {
    "depth": 3,
    "slug": "comentarios-finales",
    "text": "Comentarios finales."
  }, {
    "depth": 3,
    "slug": "lista-de-referencias",
    "text": "Lista de referencias"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "relaci\xF3n-entre-tasa-de-eventos-violentos-y-tasa-de-atenci\xF3n-en-salud-mental-en-colombia",
      children: "Relaci\xF3n entre tasa de eventos violentos y tasa de atenci\xF3n en salud mental en Colombia."
    }), "\n", createVNode(_components.p, {
      children: ["En ", createVNode(_components.a, {
        href: "https://www.notion.so/I-4d2c15233f8d4b828c01bbee3942f617?pvs=21",
        children: "la primera parte de esta entrega"
      }), " anticipamos que es posible observar una relaci\xF3n negativa entre la tasa de eventos violentos en el marco del conflicto armado  y la tasa de atenciones en salud mental en los departamentos. Tambi\xE9n te presentamos dos informes en los que se analizan por separado esas dos variables; si no los has revisado te invitamos a que los consultes en ", createVNode(_components.a, {
        href: "https://www.notion.so/Por-qu-deber-as-trabajar-en-los-territorios-Parte-2-d668e5387a364e6889373d7f8ca4ade0?pvs=21",
        children: "este post"
      }), " y ", createVNode(_components.a, {
        href: "https://www.notion.so/Por-qu-deber-as-trabajar-en-los-territorios-Parte-3-d6edc70885ac44f08c4eafa3dafa2403?pvs=21",
        children: "en este otro"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "En el tercer y \xFAltimo informe de esta entrega tomaremos la informaci\xF3n que hemos estado explorando y la usaremos para responder una importante pregunta \xBFcu\xE1l es la relaci\xF3n entre la tasa departamental de atenciones en salud mental y la tasa departamental de eventos violentos en el periodo 2017 - 2021 en Colombia?"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "(La carga de este recurso puede tomar algunos segundos)"
      })
    }), "\n", createVNode("iframe", {
      title: "correlacion atencion",
      width: "800",
      height: "536",
      src: "https://app.powerbi.com/view?r=eyJrIjoiMzBkOWM0OGUtYTliMi00NTllLWJjYTYtMTk4ZWY4ZTg4OWFlIiwidCI6IjI5OWEyODgxLTEzODAtNDAyMC1iNDJmLTcxNWEzNWUxYmNhZiIsImMiOjR9",
      frameborder: "0",
      allowFullScreen: "true"
    }), "\n", createVNode(_components.p, {
      children: "Como en informes pasados, puedes filtrar la informaci\xF3n seg\xFAn el a\xF1o que te interese. Considera que el eje x del gr\xE1fico de dispersi\xF3n nuevamente lo transformamos a una escala logar\xEDtmica. Esto se hace porque las diferencias interdepartamentales en esta variable son muy grandes, y conservar una escala aritm\xE9tica usual dificultar\xEDa mucho el an\xE1lisis visual."
    }), "\n", createVNode(_components.p, {
      children: "Desafortunadamente, nuestra base de datos no contaba con RIPS discriminados para los departamentos de Amazonas, Guain\xEDa, Guaviare, Putumayo, San adnr\xE9s y Providencia, Vaup\xE9s y Vichada; por lo tanto no se consideraron en el an\xE1lisis de correlaci\xF3n."
    }), "\n", createVNode(_components.p, {
      children: "En la parte inferior izquierda encuentras las correlaciones r de Pearson y rho de Spearman para cada a\xF1o y para el total del periodo. Recuerda que estos estad\xEDsticos arrojan un valor entre -1 y 1; valores positivos indican asociaciones positivas y, valores negativos, asociaciones negativas. Debido a que la distribuci\xF3n de las variables no cumple los supuestos para un an\xE1lisis param\xE9trico, el estad\xEDstico v\xE1lido es el coeficiente de Spearman; no obstante, se presenta el de Pearson porque es el c\xE1lculo que el software toma como base para dibujar la l\xEDnea de tendencia en el gr\xE1fico."
    }), "\n", createVNode(_components.p, {
      children: "Si bien se observan correlaciones negativas bajas para cada uno de los a\xF1os, estas no son estad\xEDsticamente significativas. Aunque el an\xE1lisis visual a\xF1o por a\xF1o sugiere cierta tendencia negativa, el n\xFAmero anual de observaciones es bajo (25), lo cual aumenta el error est\xE1ndar y por lo tanto la significancia estad\xEDstica. Para el an\xE1lisis del periodo en su conjunto s\xED tenemos un mayor n\xFAmero de observaciones y encontramos una relaci\xF3n que, si bien es un poco m\xE1s baja que para los a\xF1os 2019 - 2021; se presenta como estad\xEDsticamente significativa."
    }), "\n", createVNode(_components.p, {
      children: "As\xED pues, es seguro decir que en Colombia, para el periodo 2017 - 2021 se present\xF3 una correlaci\xF3n negativa con un tama\xF1o del efecto peque\xF1o, entre la tasa de atenciones en salud mental y la tasa de eventos victimizantes en el marco del conflicto armado. En otras palabras, los datos confirman una tendencia de menor n\xFAmero de atenciones en salud mental en los departamentos en los que se presenta mayor cantidad de este tipo de eventos."
    }), "\n", createVNode(_components.p, {
      children: "En el informe esto es claro para algunos departamentos. Por ejemplo, si pasas el cursor sobre los puntos que se ubican m\xE1s cerca al extremo inferior derecho del gr\xE1fico encontrar\xE1s departamentos en los que la tasa de eventos victimizantes es muy grande y la de atenci\xF3n en salud mental es baja. El caso m\xE1s extremo es el del Choc\xF3, pero tambi\xE9n hay otros departamentos con un patr\xF3n similar, como Cauca, Arauca, Caquet\xE1, C\xF3rdoba."
    }), "\n", createVNode(_components.p, {
      children: "Por otra parte, departamentos como Cundinamarca, Boyac\xE1, Atl\xE1ntico, Quind\xEDo y Santander, se ubican en la zona del cuadrante superior derecho."
    }), "\n", createVNode(_components.p, {
      children: "Un departamento que requiere toda nuestra atenci\xF3n es el de Casanare, pues presenta tasas importantes de eventos victimizantes, pero, entre los departamentos analizados,  sistem\xE1ticamente se presenta como el de menor tasa de atenci\xF3n."
    }), "\n", createVNode(_components.p, {
      children: "Evidentemente, tambi\xE9n hay excepciones. Por ejemplo Nari\xF1o se presenta en todo el periodo como un departamento con alta tasa de v\xEDctimas, pero estas cifras se corresponden con sus altas tasas de atenci\xF3n."
    }), "\n", createVNode(_components.p, {
      children: "Se ha dicho que en algunas zonas en las que es m\xE1s intenso el conflicto armado, tambi\xE9n lo es el abandono del estado. Quiz\xE1 estos resultados aportan evidencia de que es as\xED. Podr\xEDamos preguntarnos si en esos departamentos hay un mayor d\xE9ficit de profesionales de la salud mental; seguramente es as\xED, pero quiz\xE1 lo soportemos con datos en un futuro post. Mientras tanto, te invitamos a preguntarte \xBFNo es hora de priorizar tu trabajo sobre estos departamentos?"
    }), "\n", createVNode(_components.h3, {
      id: "comentarios-finales",
      children: "Comentarios finales."
    }), "\n", createVNode(_components.p, {
      children: "Lo que presentamos a lo largo de estas cuatro entregas es s\xF3lo una mirada cuantitativa con base en dos conjuntos de datos. Esto nos permite  hacer algunas reflexiones sobre la violencia y la salud mental en nuestro pa\xEDs, pero es evidente que la realidad es m\xE1s compleja que eso."
    }), "\n", createVNode(_components.p, {
      children: "La informaci\xF3n reportada concierne a los departamentos como unidad de an\xE1lisis. Es decir, reportamos los eventos de violencia y las atenciones en salud mental para cada departamento. N\xF3tese que la informaci\xF3n sobre esas atenciones no se discrimina para las v\xEDctimas de eventos violentos, sino que hace referencia a los servicios que se le prestaron a toda la poblaci\xF3n."
    }), "\n", createVNode(_components.p, {
      children: "Las categor\xEDas diagn\xF3sticas reportadas en los RIPS no reflejan de manera precisa el sufrimiento de las personas que son atendidas. De hecho, podr\xEDan aumentar el riesgo de patologizar experiencias humanas de sufrimiento que requieren atenci\xF3n pero no constituyen ninguna patolog\xEDa."
    }), "\n", createVNode(_components.p, {
      children: "Adem\xE1s, Los datos sobre atenci\xF3n en salud mental se refieren a aqu\xE9lla que se presta en las instituciones prestadoras de servicios de salud, pero no se puede perder de vista que ese no es el \xFAnico componente para asegurar la salud mental en los territorios. De hecho, el informe de la Comisi\xF3n de la verdad (2022a) recomienda programas colectivos, y referencia experiencias comunitarias con impactos positivos sobre el bienestar de las comunidades (2022b), que no se ven reflejados en los RIPS."
    }), "\n", createVNode(_components.p, {
      children: "Con todo, la respuesta a la pregunta que da nombre a este post, es muy clara: Se debe trabajar en los territorios porque es necesario posicionar la salud mental en diferentes zonas de Colombia, no s\xF3lo porque su (nuestra) historia de violencia ha dado lugar a necesidades a las que podemos y debemos darle respuesta; sino tambi\xE9n porque su acceso a los servicios de atenci\xF3n es, para algunos casos, reducido. Esto configura oportunidades de formaci\xF3n, investigaci\xF3n e impacto social en los que puedes tener un rol preponderante."
    }), "\n", createVNode(_components.h3, {
      id: "lista-de-referencias",
      children: "Lista de referencias"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Comisi\xF3n para el esclarecimiento de la verdad, la convivencia y la no repetici\xF3n (2022a). Hay futuro si hay verdad; informe final. ", createVNode(_components.em, {
          children: "Tomo 5: Sufrir la guerra y rehacer la vida. Impactos, afrontamientos y resistencias."
        }), " Edici\xF3n digital. Bogot\xE1, Colombia.  ISBN 978-628-7590-21-2. ", createVNode(_components.a, {
          href: "https://www.comisiondelaverdad.co/sufrir-la-guerra-y-rehacer-la-vida",
          children: "https://www.comisiondelaverdad.co/sufrir-la-guerra-y-rehacer-la-vida"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Comisi\xF3n para el esclarecimiento de la verdad, la convivencia y la no repetici\xF3n (2022b). Hay futuro si hay verdad; informe final. ", createVNode(_components.em, {
          children: "Tomo 2: Hallazgos y recomendaciones de la Comisi\xF3n de la verdad de Colombia."
        }), " Edici\xF3n digital. Bogot\xE1, Colombia.  ISBN 978-628-7590-20-5. ", createVNode(_components.a, {
          href: "https://www.comisiondelaverdad.co/hallazgos-y-recomendaciones-1",
          children: "https://www.comisiondelaverdad.co/hallazgos-y-recomendaciones-1"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Departamento administrativo nacional de estad\xEDstica - DANE (Septiembre de 2022). Proyecciones de poblaci\xF3n. ", createVNode(_components.a, {
          href: "https://www.dane.gov.co/index.php/estadisticas-por-tema/demografia-y-poblacion/proyecciones-de-poblacion",
          children: "https://www.dane.gov.co/index.php/estadisticas-por-tema/demografia-y-poblacion/proyecciones-de-poblacion"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Departamento administrativo nacional de estad\xEDstica - DANE (Septiembre de 2022). Geovisor de consulta de codificaci\xF3n de la divipola. ", createVNode(_components.a, {
          href: "https://geoportal.dane.gov.co/geovisores/territorio/consulta-divipola-division-politico-administrativa-de-colombia/",
          children: "https://geoportal.dane.gov.co/geovisores/territorio/consulta-divipola-division-politico-administrativa-de-colombia/"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Ministerio de Salud y protecci\xF3n social (2022). Registros Individuales de Prestaci\xF3n de Servicios de Salud - RIPS. [Conjunto de datos]. Versi\xF3n del 3 de junio de 2022. Portal de Datos abiertos del estado colombiano. ", createVNode(_components.a, {
          href: "https://www.datos.gov.co/Salud-y-Protecci-n-Social/Registros-Individuales-de-Prestaci-n-de-Servicios-/4k9h-8qiu",
          children: "https://www.datos.gov.co/Salud-y-Protecci-n-Social/Registros-Individuales-de-Prestaci-n-de-Servicios-/4k9h-8qiu"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Unidad para la atenci\xF3n y la reparaci\xF3n integral a las v\xEDctimas (Septiembre de 2022). Publicaci\xF3n de datos abiertos [Conjunto de datos]. ", createVNode(_components.a, {
          href: "https://www.unidadvictimas.gov.co/es/transparencia-y-acceso-la-informacion-publica/publicacion-de-datos-abiertos/161",
          children: "https://www.unidadvictimas.gov.co/es/transparencia-y-acceso-la-informacion-publica/publicacion-de-datos-abiertos/161"
        })]
      }), "\n"]
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
const url = "src/content/post/por-que-trabajar-territorios-4.mdx";
const file = "E:/astrowind/src/content/post/por-que-trabajar-territorios-4.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "E:/astrowind/src/content/post/por-que-trabajar-territorios-4.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
