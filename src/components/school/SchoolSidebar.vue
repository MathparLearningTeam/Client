<template>
    <b-sidebar position="static" type="is-light" open fullheight mobile="reduced">
        <div>
            <div class="logo">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img src="../../assets/logo.svg" style="width: 200px" alt="MathPartner">
                </b-navbar-item>
            </div>
            <school-card v-bind:school="school"></school-card>
            <b-menu>
                <b-menu-list label="School">
                    <router-link to="/school">Users</router-link>
                    <router-link to="/school/groups">Groups</router-link>
                    <router-link to="/school/plans">Educational Plans</router-link>
                </b-menu-list>
                <b-menu-list label="Actions">
                    <router-link to="/logout">Logout</router-link>
                </b-menu-list>
            </b-menu>
        </div>
    </b-sidebar>
</template>

<script>

    import SchoolCard from "../../components/school/SchoolCard";

    export default {
        name: "SchoolSidebar",
        components: {
            SchoolCard
        },
        props: ['school']
    }
</script>

<style scoped lang="scss">
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        margin-bottom: 0;
    }

    .card {
        margin-bottom: 20px;
    }

    .menu {
        text-align: left;
        padding: 0 25px;
    }
</style>
