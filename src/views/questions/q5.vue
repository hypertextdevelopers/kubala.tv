<template>
    <div class="q1-wrapper page">
        <h1>5. Lubisz spacerować?</h1>
        <section>
            <button v-on:click="chooseAnswer('yes')" v-bind:class="{ green: yes_clicked }">TAK</button>
            <button v-on:click="chooseAnswer('no')" v-bind:class="{ red: no_clicked }">NIE</button>
        </section>
    </div>
</template>

<script>

import { bus } from '../../main.js';

export default {
    
    data() {
        return{
            choosenAnswer: null,
            yes_clicked: false,
            no_clicked: false
        }
    },

    methods: {

        chooseAnswer: function(answer){
            this.choosenAnswer = answer;
            bus.$emit('q5_answer', this.choosenAnswer);

            if(answer === 'yes'){
                this.yes_clicked = true;
                this.no_clicked = false;
            }

            if(answer === 'no'){
                this.yes_clicked = false;
                this.no_clicked = true;
            }
        }

    }

}

</script>

<style lang="scss" scoped>

.q1-wrapper{
    width: 100%;
    height: 449px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-weight: 600;
        font-size: 3rem;
        color: #216b75;
    }

    section{
        width: 400px;
        height: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 50px;
        
        button{
            width: 140px;
            height: 60px;
            border: 0;
            outline: 0;
            color: #3c3c3c;
            font-size: 1.5rem;
            font-weight: 400;
            letter-spacing: 2px;
            cursor: pointer;
            transition: all .1s linear;
        }

        button:nth-child(1):hover{
            -webkit-box-shadow: 0px 0px 8px 0px rgba(27,136,27,1);
            -moz-box-shadow: 0px 0px 8px 0px rgba(27,136,27,1);
            box-shadow: 0px 0px 8px 0px rgba(27,136,27,1);
        }

        button:nth-child(2):hover{
            -webkit-box-shadow: 0px 0px 8px 0px rgba(151,14,14,1);
            -moz-box-shadow: 0px 0px 8px 0px rgba(151,14,14,1);
            box-shadow: 0px 0px 8px 0px rgba(151,14,14,1);
        }

        .green{
            background-color: rgba(27,136,27,1);
            color: #ffffff;
        }

        .red{
            background-color: rgba(151,14,14,1);
            color: #ffffff;
        }

        button:nth-child(1){
            border: 2px solid #1b881b;
        }

        button:nth-child(2){
            border: 2px solid #970e0e;
        }
    }
}

</style>
