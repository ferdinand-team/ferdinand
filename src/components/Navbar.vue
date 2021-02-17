<template lang="pug">
.navbar-wrapper
  .navbar.neu-element-flat(:class="baseClass")
    NavElement(v-for="info, i in navElements" :routeInfo="info" :key="`nav_el_${i}`")
</template>

<script>

import NavElement from './NavElement.vue';

export default {
  components: {
    NavElement,
  },

  data() {
    return {
      mode: 'basenav',
    };
  },

  computed: {
    hasUnreadNew() {
      return true;
    },

    navElements() {
      switch (this.mode) {
        case 'backonly':
          return [{
            icon: 'back',
            route: 'back',
          }];
        case 'basenav':
        default:
          return [{
            icon: this.hasUnreadNew ? 'new_unread' : 'new_read',
            route: 'Featured',
          },
          {
            icon: 'atlas',
            route: 'Atlas',
          },
          {
            icon: 'search',
            route: 'Search',
          }];
      }
    },

    useSlimMode() {
      return this.mode !== 'basenav';
    },

    baseClass() {
      let classList = '';
      if (this.useSlimMode) classList += ' slim';
      return classList;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../styles/colors";
@import "../styles/glass";
@import "../styles/neu";
@import "../styles/variables";

.navbar-wrapper {
  width: 100%;
  height: 6rem;
}

.navbar {
  position: absolute;
  width: fit-content;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 0.2rem 0;

  display: flex;
  flex-direction: row;
  justify-content: center;

  transition: all 300ms ease-in-out;

  &.slim {
    left: 2rem;
    transform: translate(0%, -50%);
  }
}
</style>
