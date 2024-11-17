<template>
  <div class="contas-container">
    <div class="contas-form">
      <h2>Contas a Pagar</h2>

      <!-- Mensagem de Erro ou Sucesso -->
      <div v-if="message" :class="messageType" class="message">
        {{ message }}
      </div>

      <form @submit.prevent="submitForm">
        <label for="descricao">Descrição:</label>
        <input type="text" id="descricao" v-model="descricao" placeholder="Descrição da conta" required />

        <label for="valor">Valor:</label>
        <input 
          type="text" 
          id="valor" 
          ref="valor" 
          v-model="valor" 
          placeholder="Valor da conta" 
          required 
          @input="formatValor"
        />

        <label for="vencimento">Data de Vencimento:</label>
        <input type="date" id="vencimento" v-model="vencimento" required />

        <label for="status">Status:</label>
        <select id="status" v-model="status" required>
          <option value="Pendente">Pendente</option>
          <option value="Pago">Pago</option>
          <option value="Em Atraso">Em Atraso</option>
        </select>

        <button type="submit">Salvar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descricao: '',
      valor: '',
      vencimento: '',
      status: 'Pendente',
      message: '', // Mensagem de sucesso ou erro
      messageType: '', // Tipo da mensagem (sucesso ou erro)
    };
  },
  methods: {
    // Função para formatar o valor no formato de moeda
    formatValor(event) {
      let valor = event.target.value;

      // Remover tudo o que não for número ou vírgula
      valor = valor.replace(/[^\d,]/g, '');

      // Substituir a vírgula por ponto para fazer a conversão para número
      valor = valor.replace(',', '.');

      // Garantir que o número tenha no máximo 2 casas decimais
      let [inteiro, decimal] = valor.split('.');
      decimal = decimal ? decimal.substring(0, 2) : ''; // Limitar as casas decimais

      // Reconstruir o valor formatado
      valor = `${inteiro},${decimal}`;

      // Atualizar o modelo de valor
      this.valor = valor;

      // Atualizar o campo de entrada com o valor formatado
      event.target.value = valor;
    },
    
    submitForm() {
      // Simulando uma validação de envio de dados
      if (this.descricao && this.valor && this.vencimento && this.status) {
        this.message = 'Conta cadastrada com sucesso!';
        this.messageType = 'success';
      } else {
        this.message = 'Erro ao salvar a conta. Verifique os campos.';
        this.messageType = 'error';
      }
    },
  },
};
</script>

<style scoped>
.contas-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: linear-gradient(135deg, #ffecd2, #fcb69f, #ffecd2, #fcb69f);
  background-size: 300% 300%;
  animation: gradientAnimation 12s ease infinite;
}

@keyframes gradientAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.contas-form {
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

input, select {
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

.message {
  margin-bottom: 15px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
}

.success {
  background-color: #d4edda;
  color: #155724;
}

.error {
  background-color: #f8d7da;
  color: #721c24;
}
</style>
