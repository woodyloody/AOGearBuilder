import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index2.js";
const Filter_svelte_svelte_type_style_lang = "";
const Sort_svelte_svelte_type_style_lang = "";
const isMobile = writable(false);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-7w87tm{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isMobile;
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => value);
  let { title = "AO Gear Builder" } = $$props;
  let { image = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml"><style>em{color:red;}</style><em>I</em> like <span>AO</span></div></foreignObject></svg>') } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  $$result.css.add(css);
  $$unsubscribe_isMobile();
  return `${$$result.head += `<!-- HEAD_svelte-u93kdb_START -->${$$result.title = `<title>Gear Builder</title>`, ""}<meta name="title" content="Gear Builder"><meta name="description" content="Gear Builder for Arcane Odyssey by BobbyNooby"><meta property="og:type" content="website"><meta property="og:url" content="https://tools.arcaneodyssey.net/"><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:description" content="Gear Builder for Arcane Odyssey by BobbyNooby"><meta property="og:image"${add_attribute("content", image, 0)}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url" content="https://tools.arcaneodyssey.net/"><meta property="twitter:title" content="Gear Builder"><meta property="twitter:description" content="Gear Builder for Arcane Odyssey by BobbyNooby"><meta property="twitter:image" content="https://i.imgur.com/axkyVz8.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Open+Sans:wght@700&display=swap" rel="stylesheet"><!-- HEAD_svelte-u93kdb_END -->`, ""} <section class="svelte-7w87tm">${``} </section>`;
});
export {
  Page as default
};
