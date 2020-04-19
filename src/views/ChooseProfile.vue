<template>
    <div>
        <authenticated-header></authenticated-header>
        <div id="main-container">
            <div id="header">Choose profile from the list:</div>
            <div id="list-container">
                <div class="list-item" v-for="profile in profiles" v-on:click="chooseProfile(profile)">{{profile.profileName}} (created {{profile.creationDate | formatDate}})</div>
            </div>
        </div>
    </div>
</template>

<script>
    import profileStore from "../store/profileStore";
    import schoolStore from "../store/schoolStore";
    import AuthenticatedHeader from "../components/shared/AuthenticatedHeader";

    export default {
        name: "ChooseProfile",
        components: {AuthenticatedHeader},
        data(){
            return {
                profiles: []
            }
        },
        methods:{
            chooseProfile: function(profile){
                schoolStore.commit('clear')
                profileStore.commit('set', profile)
                this.$router.push('/school')
            }
        },
        async mounted() {
            await profileStore.dispatch('refresh');
            this.profiles = await profileStore.getters.getAll
        }
    }
</script>

<style scoped lang="scss">
    #main-container{
        margin: auto;
        background-color: white;
        border-radius: 5px;
        color: black;
        width: 60%;

        #header{
            height: 25%;
            padding: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: #E1D5E7;
            border-radius: 5px;
            width: 100%;
            text-align: center;
            font-size: large;
            font-weight: bold;
        }

        #list-container{
            padding: 10px;

            .list-item:hover{
                cursor: pointer;
            }
        }
    }
</style>