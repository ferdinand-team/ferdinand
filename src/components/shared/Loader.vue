<template lang="pug">
.loader-wrapper
  span
  span
  span
  span
  .loader.glass-card
</template>

<script>

export default {
  components: {
  },

  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../../styles/colors";
@import "../../styles/glass";
@import "../../styles/neu";
@import "../../styles/variables";

.loader-wrapper {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 1rem;
      height: 1rem;
      background: #f00;
      border-radius: 50%;
  }

  span:nth-child(1) {
    // transform: translate(-300%, -300%);
    animation: span1-anim 4s ease-in-out forwards infinite;
  }
  span:nth-child(2) {
    // transform: translate(200%, -300%);
    animation: span1-anim 4s ease-in-out 1s forwards infinite;

  }
  span:nth-child(3) {
    // transform: translate(200%, 200%);
    animation: span1-anim 4s ease-in-out 2s forwards infinite;

  }
  span:nth-child(4) {
    // transform: translate(-300%, 200%);
    animation: span1-anim 4s ease-in-out 3s forwards infinite;

  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    width: 10vw;
    height: 10vw;
    margin: auto;

    animation: loader-anim 4s ease-in-out forwards infinite;

    box-shadow:  0px 0px 64px rgba($color: #000000, $alpha: 0.1);
  }
}

@keyframes loader-anim {
  0% {
    // border-radius: 0%;
    transform: translate(-50%, -50%) rotateZ(0deg);
  }
  25% {
    transform: translate(-50%, -50%) rotateZ(-90deg);
  }
  50% {
    // border-radius: 50%;
    transform: translate(-50%, -50%) rotateZ(-180deg);
  }
  75% {
    // border-radius: 50%;
    transform: translate(-50%, -50%) rotateZ(-270deg);
  }
  100% {
    // border-radius: 0%;
    transform: translate(-50%, -50%) rotateZ(-360deg);
  }
}

@keyframes span1-anim {
  0% {
    transform: translate(-300%, -300%);
    width: 1rem;
    height: 1rem;
  }
  25% { transform: translate(200%, -300%); }
  50% {
    transform: translate(200%, 200%);
    width: 1rem;
    height: 1rem;
  }
  75% { transform: translate(-300%, 200%);}
  100% {
    transform: translate(-300%, -300%);
    width: 1rem;
    height: 1rem;
  }
}

</style>
