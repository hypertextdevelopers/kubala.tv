<template>
  <div id="app">
    <app-home></app-home>
  </div>
</template>

<script>

import Home from './views/Home.vue';
import $ from 'jquery';

export default {

  components: {
    'app-home': Home
  },

  beforeCreate(){
    
    $.ajax({
      type: 'POST',
      url: 'http://localhost/bin/vue-projects/zadanie1/server/php/update.php',
      success: (res) => {
        console.log('cleared');
      }
    });

  }

}

</script>

<style lang="scss">

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html{
  min-height: 100vh;
}

body{
  background-color: #f5f5f5;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
}

#app{
  width: 100%;
  height: auto;
}

.page{
  width: inherit;
  position: fixed;
  top: 238px;
  left: 90px;
}

</style>
