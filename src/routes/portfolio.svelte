<script>
	import { items } from '../data/portfolio.js'
	import { fade } from 'svelte/transition'

	const loaded = new Map()

	let visible = false

	function lazy(node, data) {
		if (loaded.has(data.src)) {
			node.setAttribute('src', data.src)
		} else {
			// simulate slow loading network
			setTimeout(() => {
				const img = new Image()
				img.src = data.src
				img.onload = () => {
					loaded.set(data.src, img)
					node.setAttribute('src', data.src)
				}
			}, 2000)
		}

		return {
			destroy() {} // noop
		}
	}

</script>

<svelte:head>
	<title>Portfolio | bDesigned</title>
</svelte:head>

<div in:fade={{ duration: 1000 }} class="p-0 cont sm:p-12 2xl:mx-auto max-w-8xl">
	<h1 class="ml-6 mt-6 lg:mt-0">Portfolio</h1>
	<div class="px-4 md:px-0 mt-6 blocks md:mt-12">
		{#each items as item}
			<div class="grid my-10 rounded-lg content md:relative md:m-0 md:p-0 md:overflow-hidden">
				<a href={item.link}>
					<div class="bg-opacity-75 content-overlay bg-navy" />
					<img use:lazy={{ src: item.image }} src={item.img} alt={item.alt} />
					<div class="leading-relaxed content-details fadeIn-bottom text-navy md:text-sand">
						<h4 class="text-center content-title">{item.alt}</h4>
						<p class="text-center">{item.desc}</p>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.content-title {
		margin: 0 auto;
	}

	@media only screen and (min-width: 768px) {
		.blocks {
			padding: 0;
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
		}
		.content {
			flex: 1 1 500px;
		}
		.content-details {
			position: absolute;
			text-align: center;
			padding: 0;
			width: 75%;
			top: 50%;
			left: 50%;
			opacity: 0;
			-webkit-transform: translate(-50%, -50%);
			-moz-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			-webkit-transition: all 0.3s ease-in-out 0s;
			-moz-transition: all 0.3s ease-in-out 0s;
			transition: all 0.3s ease-in-out 0s;
		}
		.content-overlay {
			/* background-image: linear-gradient(to bottom, var(--blue), var(--navy) 90%); */
			position: absolute;
			height: 100%;
			width: 100%;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			opacity: 0;
			z-index: 2;
			-webkit-transition: all 0.4s ease-in-out 0s;
			-moz-transition: all 0.4s ease-in-out 0s;
			transition: all 0.4s ease-in-out 0s;
		}
		.content:hover .content-details {
			top: 50%;
			left: 50%;
			opacity: 1;
			z-index: 3;
		}

		.content:hover .content-overlay {
			opacity: 1;
		}

		.fadeIn-bottom {
			top: 80%;
		}
	}

</style>
