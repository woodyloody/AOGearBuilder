import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
/* empty css                                                 *//* empty css                   */import { p as page } from "../../chunks/stores.js";
const isMute = writable(false);
const css$1 = {
  code: "header.svelte-10ld0a3.svelte-10ld0a3{display:flex;justify-content:space-between}nav.svelte-10ld0a3.svelte-10ld0a3{display:flex;width:100%;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-10ld0a3.svelte-10ld0a3{width:2em;height:2em;display:block}path.svelte-10ld0a3.svelte-10ld0a3{fill:var(--background)}ul.svelte-10ld0a3.svelte-10ld0a3{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-10ld0a3.svelte-10ld0a3{position:relative;height:100%}nav.svelte-10ld0a3 a.svelte-10ld0a3{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-10ld0a3.svelte-10ld0a3:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isMute;
  $$unsubscribe_isMute = subscribe(isMute, (value) => value);
  $$result.css.add(css$1);
  $$unsubscribe_isMute();
  return `<div class="fixed top-4 self-center z-100">${``} </div>`;
});
const app = "";
const Analytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  {
    {
      if (typeof gtag !== "undefined") {
        gtag("config", "G-6FB1RCQJ7W", {
          page_title: document.title,
          page_path: $page.url.pathname
        });
      }
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-dfrf19_START --><script async src="https://www.googletagmanager.com/gtag/js?id=G-6FB1RCQJ7W" data-svelte-h="svelte-117x6fp"><\/script><script data-svelte-h="svelte-cr71zq">window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-6FB1RCQJ7W');<\/script><!-- HEAD_svelte-dfrf19_END -->`, ""}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-195cvbj{display:flex;flex-direction:column;min-height:100vh}main.svelte-195cvbj{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app bg-zinc-800 svelte-195cvbj">${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-195cvbj">${slots.default ? slots.default({}) : ``}</main> </div>`;
});
export {
  Layout as default
};
