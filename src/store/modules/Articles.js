import { loremIpsum } from 'lorem-ipsum';

const getters = {
  featuredArticles(state) {
    return state.featuredArticles;
  },
};

const mutations = {
  updateFeaturedArticles(state, payload) {
    state.featuredArticles = payload;
  },
};

const actions = {
  queryFeaturedArticles({ commit }) {
    const data = new Array(8).fill(0).map((e, i) => ({
      imageSource: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
      title: `Sample Article #${i + 1}`,
      preview: loremIpsum({ count: 1000 }),
      id: `artprev_${i}`,
    }));
    setTimeout(() => commit('updateFeaturedArticles', data), 8000);
  },
};

const state = {
  featuredArticles: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
