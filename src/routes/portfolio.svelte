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
      destroy() {}, // noop
    }
  }
</script>

<svelte:head>
  <title>Portfolio | bDesigned</title>
</svelte:head>

<div in:fade="{{ duration: 1000 }}" class="cont p-0 sm:p-12">
  <h1 class="ml-6">Portfolio</h1>
  <div class="blocks mt-6 md:mt-12">
    {#each items as item}
      <div
        class="content grid md:relative my-10 md:m-0 md:p-0 md:overflow-hidden
        rounded-lg"
      >
        <a href="{item.link}">
          <div class="content-overlay bg-navy bg-opacity-75"></div>
          <img
            use:lazy="{{ src: item.image }}"
            src="{item.img}"
            alt="{item.alt}"
          />
          <div
            class="content-details fadeIn-bottom text-blue md:text-sand
            leading-relaxed"
          >
            <h4 class="content-title text-center">{item.alt}</h4>
            <p class="text-left md:text-center">{item.desc}</p>
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
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      grid-gap: 1em;
      padding: 0;
      align-items: center;
      justify-items: center;
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
