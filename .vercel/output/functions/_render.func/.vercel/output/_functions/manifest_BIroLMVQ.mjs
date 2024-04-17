import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_DBWtJ5Wz.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DnFK6dK7.js"}],"styles":[{"type":"external","src":"/_astro/privacy.BJNNrnYO.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DnFK6dK7.js"}],"styles":[{"type":"external","src":"/_astro/privacy.BJNNrnYO.css"}],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.md","pathname":"/privacy","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DnFK6dK7.js"}],"styles":[{"type":"external","src":"/_astro/privacy.BJNNrnYO.css"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DnFK6dK7.js"}],"styles":[{"type":"external","src":"/_astro/privacy.BJNNrnYO.css"}],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.md","pathname":"/terms","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DnFK6dK7.js"}],"styles":[{"type":"external","src":"/_astro/privacy.BJNNrnYO.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}}],"site":"https://astrowind.vercel.app","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["E:/astrowind/src/pages/privacy.md",{"propagation":"none","containsHead":true}],["E:/astrowind/src/pages/terms.md",{"propagation":"none","containsHead":true}],["E:/astrowind/src/pages/[...blog]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["E:/astrowind/src/pages/[...blog]/[category]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["E:/astrowind/src/pages/[...blog]/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["E:/astrowind/src/pages/[...blog]/index.astro",{"propagation":"in-tree","containsHead":true}],["E:/astrowind/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["E:/astrowind/src/pages/services.astro",{"propagation":"none","containsHead":true}],["E:/astrowind/src/pages/404.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["E:/astrowind/src/utils/blog.ts",{"propagation":"in-tree","containsHead":false}],["E:/astrowind/src/components/blog/RelatedPosts.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["E:/astrowind/src/components/widgets/BlogHighlightedPosts.astro",{"propagation":"in-tree","containsHead":false}],["E:/astrowind/src/components/widgets/BlogLatestPosts.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/[category]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["E:/astrowind/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DN-M2Bbe.mjs","/src/pages/rss.xml.ts":"chunks/pages/rss_BvCCuBLm.mjs","/src/pages/services.astro":"chunks/pages/services_DeMC100v.mjs","/src/pages/terms.md":"chunks/pages/terms_CRTBW_19.mjs","\u0000@astrojs-manifest":"manifest_BIroLMVQ.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CZZl6DE3.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_aIywuNci.mjs","\u0000@astro-page:src/pages/privacy@_@md":"chunks/privacy_D9mWnnVY.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"chunks/rss_BYzCxAIW.mjs","\u0000@astro-page:src/pages/services@_@astro":"chunks/services_CQJMn0hq.mjs","\u0000@astro-page:src/pages/terms@_@md":"chunks/terms_BQIzDOMY.mjs","\u0000@astro-page:src/pages/[...blog]/[category]/[...page]@_@astro":"chunks/_.._BK8NkZMV.mjs","\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro":"chunks/_.._D1ByjbbX.mjs","\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro":"chunks/_.._OklFd4KV.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CTcBOZZh.mjs","\u0000@astro-page:src/pages/[...blog]/index@_@astro":"chunks/index_Cx1zCT0U.mjs","E:/astrowind/src/assets/images/app-store.png":"chunks/app-store_B4hRh1Rz.mjs","E:/astrowind/src/assets/images/calculadora-icf.png":"chunks/calculadora-icf_ClUKoMbJ.mjs","E:/astrowind/src/assets/images/consumir-comprender.png":"chunks/consumir-comprender_BY-VDlUA.mjs","E:/astrowind/src/assets/images/default.png":"chunks/default_CfZtaiO2.mjs","E:/astrowind/src/assets/images/google-play.png":"chunks/google-play_BdQbRIp1.mjs","E:/astrowind/src/assets/images/hero-image.png":"chunks/hero-image_DDTQfPK7.mjs","E:/astrowind/src/assets/images/psytrack.png":"chunks/psytrack_CROjUI_n.mjs","E:/astrowind/src/assets/images/tejiendo-vinculos.png":"chunks/tejiendo-vinculos_DgMxPVQb.mjs","E:/astrowind/src/content/post/deberia-consumir-para-comprender.mdx?astroContentCollectionEntry=true":"chunks/deberia-consumir-para-comprender_BxDCdVNb.mjs","E:/astrowind/src/content/post/por-que-trabajar-territorios-1.mdx?astroContentCollectionEntry=true":"chunks/por-que-trabajar-territorios-1_CyxA5l-K.mjs","E:/astrowind/src/content/post/por-que-trabajar-territorios-2 .mdx?astroContentCollectionEntry=true":"chunks/por-que-trabajar-territorios-2 _D-fqFSub.mjs","E:/astrowind/src/content/post/por-que-trabajar-territorios-3.mdx?astroContentCollectionEntry=true":"chunks/por-que-trabajar-territorios-3_Bf7Apc35.mjs","E:/astrowind/src/content/post/por-que-trabajar-territorios-4.mdx?astroContentCollectionEntry=true":"chunks/por-que-trabajar-territorios-4_BxNrtxYZ.mjs","E:/astrowind/src/content/post/deberia-consumir-para-comprender.mdx?astroPropagatedAssets":"chunks/deberia-consumir-para-comprender_DUpCO1Mx.mjs","E:/astrowind/src/content/post/por-que-trabajar-territorios-1.mdx?astroPropagatedAssets":"chunks/por-que-trabajar-territorios-1_CC5oq36h.mjs","E:/astrowind/src/content/post/por-que-trabajar-territorios-2 .mdx?astroPropagatedAssets":"chunks/por-que-trabajar-territorios-2 _jdEqXAV4.mjs","E:/astrowind/src/content/post/por-que-trabajar-territorios-3.mdx?astroPropagatedAssets":"chunks/por-que-trabajar-territorios-3_CQyoqf-H.mjs","E:/astrowind/src/content/post/por-que-trabajar-territorios-4.mdx?astroPropagatedAssets":"chunks/por-que-trabajar-territorios-4_Ck3ODYgl.mjs","E:/astrowind/src/content/post/deberia-consumir-para-comprender.mdx":"chunks/deberia-consumir-para-comprender_DaKnvNnA.mjs","E:/astrowind/src/content/post/por-que-trabajar-territorios-1.mdx":"chunks/por-que-trabajar-territorios-1_DZidhJy9.mjs","E:/astrowind/src/content/post/por-que-trabajar-territorios-2 .mdx":"chunks/por-que-trabajar-territorios-2 _lB4oqJ3b.mjs","E:/astrowind/src/content/post/por-que-trabajar-territorios-3.mdx":"chunks/por-que-trabajar-territorios-3_DEaz8uaw.mjs","E:/astrowind/src/content/post/por-que-trabajar-territorios-4.mdx":"chunks/por-que-trabajar-territorios-4_BAawpW1l.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DnFK6dK7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/favicon.CI6a9afM.ico","/_astro/inter-cyrillic-ext-wght-normal.DIEz8p5i.woff2","/_astro/inter-cyrillic-wght-normal.BmJJXa8e.woff2","/_astro/inter-greek-ext-wght-normal.D5AYLNiq.woff2","/_astro/inter-greek-wght-normal.DyIDNIyN.woff2","/_astro/inter-vietnamese-wght-normal._GQuwPVU.woff2","/_astro/inter-latin-ext-wght-normal.CN1pIXkb.woff2","/_astro/inter-latin-wght-normal.BgVq2Tq4.woff2","/_astro/karla-latin-ext-400-normal.DEzKSyE9.woff2","/_astro/karla-latin-400-normal.CQ1icEir.woff2","/_astro/urbanist-latin-ext-400-normal.CNcxkWar.woff2","/_astro/urbanist-latin-400-normal.DMbXJvHq.woff2","/_astro/favicon.Czy1EQHj.svg","/_astro/apple-touch-icon.sVLCCQq8.png","/_astro/app-store.t3tG4Jz3.png","/_astro/calculadora-icf.CEWWk2Bt.png","/_astro/google-play.ISTMcpLO.png","/_astro/psytrack.CDOqp4Th.png","/_astro/consumir-comprender.TjAgN5CA.png","/_astro/karla-latin-ext-400-normal.DXZZeZvo.woff","/_astro/karla-latin-400-normal.B5RG7IeC.woff","/_astro/urbanist-latin-ext-400-normal.CX_5Tx_C.woff","/_astro/urbanist-latin-400-normal.CLCb-oNW.woff","/_astro/default.CczmzLWf.png","/_astro/hero-image.DwIC_L_T.png","/_astro/tejiendo-vinculos.BUY4JVHg.png","/_astro/privacy.BJNNrnYO.css","/robots.txt","/_headers","/decapcms/config.yml","/decapcms/index.html","/_astro/hoisted.DnFK6dK7.js"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
