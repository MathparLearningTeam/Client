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
    import dialog from "../../mixins/dialog";

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
        mixins: [dialog],
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
                api.school.isNameAvailable(this.createSchoolForm.schoolName).then(nameAvailable => {
                    if (nameAvailable !== true) {
                        dialog.methods.openDialogError("School wasn't created, name is not available.")
                        return;
                    }
                })
                api.school.createSchool(this.createSchoolForm).then(response => {
                        schoolStore.commit('set', response)
                        dialog.methods.openDialogSuccess("School was created!")
                        this.$router.push("/school")
                    },
                    error => {
                        dialog.methods.openDialogError("School wasn't created, change your input values.")
                    })
            }
        }
    }
</script>