<svelte:head>
  <title>About | bDesigned</title>
</svelte:head>

<div class="bg h-screen">
  <div class="text-wrapper grid justify-center content-center mx-24 max-w-6xl">
    <p>
      Hi, I'm Brittney and I'm the developer and designer behind bDesigned. I
      love developing beautiful, fluid, and responsive websites using new
      technologies. I thrive on accessible, semantic HTML that also has
      personality. I want everyone to be included on my websites, but also have
      some fun!
    </p>
    <p>
      UX/UI development and SEO are what I'm known for, but I also have an
      extensive knowledge of front-end libraries. I work primarily with Gatsby
      and Sapper on the
      <a href="https://jamstack.org/">
        <span>JAMStack</span>
      </a>
      , but am well versed in JavaScript, React, Redux, and Svelte. I have
      experience working with a wide range of technologies including Vue, React
      Native, Python, and SQL and NoSQL databases. I have a background in SEO,
      UX/UI design, and logo design. I majored in Graphic Design in college, but
      once I found my love of coding I combined my 2 favorite things together to
      become a designer as well as a developer.
    </p>
  </div>
</div>

<style>
  .bg {
    background: url('/wave.png') no-repeat bottom right;
  }

  .text-wrapper {
    height: calc(100vh - 100px);
    color: var(--text-color);
  }

  p {
    text-indent: 30px;
  }

  p:not(:first-child) {
    margin-top: 40px;
  }
</style>
