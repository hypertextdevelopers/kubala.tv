<template>
    <div class="summary-wrapper">
        <button v-if="ended" v-on:click="sendData">Zakończ Sondę</button>
    </div>
</template>

<script>

import { bus } from '../main.js';
import $ from 'jquery';

export default {

    name: 'Summary',

    data(){
        return{
            ended: false,
            answers: [],
            q1_answer: null,
            q2_answer: null,
            q3_answer: null,
            q4_answer: null,
            q5_answer: null,
            q6_answer: null,
            q7_answer: null,
            q8_answer: null,
            q9_answer: null,
            q10_answer: null,
        }
    },

    methods: {

        sendData: function(){
                $.ajax({
                    type: 'POST',
                    url: 'http://localhost/bin/vue-projects/zadanie1/server/php/user_values.php',
                    data: {
                        q1_answer: this.q1_answer,
                        q2_answer: this.q2_answer,
                        q3_answer: this.q3_answer,
                        q4_answer: this.q4_answer,
                        q5_answer: this.q5_answer,
                        q6_answer: this.q6_answer,
                        q7_answer: this.q7_answer,
                        q8_answer: this.q8_answer,
                        q9_answer: this.q9_answer,
                        q10_answer: this.q10_answer,
                    },
                    success: (res) => {
                        console.log(res);
                        alert("Dziękuję za odpowiedzenie na pytania! Have a nice day.");
                        this.$router.push({ path: '/' });
                        location.reload();
                    }
                });
        }

    },

    created(){

        let checkingAnswerInterval = window.setInterval( () => {
            
            if(this.q1_answer !== null && this.q2_answer !== null && this.q3_answer !== null && this.q4_answer !== null && this.q5_answer !== null && this.q6_answer !== null && this.q7_answer !== null && this.q8_answer !== null && this.q9_answer !== null && this.q10_answer !== null){
                this.ended = true;
                clearInterval(checkingAnswerInterval);
            }
        
        }, 1);

        bus.$on('q1_answer', (data) => {
            this.q1_answer = data;
        });

        bus.$on('q2_answer', (data) =>{
            this.q2_answer = data;
        });

        bus.$on('q3_answer', (data) =>{
            this.q3_answer = data;
        });

        bus.$on('q4_answer', (data) =>{
            this.q4_answer = data;
        });

        bus.$on('q5_answer', (data) =>{
            this.q5_answer = data;
        });

        bus.$on('q6_answer', (data) =>{
            this.q6_answer = data;
        });

        bus.$on('q7_answer', (data) =>{
            this.q7_answer = data;
        });

        bus.$on('q8_answer', (data) =>{
            this.q8_answer = data;
        });

        bus.$on('q9_answer', (data) =>{
            this.q9_answer = data;
        });

        bus.$on('q10_answer', (data) =>{
            this.q10_answer = data;
        });

    }

}

</script>

<style lang="scss" scoped>

.summary-wrapper{
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        width: 300px;
        height: 80px;
        outline: 0;
        border: 0;
        border: 2px solid gray;
        background-color: transparent;
        color: gray;
        font-weight: 400;
        font-size: 1.5rem;
        letter-spacing: 3px;
        cursor: pointer;
        transition: all .1s linear;
    }

    button:hover{
        background-color: gray;
        color: #ffffff;
    }
}

</style>
