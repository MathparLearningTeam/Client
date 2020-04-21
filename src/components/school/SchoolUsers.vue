<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">Users</p>
        </header>
        <b-tabs position="is-centered" class="block">
            <b-tab-item label="Head Teachers">
                <profiles-list v-bind:columns="columns" v-bind:profiles="users.headTeachers" name="head teacher"></profiles-list>
            </b-tab-item>
            <b-tab-item label="Teachers">
                <profiles-list v-bind:columns="columns" v-bind:profiles="users.teachers" name="teacher"></profiles-list>
            </b-tab-item>
            <b-tab-item label="Students">
                <profiles-list v-bind:columns="columns" v-bind:profiles="users.students" name="student"></profiles-list>
            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script>
    import ProfilesList from "./ProfilesList";

    export default {
        name: "school-users",
        props: ['users'],
        components: {
            ProfilesList
        },
        data() {
            return {
                columns: [
                    {
                        field: 'profileId',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'name',
                        label: 'Name',
                    },
                    {
                        field: 'email',
                        label: 'E-mail',
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
