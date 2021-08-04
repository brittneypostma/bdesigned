<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts }
      })
  }
</script>

<script>
  export let posts
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
  <title>Blog | bDesigned</title>
</svelte:head>

<div class="p-12 mx-auto max-w-7xl" in:fade="{{ duration: 1000 }}">
  <h1 class="mb-12">Blog</h1>

  <ul class="flex flex-wrap justify-around gap-8">
    {#each posts as post}
      <li class="relative leading-relaxed rounded-lg bezier">
        <a rel="prefetch" href="blog/{post.slug}">
          <img
            use:lazy="{{ src: post.image }}"
            src="{post.image}"
            alt="{post.alt}"
            class="object-cover rounded-lg" 
          />
          <h4>{post.title}</h4>
          <p>{post.date}</p>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  img {
    width: 350px;
    height: 200px;
  }
  p {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
</style>
