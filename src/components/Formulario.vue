<template>
    <div>
        <Mensagem :msg="msg" v-show="msg" />
        <form id="burger-form" @submit="createBurger">
            <div class="input-container">
                <label for="nome">Nome do cliente:</label>
                <input name="nome" id="nome" v-model="nome" placeholder="Digite o seu nome">
            </div>
            <div class="input-container">
                <label for="pao">Escolha o pão</label>
                <select id="pao" name="pao" v-model="pao">
                    <option value="">Selecione o seu pão</option>
                    <option v-for="pao in paes" :key="pao.id"  :value="pao.tipo">{{ pao.tipo }}</option>
                </select>
            </div>
            <div class="input-container">
                <label for="carne">Escolha a carne</label>
                <select id="carne" name="carne" v-model="carne">
                    <option value="">Selecione o tipo de carne</option>
                    <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
                </select>
            </div>
            <div id="opcionais-container" class="input-container">
                <label for="opcionais" id="opcionais-title">Selecione os opcionais</label>

                <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.tipo">
                    <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                    <span>{{opcional.tipo}}</span>
                </div>
                
            </div>
            <div class="input-container">
                <input type="submit" id="btn-submit" class="submit-btn" value="Criar meu burger!" >
            </div>
            
        </form>
    </div>
    
</template>
<script>

import Mensagem from "./Mensagem.vue";

export default {
    name: "Formulario",
    components: {
        Mensagem
    },
    data() {
        return {
            paes: null,
            carnes: null,
            opcionaisdata: null,
            nome: null, 
            pao: null,
            carne: null,
            opcionais: [],
            msg: null
        }
    },
    methods: {
        async getIngredientes(){

            const req = await fetch('http://localhost:3000/ingredientes');
            const data = await req.json();

            this.paes = data.paes;
            this.carnes = data.carnes;
            this.opcionaisdata = data.opcionais;
        },
        async createBurger(e){

            e.preventDefault();

            const data = {
                nome: this.nome,
                carne: this.carne,
                pao: this.pao,
                opcionais: Array.from(this.opcionais),
                status: 'Solicitado'
            }
            const dataJson = JSON.stringify(data);
            
            const req = await fetch('http://localhost:3000/burgers', {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: dataJson
            })

            //enviando
            const res = await req.json();

            //mensagem do sistema
            this.msg = `Pedido Nº ${res.id} realizado com sucesso`;

            //limpar msg
            setTimeout(()=>{
               this.msg = null 
            }, 3000)
            
            //limpa campos
            this.nome = null;
            this.pao = null;
            this.carne = null;
            this.opcionais = null;

        }
    },
    mounted(){
        this.getIngredientes();
    }
}
</script>
<style scoped>
    #burger-form{
        max-width: 400px;
        margin: 0 auto;
    }
    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    label{
        font-weight: bold;
        padding: 5px 10px;
        color: #222;
        margin-bottom: 15px;
        border-left:  4px solid #FCBA03;
    }
    input, select{
        padding: 5px 10px;
        width: 300px;
    }
    #opcionais-container{
        flex-direction: row;
        flex-wrap:  wrap;
    }
    #opcionais-title{
        width: 100%;
    }
    .checkbox-container {
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
    }
     .checkbox-container span,
     .checkbox-container input{
         width: auto;
     }
     .checkbox-container span {
         margin-left: 6px;
         font-weight: bold;
     }
    .submit-btn {
       background-color: #222;
       color:#FCBA03;
       font-weight: bold;
       border: 2px solid #222;
       font-size: 16px; 
       cursor: pointer;
       padding: 10px;
       transition: .5s;
    }
    .submit-btn:hover {
        background-color: transparent;
        color: #222;
    }
</style>