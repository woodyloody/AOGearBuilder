import * as universal from '../entries/pages/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/6.598e1a33.js","_app/immutable/chunks/scheduler.ff2809e0.js","_app/immutable/chunks/index.2f47097b.js","_app/immutable/chunks/index.5bb2e9e8.js","_app/immutable/chunks/stores.88d89196.js","_app/immutable/chunks/singletons.e783f027.js","_app/immutable/chunks/index.056d9b94.js"];
export const stylesheets = ["_app/immutable/assets/6.06a3d988.css"];
export const fonts = [];
