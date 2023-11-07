import { c as create_ssr_component, a as subscribe } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-133cxmb.svelte-133cxmb{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}svg.svelte-133cxmb.svelte-133cxmb{width:3em;height:3em}nav.svelte-133cxmb.svelte-133cxmb{display:flex;width:100%;justify-content:center;--background:rgba(255, 255, 255, 0.7)}path.svelte-133cxmb.svelte-133cxmb{fill:var(--background)}ul.svelte-133cxmb.svelte-133cxmb{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-133cxmb.svelte-133cxmb{position:relative;height:100%}nav.svelte-133cxmb a.svelte-133cxmb{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-133cxmb.svelte-133cxmb:hover{color:var(--color-theme-1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-hniewk_START -->${$$result.title = `<title>Arcane Odyssey Tools</title>`, ""}<meta name="title" content="Arcane Odyssey Tools"><meta name="description" content="Various Tools for Arcane Odyssey by BobbyNooby"><meta property="og:type" content="website"><meta property="og:url" content="https://tools.arcaneodyssey.net/"><meta property="og:title" content="Arcane Odyssey Tools"><meta property="og:description" content="Various Tools for Arcane Odyssey by BobbyNooby"><meta property="og:image" content="https://i.imgur.com/axkyVz8.png"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url" content="https://tools.arcaneodyssey.net/"><meta property="twitter:title" content="Arcane Odyssey Tools"><meta property="twitter:description" content="Various Tools for Arcane Odyssey by BobbyNooby"><meta property="twitter:image" content="https://i.imgur.com/axkyVz8.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Open+Sans:wght@700&display=swap" rel="stylesheet"><!-- HEAD_svelte-hniewk_END -->`, ""} <section class="items-center snap-center justify-center svelte-133cxmb">${``} </section>`;
});
export {
  Page as default
};
