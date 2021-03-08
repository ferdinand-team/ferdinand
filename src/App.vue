<template lang="pug">
#app
  #content
    routerView
  //- #nav
  //-   routerLink(to="/") Home
  //-   routerLink(to="/about") About
  Navbar#nav
</template>

<script>

import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "styles/colors";

// Import Fonts

// Montserrat
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  box-sizing: border-box;
}

html,
body,
#app {
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background: $background-color;
  color: $foreground-color;

  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  position: relative;

  #content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: linear-gradient(to top, #4CA1AF, #2C3E50);

    background-color: #b8c6db;
    background-image: linear-gradient(142deg, #b8c6db 0%, #f5f7fa 74%);

  }

  #nav {
    position: absolute;
    bottom: 0;
    z-index: 10;
  }

}

</style>
