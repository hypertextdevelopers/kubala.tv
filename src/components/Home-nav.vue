<template>
    <nav>
        <h1>SONDA</h1>
    </nav>
</template>

<script>

export default {
    name: 'Nav'
}
</script>

<style lang="scss" scoped>

nav{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0 20px 0;
    border-bottom: 1px solid #c2c2c2;

    h1{
        color: #818181;
        font-size: 6rem;
        letter-spacing: 5px;
        font-weight: 600;
    }
}

</style>
