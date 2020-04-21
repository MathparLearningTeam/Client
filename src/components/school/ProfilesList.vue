<template>
    <div>
        <b-table v-if="profiles.length" :data="profiles" :columns="columns"></b-table>
        <p class="notification" v-else>There are no {{name}}s in this school</p>
        <b-modal :active.sync="isComponentModalActive" has-modal-card trap-focus aria-role="dialog" aria-modal width="400">
            <create-profile :current-profiles="profiles" role="HeadTeacher"></create-profile>
        </b-modal>
        <footer class="card-footer">
            <button class="button is-primary is-medium" @click="isComponentModalActive = true">Create  {{name}}</button>
        </footer>
    </div>
</template>

<script>
    import CreateProfile from "./create-user/CreateProfile";

    export default {
        name: "profiles-list",
        props: ['profiles', 'columns', 'name'],
        components: {
            CreateProfile
        },
        data() {
            return {
                isComponentModalActive: false
            }
        },
        mounted() {
            this.profiles.forEach(profile => {
                if(!profile.name) this.$set(profile, 'name', "Not yet created")
            })
        }
    }
</script>

<style scoped>
    .card-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }
</style>
