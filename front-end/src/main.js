import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Inputmask from 'inputmask';

export default {
  mounted() {
    const im = new Inputmask('#0.00');
    im.mask(this.$refs.valor); // Usando a referência para aplicar a máscara
  }
};

const app = createApp(App);

// Registrando o Inputmask como diretiva global
app.directive('mask', {
  mounted(el, binding) {
    const im = new Inputmask(binding.value);
    im.mask(el);  // Aplica a máscara no elemento
  }
});

app.use(router);
app.mount('#app');
