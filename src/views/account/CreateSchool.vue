<template>
    <section class="modal-card-body">
        <h3 class="title has-text-centered has-text-dark">School creation:</h3>
        <div class="box">
            <p>Enter your school name:</p>
            <b-field>
                <b-input v-model="createSchoolForm.schoolName" placeholder="School name" required></b-input>
            </b-field>
            <p>Enter your school address:</p>
            <b-field>
                <b-input v-model="createSchoolForm.schoolAddress" placeholder="School address" required></b-input>
            </b-field>
            <b-button type="is-primary"
                      v-on:click="createSchool"
                      :disabled="!(isCompleted && clickAllowed)" expanded>Create school!
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
                clickAllowed: false
            }
        },
        computed: {
            isCompleted() {
                let formFilled = this.createSchoolForm.schoolName && this.createSchoolForm.schoolAddress;
                if (formFilled) {
                    this.clickAllowed = true
                }
                return formFilled;
            }
        },
        methods: {
            createSchool: function () {
                this.clickAllowed = false
                api.school.createSchool(this.createSchoolForm).then(response => {
                        schoolStore.commit('set', response)
                        this.$buefy.dialog.alert({
                            title: "Success!",
                            message: "Your invitation request was successfully sent",
                            confirmText: "OK",
                            hasIcon: true,
                            icon: "check"
                        })
                        this.$router.push("/school")
                    },
                    error => {
                        this.$buefy.dialog.alert({
                            title: "Error!",
                            message: "School wasn't created, change your input values.",
                            type: 'is-danger',
                            hasIcon: true,
                            icon: "view-dashboard",
                            confirmText: "OK",
                        })
                    })
            }
        }
    }
</script>