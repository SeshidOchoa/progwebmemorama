/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro_0f1c6601.mjs';
import 'clsx';
import { $ as $$Layout } from './blog_af1f3da7.mjs';
import 'html-escaper';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "article": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="h-screen bg-cover bg-center bg-no-repeat" style="background-image: url('/Catbug.jpg');" dark-bg-violet-200 dark-text-white><div class="h-full flex flex-col justify-start items-center pt-8"><h1 class="text-4xl mb-4 text-center">Cuerpo de proyectos</h1><!-- Otro contenido de tu página --></div></div>` })}`;
}, "C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/pages/index.astro", void 0);

const $$file = "C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
