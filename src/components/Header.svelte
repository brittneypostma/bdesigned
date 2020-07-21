<script>
  import Nav from './Nav.svelte'
  export let segment
</script>

<header class="flex justify-between items-center w-full px-10">
  <img src="logo-full.png" alt="bDesigned logo" />
  <Nav {segment} />
</header>

<style>
  header {
    height: 100px;
  }
</style>
