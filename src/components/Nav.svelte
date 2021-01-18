<script>
  import Toggle from './Toggle.svelte'
  export let segment
  let clicked = false
</script>

<nav>
  <input
    type="checkbox"
    id="nav-check"
    class="hidden"
    bind:checked="{clicked}"
    on:click="{() => (clicked = !clicked)}"
  />
 
  <div class="flex nav-btn item">
    <label for="nav-check">
      <img
        src="hamburger.svg"
        alt="nav menu button"
        class="cursor-pointer lg:hidden"
      />
    </label>
  </div>

  <ul
    class="{clicked ? 'absolute right-50 grid justify-center content-center rounded-lg pb-8 px-4 mobile-menu' : 'hidden lg:flex'}"
  >
    <li>
      <a class="{segment === undefined ? 'page' : 'selected'}" href="." on:click="{() => (clicked = !clicked)}">home</a>
    </li>
    <li>
      <a
        rel="prefetch"
        class="{segment === 'about' ? 'page' : 'selected'}"
        on:click="{() => (clicked = !clicked)}"
        href="about"
      >
        about
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        class="{segment === 'portfolio' ? 'page' : 'selected'}"
        on:click="{() => (clicked = !clicked)}"
        href="portfolio"
      >
        portfolio
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        class="{segment === 'blog' ? 'page' : 'selected'}"
        on:click="{() => (clicked = !clicked)}"
        href="blog"
      >
        blog
      </a>
    </li>
    <li>
      <a 
      rel="prefetch" 
      class="{segment === 'contact' ? 'page' : 'selected'}" 
      on:click="{() => (clicked = !clicked)}" 
      href="contact">
        contact
      </a>
    </li>   
    <li>
      <a href="https://console-logs.netlify.app/" on:click="{() => (clicked = !clicked)}">
        console-logs
      </a>
    </li>
    <Toggle />
  </ul>

</nav>

<style>
  #nav-check:checked ~ ul {
    animation: slide 0.3s linear;
  }

  @keyframes slide {
    from {
      opacity: 0;
      top: -200px;
    }
    to {
      opacity: 1;
      top: 50px;
    }
  }
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
