<!-- src/App.vue -->
<template>
  <div id="app">
    <nav v-if="isLoggedIn" class="nav-logged-in">
      <router-link to="/" @click="logout">Sair</router-link>
    </nav>
    <nav v-else class="nav-logged-out">
      <router-link to="/">Login</router-link>
      <router-link to="/register" style="margin-left: 10px;">Registrar</router-link>
      <router-link to="/contas-a-pagar">Contas a Pagar</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false, // Aqui você pode definir a lógica para autenticação real
    };
  },
  methods: {
    logout() {
      this.isLoggedIn = false;
      this.$router.push('/');
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

nav {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f0f0f0;
  text-align: center;
}

nav a {
  text-decoration: none;
  color: #42b983;
  margin: 0 5px;
}

nav a:hover {
  text-decoration: underline;
}

.nav-logged-in {
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
}

.nav-logged-out {
  text-align: center;
}
</style>
