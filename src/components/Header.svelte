<script>
  import Nav from './Nav.svelte'
  export let segment
</script>

<header
  class="shadow-inset fixed top-0 w-full h-100 flex justify-between items-center
  bg px-10 z-50"
>
  <a href="/"><img src="logo-full.png" alt="bDesigned logo" /></a>
  <Nav {segment} />
</header>

<style>
  .bg {
    background: linear-gradient(
      180deg,
      var(--medium-blue) 0%,
      var(--navy) 100%
    );
  }
</style>
