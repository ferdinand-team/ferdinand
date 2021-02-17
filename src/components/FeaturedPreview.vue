<template lang="pug">
.preview-card.neu-element-flat(@click="() => this.$emit('click', this.article.id)")
    .image
        .inner-wrapper
            img(:src="article.imageSource")
    .text-wrapper
        h1.title {{ article.title }}
        .preview
            vClamp(:max-height="'100%'") {{ article.preview }}
</template>

<script>

import VClamp from 'vue-clamp';

export default {
  components: {
    VClamp,
  },
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
  computed: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../styles/colors";
@import "../styles/glass";
@import "../styles/neu";

$image-padding: 0rem;
$image-corner-radius: 0px;
$image-inner-corner-radius: 0px;
.preview-card {
  cursor: pointer;
  position: relative;
  margin: 2rem;
  height: 90%;

  overflow: hidden;

  .image {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: $image-corner-radius;
    overflow: hidden;

    padding: $image-padding;
    .inner-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: $image-inner-corner-radius;

      width: calc(100% - #{$image-padding});
      height: calc(100% - #{$image-padding});
      overflow: hidden;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;

      filter: grayscale(.65) brightness(.45);
    }
  }

  .text-wrapper {
    position: absolute;
    height: 100%;
    max-height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
  }

  .title {
    color: $foreground-light;
    margin-left: 1rem;
  }

  .preview {
    flex: 1 1 0;
    color: $foreground-light;
    text-align: left;

    font-size: 1.3rem;
    font-weight: 200;

    margin: 0 1rem 2rem 2rem;
    overflow: hidden;
    text-overflow: -o-ellipsis-lastline;

  }
}

</style>
