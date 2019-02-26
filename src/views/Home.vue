<template>
    <div class="home-wrapper">
        <home-nav></home-nav>
        <home-main></home-main>
        <home-summary></home-summary>
    </div>
</template>

<script>

import home_nav from '../components/Home-nav.vue';
import home_main from '../components/Home-main.vue';
import home_summary from '../components/Home-summary';

export default {
    name: 'Home',
    components: {
        'home-nav': home_nav,
        'home-main': home_main,
        'home-summary': home_summary
    }
}

</script>

<style lang="scss" scoped>

.home-wrapper{
    width: 100%;
    height: auto;
}

</style>
