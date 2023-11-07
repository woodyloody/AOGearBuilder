export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "AOGearBuilder/_app",
	assets: new Set([".nojekyll","CNAME","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.4ec05bdf.js","app":"_app/immutable/entry/app.9c2e5be2.js","imports":["_app/immutable/entry/start.4ec05bdf.js","_app/immutable/chunks/scheduler.ff2809e0.js","_app/immutable/chunks/singletons.e783f027.js","_app/immutable/chunks/index.056d9b94.js","_app/immutable/entry/app.9c2e5be2.js","_app/immutable/chunks/scheduler.ff2809e0.js","_app/immutable/chunks/index.2f47097b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
