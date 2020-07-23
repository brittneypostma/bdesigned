<svelte:head>
  <title>About | bDesigned</title>
</svelte:head>

<img
  src="wave.png"
  alt="wave"
  class="hidden lg:block fixed bottom-0 right-0 z-0"
/>
<div class="text-wrapper p-12 lg:max-w-md xl:max-w-6xl h-full">
  <h1>About Me</h1>
  <img
    src="me.png"
    alt="Brittney"
    class="rounded-full lg:float-left mt-10 lg:m-12"
  />
  <p>
    Hi, I'm Brittney and I'm the developer and designer behind bDesigned. I love
    developing beautiful, fluid, and responsive websites using new technologies.
    I thrive on accessible, semantic HTML that also has personality. I want
    everyone to be included on my websites, but also have some fun!
  </p>
  <p>
    I use Figma to create design systems, mockups, and clickable prototypes.
    User experience is extremely important to me and I strive to have a low user
    misery rating. I also use Photoshop like tools to create logos and high
    quality SVG icons and designs.
  </p>
  <p>
    UX/UI development and SEO are what I'm known for, but I also have an
    extensive knowledge of front-end libraries. I work primarily with Gatsby and
    Sapper on the
    <a href="https://jamstack.org/">JAMStack</a>
    , but am well versed in JavaScript, React, Redux, and Svelte. I have
    experience working with a wide range of technologies including Vue, React
    Native, Python, and SQL and NoSQL databases. I have a background in SEO,
    UX/UI design, and logo design. I majored in Graphic Design in college, but
    once I found my love of coding I combined my 2 favorite things together to
    become a designer as well as a developer.
  </p>
  <p>
    I recently started streaming and recording videos on
    <a href="https://www.youtube.com/channel/UCyvOaBoW3Jti69U4Gw1ci9Q">
      Youtube
    </a>
    . I really enjoy teaching others all the awesome things I have learned. I
    started a digital garden,
    <a href="https://console-logs.netlify.app">Console Logs</a>
    , as a place to keep all of my development notes. If you would like to get
    in touch, you can reach me at the socials below or
    <a href="contact">send me a message</a>
    !.
  </p>
</div>

<style>
  img {
    z-index: -10;
  }
  .text-wrapper {
    color: var(--text-color);
  }

  p:not(:nth-child(2)) {
    margin-top: 40px;
  }
  a {
    color: var(--accent-color);
    text-decoration: none;
    position: relative;
  }

  a::before {
    content: '';
    position: absolute;
    transition: all 0.3s ease;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: var(--caribbean);
    transform: scaleX(0);
  }

  a:hover::before {
    transform: scaleX(1);
  }
</style>
