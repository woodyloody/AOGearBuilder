import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.fe4cb25f.js","_app/immutable/chunks/scheduler.ff2809e0.js","_app/immutable/chunks/index.2f47097b.js","_app/immutable/chunks/index.5bb2e9e8.js","_app/immutable/chunks/audioStore.ca39f14d.js","_app/immutable/chunks/index.056d9b94.js","_app/immutable/chunks/stores.88d89196.js","_app/immutable/chunks/singletons.e783f027.js"];
export const stylesheets = ["_app/immutable/assets/0.2b14994b.css","_app/immutable/assets/Header.a7696fed.css","_app/immutable/assets/styles.38bb9103.css"];
export const fonts = ["_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2","_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff","_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2","_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2","_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2","_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2","_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2"];
