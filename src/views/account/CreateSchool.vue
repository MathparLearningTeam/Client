<template>
    <div class="card">
        <nav class="panel">
            <p class="panel-heading">Create school</p>
            <div class="panel-block">
                <b-input type="text" v-model="createSchoolForm.schoolName"
                         placeholder="Enter school name"></b-input>
                <b-input type="text" v-model="createSchoolForm.schoolAddress"
                         placeholder="Enter school address"></b-input>
            </div>
            <div class="panel-block">
                <b-button v-on:click="createSchool" type="is-primary" expanded>Create school!</b-button>
            </div>
        </nav>
    </div>
</template>

<script>
    import api from "../../api/api";
    import schoolStore from "../../store/schoolStore";

    export default {
        data() {
            return {
                createSchoolForm: {
                    schoolName: '',
                    schoolAddress: ''
                }
            }
        },
        methods: {
            createSchool: function () {
                api.school.createSchool(this.createSchoolForm).then(response => {
                    console.log(`Working with create school response ${response}`)
                    schoolStore.commit('set', response)
                    this.$router.push("/school")
                });
            }
        }
    }
</script>