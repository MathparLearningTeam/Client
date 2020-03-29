<template>
    <div>
        <b-table v-if="headTeachers.length" :data="headTeachers" :columns="columns"></b-table>
        <p class="notification" v-else>There are no head teachers in this school</p>
        <b-modal :active.sync="isComponentModalActive" has-modal-card trap-focus aria-role="dialog" aria-modal width="400">
            <create-head-teacher v-on:new-head-teacher="headTeachers.push($event)"></create-head-teacher>
        </b-modal>
        <footer class="card-footer">
            <button class="button is-primary is-medium" @click="isComponentModalActive = true">Create Head Teacher</button>
        </footer>
    </div>
</template>

<script>
    import CreateHeadTeacher from "@/components/school/create-user/CreateHeadTeacher";

    export default {
        name: "school-head-teachers",
        props: ['headTeachers', 'columns'],
        components: {
            CreateHeadTeacher
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
