import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_0f1c6601.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

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
  return toPath;
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
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.0206bfd2.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.0206bfd2.css"}],"routeData":{"route":"/formacion","type":"page","pattern":"^\\/formacion\\/?$","segments":[[{"content":"formacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/formacion.astro","pathname":"/formacion","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.0206bfd2.css"}],"routeData":{"route":"/proyecto1","type":"page","pattern":"^\\/proyecto1\\/?$","segments":[[{"content":"proyecto1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyecto1.astro","pathname":"/proyecto1","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.0206bfd2.css"}],"routeData":{"route":"/proyecto2","type":"page","pattern":"^\\/proyecto2\\/?$","segments":[[{"content":"proyecto2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyecto2.astro","pathname":"/proyecto2","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.0206bfd2.css"}],"routeData":{"route":"/proyecto3","type":"page","pattern":"^\\/proyecto3\\/?$","segments":[[{"content":"proyecto3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyecto3.astro","pathname":"/proyecto3","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.0206bfd2.css"},{"type":"inline","content":".fila[data-astro-cid-arbd3op2]{display:flex}.fila[data-astro-cid-arbd3op2] img[data-astro-cid-arbd3op2]{width:150px;height:175px;margin:5px;border:5px solid rgb(32,30,32)}img[data-astro-cid-arbd3op2]:hover{transform:scale(1.1)}\n"}],"routeData":{"route":"/proyectos","type":"page","pattern":"^\\/proyectos\\/?$","segments":[[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyectos.astro","pathname":"/proyectos","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.0206bfd2.css"}],"routeData":{"route":"/proyecto","type":"page","pattern":"^\\/proyecto\\/?$","segments":[[{"content":"proyecto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyecto.astro","pathname":"/proyecto","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.0206bfd2.css"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/pages/formacion.astro",{"propagation":"none","containsHead":true}],["C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/pages/proyecto.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/pages/proyecto1.astro",{"propagation":"none","containsHead":true}],["C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/pages/proyecto2.astro",{"propagation":"none","containsHead":true}],["C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/pages/proyecto3.astro",{"propagation":"none","containsHead":true}],["C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/pages/proyectos.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/proyecto@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/formacion@_@astro":"pages/formacion.astro.mjs","\u0000@astro-page:src/pages/proyecto1@_@astro":"pages/proyecto1.astro.mjs","\u0000@astro-page:src/pages/proyecto2@_@astro":"pages/proyecto2.astro.mjs","\u0000@astro-page:src/pages/proyecto3@_@astro":"pages/proyecto3.astro.mjs","\u0000@astro-page:src/pages/proyectos@_@astro":"pages/proyectos.astro.mjs","\u0000@astro-page:src/pages/proyecto@_@astro":"pages/proyecto.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/formacion.astro":"chunks/pages/formacion_73a67f5c.mjs","/src/pages/index.astro":"chunks/pages/index_bc6a89bf.mjs","/src/pages/proyecto.astro":"chunks/pages/proyecto_a1ffb102.mjs","/src/pages/proyecto1.astro":"chunks/pages/proyecto1_5c39d626.mjs","/src/pages/proyecto2.astro":"chunks/pages/proyecto2_f146e8fb.mjs","/src/pages/proyecto3.astro":"chunks/pages/proyecto3_da9d28ab.mjs","/src/pages/proyectos.astro":"chunks/pages/proyectos_6bc695be.mjs","\u0000@astrojs-manifest":"manifest_2c354a77.mjs","C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/content/proyectos/proyecto1.md?astroContentCollectionEntry=true":"chunks/proyecto1_0daf1f84.mjs","C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/content/proyectos/proyecto2.md?astroContentCollectionEntry=true":"chunks/proyecto2_c858631d.mjs","C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/content/proyectos/proyecto3.md?astroContentCollectionEntry=true":"chunks/proyecto3_8784360e.mjs","C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/content/proyectos/proyecto1.md?astroPropagatedAssets":"chunks/proyecto1_69118f82.mjs","C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/content/proyectos/proyecto2.md?astroPropagatedAssets":"chunks/proyecto2_41559dc5.mjs","C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/content/proyectos/proyecto3.md?astroPropagatedAssets":"chunks/proyecto3_fbe143cd.mjs","C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/content/proyectos/proyecto1.md":"chunks/proyecto1_df6a76c1.mjs","C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/content/proyectos/proyecto2.md":"chunks/proyecto2_b2827e9d.mjs","C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/content/proyectos/proyecto3.md":"chunks/proyecto3_8d124c7d.mjs","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
