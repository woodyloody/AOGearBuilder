

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5af88773.js","_app/immutable/chunks/scheduler.ff2809e0.js","_app/immutable/chunks/index.2f47097b.js","_app/immutable/chunks/stores.88d89196.js","_app/immutable/chunks/singletons.e783f027.js","_app/immutable/chunks/index.056d9b94.js"];
export const stylesheets = [];
export const fonts = [];
