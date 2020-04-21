<template>
    <div>
        <school-header></school-header>
        <p class="title white">School: {{school.schoolName}}!</p>
            <div class="columns is-mobile">
                <div class="column is-full-mobile is-half-tablet is-one-third-desktop">
                    <school-card v-bind:school="school"></school-card>
                </div>
                <div v-if="schoolUsers" class="column">
                    <school-users v-bind:users="schoolUsers"></school-users>
                </div>
            </div>
    </div>
</template>

<script>

    import SchoolHeader from "../../components/school/SchoolHeader";
    import SchoolCard from "../../components/school/SchoolCard";
    import {SchoolMixin} from "../../mixins/school";
    import SchoolUsers from "../../components/school/SchoolUsers";
    import schoolStore from "../../store/schoolStore";
    import api from "../../api/api";
    import {School} from "../../models/School";
    import SchoolUsersResponse from "../../models/SchoolUsersResponse";

    export default {
        name: "SchoolProfile",
        mixins: [SchoolMixin],
        components: {
            SchoolHeader, SchoolCard, SchoolUsers
        },
        data() {
            return {
                school: School.placeholder(),
                schoolUsers: SchoolUsersResponse.placeholder()
            }
        },
        async mounted() {
            this.school = await schoolStore.getters.get
            api.school.getSchoolUsers().then(schoolProfiles => {
                this.schoolUsers = schoolProfiles;
                let accounts = {};
                this.schoolUsers.teachers.map(profile => accounts[profile.accountId]=profile);
                this.schoolUsers.students.map(profile => accounts[profile.accountId]=profile);
                this.schoolUsers.headTeachers.map(profile => accounts[profile.accountId]=profile)
                api.account.getDetails(Object.keys(accounts)).then(accountDetails =>{
                    accountDetails.forEach(detail => {
                        this.$set(accounts[detail.id], 'name', detail.name);
                        this.$set(accounts[detail.id], 'email', detail.email);
                    })
                })
            })
        }
    }
</script>

<style scoped>

</style>
