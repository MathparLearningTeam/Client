<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="../../assets/def-avatar.png" alt="Placeholder image">
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
                    <b-input type="file"></b-input>
                    <b-button v-on:click="changeAvatar">Change image!</b-button>
                </div>
            </div>

            <div class="content">
                <strong>Username:</strong> {{user.fullName}}<br>
                <strong>Email:</strong> {{user.Email}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserCard",
        props: ['user'],
        methods:{
            changeAvatar: function(){
                console.log("Changing avatar, all right!")
            }
        },
    }
</script>

<style scoped lang="scss">
    .content {
        text-align: left;
    }

    .media {
        display: flex;
        align-items: center;

        .media-content {
            display: flex;

            button {
                margin-left: 10px;
            }
        }
    }
</style>
