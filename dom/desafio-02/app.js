new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('Alerta!');
        },
        alterarValor(e) {
            this.valor = e.target.value;
        }
    }
})