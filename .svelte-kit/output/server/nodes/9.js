import * as universal from '../entries/pages/potionBuilder/_page.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/potionBuilder/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/potionBuilder/+page.js";
export const imports = ["_app/immutable/nodes/9.0c30d2a2.js","_app/immutable/chunks/scheduler.ff2809e0.js","_app/immutable/chunks/index.2f47097b.js","_app/immutable/chunks/index.5bb2e9e8.js"];
export const stylesheets = ["_app/immutable/assets/8.a76262f7.css"];
export const fonts = [];
