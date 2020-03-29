<template>
    <div class="modal-card" ref="modal">
        <header class="modal-card-head">
            <p class="modal-card-title">Create Teacher</p>
        </header>
        <section class="modal-card-body">
            <b-field><b-input type="email" v-model="data.email" placeholder="E-mail" required></b-input></b-field>
            <b-field><b-input v-model="data.name" placeholder="Name" required></b-input></b-field>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <button class="button is-primary" @click="submit">Create</button>
        </footer>
    </div>
</template>

<script>
    import {SchoolMixin} from "@/mixins/school";

    export default {
        name: "create-teacher",
        mixins: [SchoolMixin],
        data() {
            return {
                data: {
                    email: '',
                    name: ''
                }
            }
        },
        methods: {
            submit() {
                const loading = this.$buefy.loading.open(this.$refs.modal.$el);
                this.createTeacher(this.data).then(resp => {
                    loading.close();
                    this.$emit('new-teacher', resp);
                    this.$parent.close();
                });
            }
        }
    }
</script>

<style scoped>

</style>
