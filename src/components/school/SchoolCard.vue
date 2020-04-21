<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="../../assets/def-school.png" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="../../assets/def-avatar.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{school.schoolName}}</p>
                    <p class="subtitle is-6">{{school.schoolAddress}}</p>
                </div>
            </div>

            <div class="content">
                <!-- TODO Change to director name, once fetching is established-->
                <strong>Director:</strong> {{school.director.profileName}}
            </div>
        </div>
        <footer class="card-footer" v-if="profile.role==='Director'">
            <p class="card-footer-item">Edit</p>
            <p class="card-footer-item">Delete</p>
        </footer>
    </div>
</template>

<script>

    import profileStore from "../../store/profileStore";
    import {Profile} from "../../models/Profile";

    export default {
        name: "school-card",
        data(){
            return {
                profile: Profile.placeholder()
            }
        },
        async mounted(){
            this.profile = profileStore.getters.get
        },
        props: ['school']
    }
</script>

<style scoped>
    .content {
        text-align: left;
    }
</style>
