<template>
  <section class="vh-100 d-flex align-items-center">
    <div class="col-md-12 offset-md-3 text-center">
      <h1 class="patapata mb-5">Provasi</h1>
      <p>
        we put hundreds of thousands of property available for you, for
        <b>FREE</b> so you dont have to run after surveyors
      </p>
      <p class="mb-5">Search for property listing by name,number or plot</p>

      <router-link to="/Search" class="text-primary"
        >Search For Property</router-link
      >

      <div class="mt-5 align-self-end">
        <p>
          <router-link to="/Log-In" class="text-primary">sign in</router-link>
          or
          <router-link to="/Sign-up" class="text-primary">register</router-link>
          as a surveyor to make a listing
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* search bar shenanigans */
/* code credit to Jon Kantner */
* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
:root {
  --bg: #e3e4e8;
  --fg: #17181c;
  --input: #ffffff;
  --primary: #161618;
  --dur: 1s;
  font-size: calc(14px + (24 - 16) * (100vw - 320px) / (1280 - 320));
}
body,
input {
  color: var(--fg);
  font: 1em/1.5 Hind, sans-serif;
}

form,
input,
.caret {
  margin: auto;
}
form {
  position: relative;
  width: 100%;
  max-width: 17em;
}
input,
.caret {
  display: block;
  transition: all calc(var(--dur) * 0.5) linear;
}
input {
  background: transparent;
  border-radius: 50%;
  box-shadow: 0 0 0 0.25em inset;
  caret-color: var(--primary);
  width: 2em;
  height: 2em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input:focus,
input:valid {
  background: var(--input);
  border-radius: 0.25em;
  box-shadow: none;
  padding: 0.75em 1em;
  transition-duration: calc(var(--dur) * 0.25);
  transition-delay: calc(var(--dur) * 0.25);
  width: 100%;
  height: 3em;
}
input:focus {
  animation: showCaret var(--dur) steps(1);
  outline: transparent;
}
input:focus + .caret,
input:valid + .caret {
  animation: handleToCaret var(--dur) linear;
  background: transparent;
  width: 1px;
  height: 1.5em;
  transform: translate(0, -1em) rotate(-180deg) translate(7.5em, -0.25em);
}
input::-webkit-search-decoration {
  -webkit-appearance: none;
}
label {
  color: #e3e4e8;
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
}
.caret {
  background: currentColor;
  border-radius: 0 0 0.125em 0.125em;
  margin-bottom: -0.6em;
  width: 0.25em;
  height: 1em;
  transform: translate(0, -1em) rotate(-45deg) translate(0, 0.875em);
  transform-origin: 50% 0;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #17181c;
    --fg: #e3e4e8;
    --input: #2e3138;
    --primary: #5583f6;
  }
}

/* Animations */
@keyframes showCaret {
  from {
    caret-color: transparent;
  }
  to {
    caret-color: var(--primary);
  }
}
@keyframes handleToCaret {
  from {
    background: currentColor;
    width: 0.25em;
    height: 1em;
    transform: translate(0, -1em) rotate(-45deg) translate(0, 0.875em);
  }
  25% {
    background: currentColor;
    width: 0.25em;
    height: 1em;
    transform: translate(0, -1em) rotate(-180deg) translate(0, 0.875em);
  }
  50%,
  62.5% {
    background: var(--primary);
    width: 1px;
    height: 1.5em;
    transform: translate(0, -1em) rotate(-180deg) translate(7.5em, 2.5em);
  }
  75%,
  99% {
    background: var(--primary);
    width: 1px;
    height: 1.5em;
    transform: translate(0, -1em) rotate(-180deg) translate(7.5em, -0.25em);
  }
  87.5% {
    background: var(--primary);
    width: 1px;
    height: 1.5em;
    transform: translate(0, -1em) rotate(-180deg) translate(7.5em, 0.125em);
  }
  to {
    background: transparent;
    width: 1px;
    height: 1.5em;
    transform: translate(0, -1em) rotate(-180deg) translate(7.5em, -0.25em);
  }
}
</style>
