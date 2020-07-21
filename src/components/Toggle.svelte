<script>
  import { onMount } from 'svelte'

  onMount(() => {
    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    )

    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
      }
    }

    toggleSwitch.addEventListener('change', switchTheme, false)
  })
</script>

<div class="theme-switch-wrapper">
  <img
    class="slider-img"
    src="sun.png"
    alt="light-mode"
    style="margin-right: 0.5em;"
  />
  <label class="theme-switch" for="checkbox">
    <input type="checkbox" id="checkbox" />
    <div class="slider round"></div>
  </label>
  <img
    class="slider-img"
    src="moon.png"
    alt="dark-mode"
    style="margin-left: 0.5em;"
  />
</div>

<style>
  .slider-img {
    width: 30px;
    height: 30px;
  }

  .theme-switch-wrapper {
    display: flex;
    align-items: center;
    margin: 10px 2em auto auto;
  }

  .theme-switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
  }

  .theme-switch input {
    display: none;
  }

  .slider {
    background-color: #e8f4f4;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.4s linear;
    box-shadow: inset 0px -2px 4px rgba(0, 0, 0, 0.25);
  }

  .slider:before {
    background-color: #e5a91e;
    bottom: 4px;
    content: '';
    height: 26px;
    left: 4px;
    position: absolute;
    transition: all 0.4s linear;
    width: 26px;
  }

  .slider:hover::before {
    transform: translateX(13px);
  }

  .slider:hover {
    background-color: #68d2c8;
  }

  input:checked + .slider {
    background-color: #1b2a49;
  }

  input:checked + .slider:hover {
    background-color: #68d2c8;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  input:hover + .slider:before {
    transform: translateX(13px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  @media only screen and (max-width: 500px) {
    input:hover + .slider:before {
      transform: none;
    }

    .slider:hover::before {
      transform: none;
    }

    .slider-img {
      width: 20px;
      height: 20px;
    }

    .theme-switch {
      display: inline-block;
      height: 20px;
      position: relative;
      width: 50px;
    }

    .slider:before {
      background-color: #fff;
      bottom: 3px;
      content: '';
      height: 15px;
      left: 4px;
      position: absolute;
      transition: all 0.4s linear;
      width: 15px;
    }
    .theme-switch-wrapper {
      top: 7px;
      position: relative;
    }
  }
</style>
