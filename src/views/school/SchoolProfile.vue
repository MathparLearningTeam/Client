<template>
    <div v-if="user">
        <school-header></school-header>
        <p class="title white">Hello, {{user.userName}}!</p>
        <div class="columns is-mobile">
            <div v-if="school" class="column is-full-mobile is-half-tablet is-one-third-desktop">
                <school-card v-bind:school="school"></school-card>
            </div>
            <div v-if="schoolUsers" class="column">
                <school-users v-bind:users="schoolUsers"></school-users>
            </div>
        </div>
    </div>
</template>

<script>

    import SchoolHeader from "@/components/school/SchoolHeader";
    import SchoolCard from "@/components/school/SchoolCard";
    import {SchoolMixin} from "@/mixins/school";
    import SchoolUsers from "@/components/school/SchoolUsers";

    export default {
        name: "SchoolProfile",
        mixins: [SchoolMixin],
        components: {
            SchoolHeader, SchoolCard, SchoolUsers
        },
        data() {
            return {
                user: this.$store.state.user
            }
        },
        mounted() {
            this.getSchool();
            this.getUsers();
        }
    }
</script>

<style scoped>

</style>
