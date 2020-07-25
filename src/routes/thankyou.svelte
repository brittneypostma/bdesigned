<svelte:head>
  <title>Thank You | bDesigned</title>
</svelte:head>

<h1 class="text-center my-12">Thank You</h1>
<div class="container">
  <div id="envelope" class="envelope">
    <svg
      id="flap"
      class="flap"
      height="45%"
      width="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon points="0,0 100,0 50,100"></polygon>
    </svg>
    <div class="thank">
      Thank you for contacting me, I will get back to you soon!
      <a href=".">
        <button aria-label="Link to home page" class="btnText w-full my-6">
          Go Home
        </button>
      </a>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    align-items: start;
    justify-content: center;
    height: 75%;
    margin: 0 auto;
  }

  .envelope {
    margin-top: 0;
    position: relative;
    width: 40%;
    height: 500px;
    background: var(--navy);
    display: grid;
    justify-items: center;
  }

  .flap {
    transition: 0.5s all linear;
    fill: var(--blue);
  }

  .thank {
    animation: fade-in 1s ease-in;
    position: absolute;
    width: 90%;
    height: 100%;
    display: grid;
    justify-content: stretch;
    align-content: flex-end;
    text-align: center;
    font-size: 4vh;
  }

  @keyframes fade-in {
    from {
      scale: 0.5;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }

  @keyframes slow-fade {
    from {
      scale: 0;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }

  @media only screen and (max-width: 600px) {
    .thank {
      font-size: 3vh;
    }
  }

  @media only screen and (min-width: 601px) and (max-width: 1000px) {
    .thank {
      font-size: 4vh;
    }
  }

  @media only screen and (min-width: 1001px) and (max-width: 1400px) {
  }
</style>
