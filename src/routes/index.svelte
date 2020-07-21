<script>
  import { onMount } from 'svelte'

  const changingText = [
    'Developer',
    'Designer',
    'Marketer',
    'Freelancer',
    'Mom',
  ]

  let idx = 0

  onMount(() => {
    setInterval(() => {
      idx++
      if (idx === changingText.length) {
        idx = 0
      }
    }, 1000)
  })
</script>

<svelte:head>
  <title>bDesigned | Home</title>
</svelte:head>

<div class="bg w-screen text-teal">
  <div class="main-text text grid justify-center items-center content-center">
    <p class="text-2xl">HELLO!</p>
    <h1 class="text-teal">I'm Brittney,</h1>
    <p class="text-2xl">owner of bDesigned.</p>
    <p class="text-5xl">I'm a {changingText[idx]}</p>
    <button class="text-2xl">SEE MY WORK</button>
  </div>
</div>

<style>
  .bg {
    background: url('/wave.png') no-repeat fixed bottom right;
    height: calc(100vh - 100px);
  }

  .main-text {
    height: calc(100vh - 100px);
  }
</style>
