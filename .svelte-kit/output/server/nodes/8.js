import * as universal from '../entries/pages/info/_page.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/info/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/info/+page.js";
export const imports = ["_app/immutable/nodes/8.6e2984f7.js","_app/immutable/chunks/scheduler.ff2809e0.js","_app/immutable/chunks/index.2f47097b.js","_app/immutable/chunks/index.5bb2e9e8.js"];
export const stylesheets = ["_app/immutable/assets/8.a76262f7.css"];
export const fonts = [];
