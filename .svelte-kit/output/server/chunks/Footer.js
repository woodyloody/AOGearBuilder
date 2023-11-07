import { c as create_ssr_component, a as subscribe } from "./ssr.js";
import { p as page, n as navigating } from "./stores.js";
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-5x6pwb.svelte-5x6pwb{display:flex;width:100%;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-5x6pwb.svelte-5x6pwb{width:2em;height:3em;display:block}path.svelte-5x6pwb.svelte-5x6pwb{fill:var(--background)}ul.svelte-5x6pwb.svelte-5x6pwb{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-5x6pwb.svelte-5x6pwb{position:relative;height:100%}nav.svelte-5x6pwb a.svelte-5x6pwb{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-5x6pwb.svelte-5x6pwb:hover{color:var(--color-theme-1)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $$unsubscribe_navigating;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_navigating();
  return `<div class="always-visible fixed bottom-4 self-center z-0">${``} </div>`;
});
export {
  Footer as F
};
