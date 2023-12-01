/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro_0f1c6601.mjs';
import 'clsx';
import { $ as $$Layout } from './blog_af1f3da7.mjs';
import 'html-escaper';

const $$Astro = createAstro();
const $$Proyecto3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proyecto3;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "article": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="w-full flex justify-center dark:bg-violet-200 dark:text-white mt-5 mb-5"><div class=" md:max-w-5xl md:flex items-center justify-center"><div class=" w-full flex justify-center md:hidden mt-16 mb-10"></div><div><div class=" ml-5  p-3 rounded-xl"><h1 class="text-2xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-purple-500 to-violet-400">Proyecto 3</h1></div></div><div class=" hidden md:flex justify-end w-24 transition shadow-lg hover:shadow-2xl opacity-80 hover:opacity-100 hover:scale-105"><img src="/public/logocmh.png" alt="familia" class=" h-126 rounded-lg"></div></div></div>` })}`;
}, "C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/pages/proyecto3.astro", void 0);

const $$file = "C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/pages/proyecto3.astro";
const $$url = "/proyecto3";

export { $$Proyecto3 as default, $$file as file, $$url as url };
