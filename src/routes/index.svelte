<script>
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'

  const changingText = [
    'Developer.',
    'Designer.',
    'Marketer.',
    'Freelancer.',
    'Mom.',
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
  <title>Home | bDesigned</title>
</svelte:head>

<div class="waves hidden sm:inline-block">
  <img src="waves.svg" alt="waves" class="w-screen" />
</div>

<div
  in:fly="{{ y: -500, duration: 700 }}"
  class="center top-1/2 px-4 sm:px-0 text-wrapper grid justify-center
  content-center w-full"
>
  <p class="sm:text-2xl" role="heading">HELLO!</p>
  <h1 class="mb-4 xs:mb-0 text-6xl">I'm Brittney,</h1>
  <p class="sm:text-2xl">owner of bDesigned.</p>
  <p class="text-4xl sm:text-5xl">I'm a {changingText[idx]}</p>
  <a href="portfolio">
    <button
      aria-label="Links to portfolio page."
      class="text-2xl cursor-pointer w-full"
    >
      SEE MY WORK
    </button>
  </a>
</div>

<style>
  .text-wrapper {
    color: var(--text-color);
  }

  .waves {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    animation-name: move-left;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes example {
    0% {
      left: 0px;
      top: 0px;
    }

    50% {
      left: -2000px;
      top: 200px;
    }

    100% {
      left: 0px;
      top: 0px;
    }
  }
</style>
