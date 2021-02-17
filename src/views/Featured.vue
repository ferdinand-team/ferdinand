<template lang="pug">
.featured-wrapper
  swiper.carousel(:options="swiperOptions" v-if="loadedArticles")
    swiper-slide(v-for="article in featuredArticles" :key="article.id" )
      .preview-card-wrapper
        FeaturedPreview(:article="article" @click="openArticle")

</template>

<script>

import { VueAgile } from 'vue-agile';
import { loremIpsum } from 'lorem-ipsum';

import FeaturedPreview from '@/components/FeaturedPreview.vue';

export default {
  name: 'Featured',
  components: {
    VueAgile,
    FeaturedPreview,
  },
  data() {
    return {
      featuredArticles: [],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        // Some Swiper option/callback...
      },
    };
  },
  mounted() {
    this.featuredArticles = new Array(4).fill(0).map((e, i) => ({
      imageSource: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
      title: `Sample Article #${i + 1}`,
      preview: loremIpsum({ count: 1000 }),
      id: `artprev_${i}`,
    }));
  },
  computed: {
    loadedArticles() {
      return this.featuredArticles.length > 0;
    },
  },
  methods: {
    openArticle(id) {
      this.$router.push({ name: 'article', params: { id } });
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
