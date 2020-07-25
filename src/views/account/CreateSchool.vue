<template>
    <section class="modal-card-body">
        <h3 class="title has-text-centered has-text-dark">Create school:</h3>
        <div class="box">
            <p>Enter your school name:</p>
            <b-field>
                <b-input placeholder="School name"></b-input>
            </b-field>
            <p>Enter your school address:</p>
            <b-field>
                <b-input placeholder="School address"></b-input>
            </b-field>
            <b-button type="is-primary"
                      v-on:click="createSchool"
                      :disabled="createSchoolPressed" expanded>Create school!
            </b-button>
        </div>
    </section>
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
                },
                createSchoolPressed: false
            }
        },
        methods: {
            createSchool: function () {
                this.createSchoolPressed = true
                api.school.createSchool(this.createSchoolForm).then(response => {
                        console.log(`Working with create school response ${response}`)
                        schoolStore.commit('set', response)
                        this.$router.push("/school")
                    },
                    error => {
                        this.createSchoolPressed = false
                    });
            }
        }
    }
</script>