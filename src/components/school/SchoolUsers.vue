<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">Users</p>
        </header>
        <b-tabs position="is-centered" class="block">
            <b-tab-item label="Head Teachers">
                <profiles-list v-bind:columns="columns" v-bind:profiles="users.headTeachers"
                               name="head teacher"></profiles-list>
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
    import schoolStore from "../../store/schoolStore";
    import api from "../../api/api";
    import SchoolUsersResponse from "../../models/SchoolUsersResponse";

    export default {
        name: "school-users",
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
                ],
                users: SchoolUsersResponse.placeholder()
            }
        },
        async mounted() {
            api.school.getSchoolUsers().then(schoolProfiles => {
                this.users = schoolProfiles;
                let accounts = {};
                this.users.teachers.map(profile => accounts[profile.accountId] = profile);
                this.users.students.map(profile => accounts[profile.accountId] = profile);
                this.users.headTeachers.map(profile => accounts[profile.accountId] = profile);
                if (Object.keys(accounts).length) {
                    api.account.getDetails(Object.keys(accounts)).then(accountDetails => {
                        accountDetails.forEach(detail => {
                            this.$set(accounts[detail.id], 'name', detail.name);
                            this.$set(accounts[detail.id], 'email', detail.email);
                        })
                    })
                }
            })
        }
    }
</script>

<style scoped>

</style>
