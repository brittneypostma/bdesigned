<script>
  import Nav from './Nav.svelte'
  import Toggle from './Toggle.svelte'
  export let segment
</script>

<header
  class="shadow-inset fixed top-0 w-full h-100 flex justify-between items-center
  bg px-10"
>
  <img src="logo-full.png" alt="bDesigned logo" />
  <div class="absolute top-50 center flex items-center">

    <Nav {segment} />
  </div>
  <div>
    <Toggle />
  </div>

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
