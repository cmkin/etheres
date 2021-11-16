<template>
  <div id="app">
   <index />
	<filght />
  </div>
</template>

<script>

import index from './components/index.vue';
import filght from './components/filght.vue';

export default {
  name: 'App',
  components: {
   index,filght
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
