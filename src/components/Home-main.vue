<template>
    <main>
        <home-aside></home-aside>
        <home-content></home-content>
    </main>
</template>

<script>

import home_aside from './Home-aside.vue';
import home_content from './Home-content.vue';

export default {
    name: 'Main',
    components: {
        'home-aside': home_aside,
        'home-content': home_content
    }
}
</script>

<style lang="scss" scoped>

main{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    padding: 50px 0;
}

</style>
