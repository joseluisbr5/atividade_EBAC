// Estrutura inicial do projeto VueJS para a calculadora aritmética
// Certifique-se de que o VueJS está configurado em seu ambiente

<template>
  <div id="app">
    <h1>Calculadora Aritmética</h1>
    <div class="calculator">
      <!-- Campo para o primeiro número -->
      <input type="number" v-model.number="num1" placeholder="Digite o primeiro número" />

      <!-- Campo para o segundo número -->
      <input type="number" v-model.number="num2" placeholder="Digite o segundo número" />

      <!-- Campo select para escolher a operação -->
      <select v-model="operation">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>

      <!-- Exibição do resultado -->
      <p>Resultado: {{ result }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      num1: 0,
      num2: 0,
      operation: 'add',
    };
  },
  computed: {
    result() {
      switch (this.operation) {
        case 'add':
          return this.num1 + this.num2;
        case 'subtract':
          return this.num1 - this.num2;
        case 'multiply':
          return this.num1 * this.num2;
        case 'divide':
          return this.num2 !== 0 ? this.num1 / this.num2 : 'Erro: Divisão por zero';
        default:
          return 0;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
input, select {
  padding: 10px;
  font-size: 16px;
}
p {
  font-size: 18px;
  font-weight: bold;
}
</style>
