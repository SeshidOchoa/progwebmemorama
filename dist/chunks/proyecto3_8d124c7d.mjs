import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_0f1c6601.mjs';
import 'clsx';
import 'html-escaper';

const html = "";

				const frontmatter = {"title":"El proyecto 3 (23-Noviembre-2023)","link":"/proyecto3/","description":"Este es el proyecto 3."};
				const file = "C:/Users/emily/OneDrive/Escritorio/progwebmemorama/src/content/proyectos/proyecto3.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
