<template>
    <div>
        <authenticated-header></authenticated-header>
        <h6 v-if="profiles.length === 0" class="title has-text-centered has-text-white">Seems, you don't have active
            profiles</h6>
        <h6 v-else class="title has-text-centered has-text-white">That's your profiles</h6>
        <hr>

        <p v-if="profiles.length === 0" class="subtitle has-text-centered has-text-white">Let's do one of the
            following:</p>
        <div id="main-container">
            <div class="card">
                <nav class="panel">
                    <div v-if="profiles.length === 0">
                        <b-collapse class="card" animation="slide" aria-id="schoolCreation"
                                    :open.sync="schoolCollapseOpen">
                            <div
                                    slot="trigger"
                                    slot-scope="props"
                                    class="card-header"
                                    role="tab"
                                    aria-controls="schoolCreation">
                                <p class="card-header-title">
                                    Create school
                                </p>
                                <a class="card-header-icon">
                                    <b-icon
                                            :icon="props.open ?  'menu-up' : 'menu-down' ">
                                    </b-icon>
                                </a>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    <CreateSchool/>
                                </div>
                            </div>
                        </b-collapse>
                        <b-collapse class="card" animation="slide" aria-id="schoolCreation"
                                    :open.sync="inviteCollapseOpen">
                            <div
                                    slot="trigger"
                                    slot-scope="props"
                                    class="card-header"
                                    role="button"
                                    aria-controls="schoolCreation">
                                <p class="card-header-title">
                                    Apply for position
                                </p>
                                <a class="card-header-icon">
                                    <b-icon
                                            :icon="props.open ?  'menu-up' : 'menu-down' ">
                                    </b-icon>
                                </a>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    <InvitationCard/>
                                </div>
                            </div>
                        </b-collapse>
                    </div>
                    <div v-if="profiles.length > 0">
                        <p class="panel-heading">Choose profile from the list:</p>
                        <a class="panel-block" v-for="profile in profiles" v-on:click="chooseProfile(profile)">
                            <span class="panel-icon"><i class="fas fa-user" aria-hidden="true"></i></span>
                            {{profile.profileName}} (created {{profile.creationDate | formatDate}})
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    import profileStore from "../store/profileStore";
    import schoolStore from "../store/schoolStore";
    import AuthenticatedHeader from "../components/shared/AuthenticatedHeader";
    import CreateSchool from "./account/CreateSchool";
    import InvitationCard from "./account/InvitationCard";

    export default {
        name: "ChooseProfile",
        components: {
            AuthenticatedHeader,
            CreateSchool,
            InvitationCard
        },
        data() {
            return {
                profiles: [],
                schoolCollapseOpen: false,
                inviteCollapseOpen: false
            }
        },
        methods: {
            chooseProfile: function (profile) {
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
    #main-container {
        margin: auto;
        background-color: white;
        border-radius: 5px;
        color: black;
        width: 60%;

        .panel-heading {
            font-weight: bold;
            text-align: left;
        }

        #header {
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

        #list-container {
            padding: 10px;

            .list-item:hover {
                cursor: pointer;
            }
        }
    }
</style>
