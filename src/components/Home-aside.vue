<template>
    <aside>
        <h2>Pytania</h2>
        <ul>
            <li v-for="(question, index) in questions" v-bind:key="index">
                <router-link v-bind:to="'/'+question.router" tag="button" v-bind:disabled="!!+question.disabled" v-bind:class="{disabled: !!+question.disabled}"><strike v-if="!!+question.disabled">{{ question.name }}</strike><p v-else>{{ question.name }}</p></router-link>
            </li>
        </ul>
    </aside>
</template>

<script>

import { bus } from '../main.js';
import axios from 'axios';

export default {
    name: 'Aside',

    data(){
        return{
            questions: [],
        }
    },

    created(){
        window.setInterval(() => {
            axios.get('https://wearisome-hole.000webhostapp.com/server/php/select.php')
                .then( (response) => {
                    this.questions = response.data;
                });
        }, 1000);
    }

}

</script>

<style lang="scss" scoped>

aside{
    width: 200px;
    height: 460px;
    border-right: 1px solid #c2c2c2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    a{
        text-decoration: none;
        color:#606060;
    }

    .disabled{
        cursor:not-allowed;
        opacity: 0.5;
    }

    .answered{
        color: green;
    }

    button{
        outline: 0;
        background-color: transparent;
        border: 0;
        font-size: 1rem;
        color:#606060;
        cursor: pointer;
    }

    h2{
        color: #3c3c3c;
        font-weight: 400;
        font-size: 2rem;
    }

    ul{
        width: 100%;
        height: 460px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        margin-top: 20px;
        padding: 0;
        list-style-type: none;
        padding-left: 40px;

        li{
            margin: 10px 0;
            transition: transform .1s ease-in-out;
        }

        li:hover{
            transform: translateX(10px);
        }
    }
}

</style>
