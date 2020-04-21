<template>
    <div class="modal-card" ref="modal">
        <header class="modal-card-head">
            <p class="modal-card-title">Create user</p>
        </header>
        <section class="modal-card-body">
            <b-field><b-input type="email" v-model="data.createProfilePayload.email" placeholder="E-mail" required></b-input></b-field>
            <b-field><b-input v-model="data.createProfilePayload.role" placeholder="Role" disabled></b-input></b-field>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <button class="button is-primary" @click="submit">Create</button>
        </footer>
    </div>
</template>

<script>
    import {SchoolMixin} from "@/mixins/school";
    import CreateProfilePayload from "../../../models/payloads/CreateProfilePayload";
    import api from "../../../api/api";

    export default {
        name: "create-profile",
        mixins: [SchoolMixin],
        data() {
            return {
                data: {
                    createProfilePayload: new CreateProfilePayload()
                }
            }
        },
        mounted() {
            this.data.createProfilePayload.role = this.role
        },
        methods: {
            submit() {
                const loading = this.$buefy.loading.open(this.$refs.modal.$el);
                this.createProfile(this.data.createProfilePayload).then(profile => {
                    api.account.getDetails([""+profile.accountId]).then(accountDetails =>{
                        profile.name=accountDetails[0].name;
                        profile.email=accountDetails[0].email;
                        this.currentProfiles.push(profile);
                    });
                    this.$parent.close();
                }).finally(()=>loading.close());
            }
        },
        props: ['role', 'currentProfiles']
    }
</script>

<style scoped>

</style>
