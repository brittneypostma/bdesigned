<script>
  import { onMount } from 'svelte'

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

<div class="wrapper w-screen">
  <div class="waves hidden sm:inline-block">
    <svg
      width="100%"
      height="300px"
      fill="none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient
        id="grad1"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
        gradientTransform="rotate(90)"
      >
        <stop offset="0%" stop-color="#00E0FF"></stop>
        <stop offset="100%" stop-color="#00789E"></stop>
      </linearGradient>
      <path
        fill="url(#grad1)"
        d=" M0 67 C 273,183 822,-40 1920.00,106 V 359 H 0 V 67 Z"
      >
        <animate
          repeatCount="indefinite"
          fill="url(#grad1)"
          attributeName="d"
          dur="15s"
          attributeType="XML"
          values=" M0 77 C 473,283 822,-40 1920,116 V 359 H 0 V 67 Z; M0 77 C
          473,-40 1222,283 1920,136 V 359 H 0 V 67 Z; M0 77 C 973,260 1722,-53
          1920,120 V 359 H 0 V 67 Z; M0 77 C 473,283 822,-40 1920,116 V 359 H 0
          V 67 Z "
        ></animate>
      </path>
    </svg>
  </div>

  <div
    class="px-4 sm:px-0 text-wrapper grid justify-center content-center w-full"
  >
    <p class="sm:text-2xl">HELLO!</p>
    <h1 class="mb-4 xs:mb-0 text-6xl">I'm Brittney,</h1>
    <p class="sm:text-2xl">owner of bDesigned.</p>
    <p class="text-4xl sm:text-5xl">I'm a {changingText[idx]}</p>
    <a href="portfolio">
      <button class="text-2xl cursor-pointer w-full">SEE MY WORK</button>
    </a>
  </div>
</div>

<style>
  .wrapper {
    height: calc(100vh - 100px);
  }

  .text-wrapper {
    height: calc(100vh - 100px);
    color: var(--text-color);
  }

  .waves {
    width: 100%;
    bottom: 0;
    position: absolute;
  }
  .waves svg {
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
