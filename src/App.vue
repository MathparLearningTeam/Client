<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    body {
        background: linear-gradient(320deg, #FC466B 0%, #3F5EFB 100%);
        height: 100vh;

        .white {
            color: white;
        }
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: white;
        height: 100%;
    }
</style>
