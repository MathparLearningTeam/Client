<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="../../assets/logo.svg" style="width: 200px" alt="MathPartner">
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary"><strong>Logout</strong></a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
    export default {
        name: "school-header"
    }
</script>

<style scoped>
    .navbar {
        margin-bottom: 1.5rem;
    }
</style>
