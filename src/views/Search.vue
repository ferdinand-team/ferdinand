<template lang="pug">
.search-wrapper
  h1 Search

</template>

<script>

export default {
  name: 'Article',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">

@import "../styles/headings";
@import "../styles/colors";
@import "../styles/glass";
@import "../styles/neu";
@import "../styles/helpers";
@import "../styles/variables";

.featured-wrapper {
  width: 100%;
  height: calc(100% - #{$navbar-size});
  position: relative;

  display: flex;
  flex-direction: column;

  .swiper-container {
    overflow: unset;
  }
}

.carousel,
.slide {
  height: 100%;
  width: 100%;
}
.preview-card-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

</style>
