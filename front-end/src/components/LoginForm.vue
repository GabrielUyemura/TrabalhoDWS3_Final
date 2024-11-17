<!-- src/components/LoginForm.vue -->
<template>
  <div class="login-container">
    <div class="login-form">
      <h2>Login</h2>
      <form>
        <label for="username">Usuário:</label>
        <input type="text" id="username" placeholder="Digite seu usuário" />
        
        <label for="password">Senha:</label>
        <input type="password" id="password" placeholder="Digite sua senha" />
        
        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb);
  background-size: 300% 300%;
  animation: gradientAnimation 10s ease infinite;
}

@keyframes gradientAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.login-form {
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

input {
  display: block;
  margin: 10px 0;
  padding: 12px;
  width: calc(100% - 24px);
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 12px;
  width: 100%;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #369d74;
}
</style>
