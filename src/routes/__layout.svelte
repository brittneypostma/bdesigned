<script>
	import '@styles/global.css'
	import Header from '../components/Header.svelte'
	import Footer from '../components/Footer.svelte'
	export let segment

</script>

<div class="wrapper">
	<div class="header">
		<Header {segment} />
	</div>

	<main>
		<slot />
		<div class="push" />
	</main>

	<div class="footer">
		<Footer />
	</div>
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-rows: 100px 1fr 68px;
		min-height: 100%;
		margin-bottom: -68px;
	}

	.push,
	.footer {
		height: 68px;
	}

	.footer {
		align-self: flex-end;
		z-index: 20;
	}

</style>
