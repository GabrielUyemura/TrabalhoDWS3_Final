<!-- Antes -->
<template>
  <div id="app">
    <AppMenu msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// Remova esta linha
import AppMenu from './components/AppMenu.vue';

export default {
  name: 'App',
  components: {
    // Remova esta linha
    AppMenu
  }
};
</script>
