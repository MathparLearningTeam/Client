<template>
    <div>
        <img :src="src" alt="avatar"/>
    </div>
</template>

<script>
    export default {
        name: "Avatar",
        props:['src']
    }
</script>

<style scoped lang="scss">
    div {
        height: 100%;
        img {
            height: 100%;
            width: 100%;
            border-radius: 5px;
        }
    }
</style>