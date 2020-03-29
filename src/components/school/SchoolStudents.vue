<template>
    <div>
        <b-table v-if="students.length" :data="students" :columns="columns"></b-table>
        <p class="notification" v-else>There are no students in this school</p>
        <b-modal :active.sync="isComponentModalActive" has-modal-card trap-focus aria-role="dialog" aria-modal width="400">
            <create-student v-on:new-student="students.push($event)"></create-student>
        </b-modal>
        <footer class="card-footer">
            <button class="button is-primary is-medium" @click="isComponentModalActive = true">Create Student</button>
        </footer>
    </div>
</template>

<script>
    import CreateStudent from "@/components/school/create-user/CreateStudent";

    export default {
        name: "school-students",
        props: ['students', 'columns'],
        components: {
            CreateStudent
        },
        data() {
            return {
                isComponentModalActive: false
            }
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
