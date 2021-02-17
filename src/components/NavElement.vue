<template lang="pug">
.nav-element(:class="selected? 'selected' : ''" @click="clickHandler")
    NewIcon(v-if="icon === 'new_unread'")
    NewReadIcon(v-if="icon === 'new_read'")
    AtlasIcon(v-if="icon === 'atlas'")
    SearchIcon(v-if="icon === 'search'")
    BackIcon(v-if="icon === 'back'")

</template>

<script>

import NewIcon from 'vue-material-design-icons/Decagram.vue';
import NewReadIcon from 'vue-material-design-icons/DecagramOutline.vue';
import AtlasIcon from 'vue-material-design-icons/MapLegend.vue';
import SearchIcon from 'vue-material-design-icons/Magnify.vue';
import BackIcon from 'vue-material-design-icons/ArrowLeft.vue';

export default {
  components: {
    NewIcon,
    NewReadIcon,
    AtlasIcon,
    SearchIcon,
    BackIcon,
  },
  props: {
    routeInfo: {
      type: Object,
      default: null,
    },
  },
  computed: {
    selected() {
      return !this.routeInfo ? false : this.$route.name === this.routeInfo.route;
    },
    icon() {
      return !this.routeInfo ? 'new_unread' : this.routeInfo.icon;
    },
    route() {
      return !this.routeInfo ? '' : this.routeInfo.route;
    },
  },
  methods: {
    clickHandler() {
      if (this.route === 'back') this.$router.push({ name: 'back' });
      this.$router.push({ name: this.route });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../styles/colors";
@import "../styles/glass";
@import "../styles/neu";

.nav-element {
    cursor: pointer;
    margin: auto 2rem;
    padding: 0.2rem 0;
    border-radius: 8px;
    border: none;
    box-shadow: none;

    & > span > svg {
      width: 2rem;
      height: 2rem;
      color: $foreground-selection;

      transition: all 300ms ease-in-out;
    }

    & > span > svg:hover,
    &.selected > span > svg {
      color: $foreground-color-dark;
      // border-bottom: 1px solid $foreground-light;
    }

    & > span {
      min-height: 100%;
    }
}
</style>
