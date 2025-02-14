import { c as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DUtPMUiz.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_KrJzAm54.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/blog/foo">go to blog post</a> ` })}`;
}, "/Users/N.Haberkamp/Code/astro-bug-report-devtools/src/pages/index.astro", void 0);

const $$file = "/Users/N.Haberkamp/Code/astro-bug-report-devtools/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
