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

<div class="p-12" in:fade="{{ duration: 1000 }}">
  <h1 class="mb-12">Blog</h1>

  <ul>
    {#each posts as post}
      <li class="rounded-lg leading-relaxed relative bezier">
        <a rel="prefetch" href="blog/{post.slug}">
          <img
            use:lazy="{{ src: post.image }}"
            src="{post.image}"
            alt="{post.alt}"
            class="rounded-lg object-cover object-center"
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
  /* 
  li:hover {
    top: -2px;
  } */
  @media only screen and (min-width: 768px) {
    ul {
      display: grid;
      gap: 25px;
      grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
    }
  }
</style>
