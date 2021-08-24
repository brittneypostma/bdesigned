const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../../../src/routes/__error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/portfolio.svelte"),
	() => import("../../../src/routes/thankyou.svelte"),
	() => import("../../../src/routes/contact.svelte"),
	() => import("../../../src/routes/about.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/portfolio.svelte
	[/^\/portfolio\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/thankyou.svelte
	[/^\/thankyou\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/contact.svelte
	[/^\/contact\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[6]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];