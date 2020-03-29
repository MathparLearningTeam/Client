<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">Users</p>
        </header>
        <b-tabs position="is-centered" class="block">
            <b-tab-item label="Head Teachers">
                <school-head-teachers v-bind:columns="columns" v-bind:headTeachers="users.headTeachers"></school-head-teachers>
            </b-tab-item>
            <b-tab-item label="Teachers">
                <school-teachers v-bind:columns="columns" v-bind:teachers="users.teachers"></school-teachers>
            </b-tab-item>
            <b-tab-item label="Students">
                <school-students v-bind:columns="columns" v-bind:students="users.students"></school-students>
            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script>
    import SchoolStudents from "@/components/school/SchoolStudents";
    import SchoolTeachers from "@/components/school/SchoolTeachers";
    import SchoolHeadTeachers from "@/components/school/SchoolHeadTeachers";

    export default {
        name: "school-users",
        props: ['users'],
        components: {
            SchoolHeadTeachers,
            SchoolTeachers,
            SchoolStudents
        },
        data() {
            return {
                columns: [
                    {
                        field: 'userId',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'userName',
                        label: 'Name',
                    },
                    {
                        field: 'userEmail',
                        label: 'E-mail',
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
