import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                      */import { F as Footer } from "../../../chunks/Footer.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-195cvbj{display:flex;flex-direction:column;min-height:100vh}main.svelte-195cvbj{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app bg-zinc-800 svelte-195cvbj"><main class="svelte-195cvbj">${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main> </div>`;
});
export {
  Layout as default
};
