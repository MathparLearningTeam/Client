<template>
    <section class="modal-card-body">
        <h3 class="title has-text-centered has-text-dark">Complete invitation card:</h3>
        <div class="box">
            <p>Enter the email of school headmaster:</p>
            <b-field>
                <b-input v-model="applyingRequest.headmasterEmail" type="email" placeholder="Email" required></b-input>
            </b-field>
            <p>Specify the position on which you are applying:</p>
            <b-field>
                <b-input v-model="applyingRequest.position" placeholder="Position" required></b-input>
            </b-field>
            <b-button type="is-primary"
                      v-on:click="applyMe"
                      :disabled="sendRequestPressed" expanded>Send request
            </b-button>
        </div>
    </section>
</template>

<script>
    export default {
        name: "InvitationCard",
        data() {
            return {
                sendRequestPressed: false,
                applyingRequest: {
                    headmasterEmail: '',
                    position: ''
                }
            }
        },
        methods: {
            applyMe() {
                
            }
        },
    }
</script>

<style scoped>

</style>