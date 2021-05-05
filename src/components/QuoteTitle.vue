<template>
  <div class="title">{{ titleText }}</div>
</template>

<script>
// import Quotes from "./Views/Quotes";

export default {
  name: "Title",
  // components: {
  //   Quotes,
  // },
  props: ['titleText'],
//   data() {
//     return {
//       titleText: "Quotes",
//     };
//   },
};
</script>

<style>
.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-bottom: 15px;
  /* margin-top: 5px; */
}
.container {
  max-width: 960px;
}
</style>
