<template>
    <div>
        <school-header></school-header>
        <p class="title white">School: {{school.id}}!</p>
    <!--        <div class="columns is-mobile">-->
    <!--            <div v-if="school" class="column is-full-mobile is-half-tablet is-one-third-desktop">-->
    <!--                <school-card v-bind:school="school"></school-card>-->
    <!--            </div>-->
    <!--            <div v-if="schoolUsers" class="column">-->
    <!--                <school-users v-bind:users="schoolUsers"></school-users>-->
    <!--            </div>-->
    <!--        </div>-->
    </div>
</template>

<script>

    import SchoolHeader from "../../components/school/SchoolHeader";
    import SchoolCard from "../../components/school/SchoolCard";
    import {SchoolMixin} from "../../mixins/school";
    import SchoolUsers from "../../components/school/SchoolUsers";
    import schoolStore from "../../store/schoolStore";

    export default {
        name: "SchoolProfile",
        mixins: [SchoolMixin],
        components: {
            SchoolHeader, SchoolCard, SchoolUsers
        },
        data() {
            return {
                school: ''
            }
        },
        async mounted() {
            this.school = await schoolStore.getters.get
        }
    }
</script>

<style scoped>

</style>
