<template>
    <div>
        <b-table v-if="teachers.length" :data="teachers" :columns="columns"></b-table>
        <p class="notification" v-else>There are no teachers in this school</p>
        <b-modal :active.sync="isComponentModalActive" has-modal-card trap-focus aria-role="dialog" aria-modal width="400">
            <create-teacher v-on:new-teacher="teachers.push($event)"></create-teacher>
        </b-modal>
        <footer class="card-footer">
            <button class="button is-primary is-medium" @click="isComponentModalActive = true">Create Teacher</button>
        </footer>
    </div>
</template>

<script>
    import CreateTeacher from "@/components/school/create-user/CreateTeacher";

    export default {
        name: "school-teachers",
        props: ['teachers', 'columns'],
        components: {
            CreateTeacher
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
