<script>
  export let segment
</script>

<nav>
  <ul class="flex">
    <li>
      <a class="{segment === undefined ? 'page' : 'selected'}" href=".">home</a>
    </li>
    <li>
      <a
        rel="prefetch"
        class="{segment === 'portfolio' ? 'page' : 'selected'}"
        href="portfolio"
      >
        portfolio
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        class="{segment === 'blog' ? 'page' : 'selected'}"
        href="blog"
      >
        blog
      </a>
    </li>

    <li>
      <a class="{segment === 'contact' ? 'page' : 'selected'}" href="contact">
        contact
      </a>
    </li>
  </ul>
</nav>

<style>
  a {
    color: #e8f4f4;
    text-decoration: none;
    padding: 1em;
    display: block;
    position: relative;
  }

  a::before {
    content: '';
    position: absolute;
    transition: all 0.3s ease;
    left: 12%;
    bottom: 0;
    top: 40px;
    width: 75%;
    height: 2px;
    background: #e8f4f4;
    transform: scaleX(0);
  }

  a:hover {
    color: #e8f4f4;
  }

  .selected:hover {
    color: #00e0ff;
  }

  a:hover::before,
  .page::before {
    transform: scaleX(1);
  }

  .page::before {
    background: #00e0ff;
  }
</style>
