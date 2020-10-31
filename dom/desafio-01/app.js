new Vue({
  el: "#desafio",
  data: {
    nome: "Henrico",
    idade: 18,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg"
  },
  methods: {
    randomNumber() {
      return Math.random(0, 1);
    }
  }
});
