<template>
    <div class="page-container">
        <authenticated-header></authenticated-header>
        <div id="account-container">
            <div id="left-container" class="container-background pad-5">
                <div id="image-container">
                    <Avatar src="https://img.favpng.com/23/3/15/computer-icons-person-png-favpng-uXj2rEbL4bG8S5UQFdSSdaDsL.jpg"></Avatar>
                </div>
                <div id="edit-image">
                    <b-input type="file"></b-input>
                    <b-button v-on:click="changeAvatar()">Change image!</b-button>
                </div>
                <div id="account-info">
                    <div><b>Username:</b> {{account.fullName}}</div>
                    <div><b>Email:</b> {{account.email}}</div>
                </div>
            </div>
            <div id="right-container" class="container-background">
                <div id="change-password-container">
                    <div class="header">Change password</div>
                    <div id="change-password-form" class="pad-5">
                        <b-input type="password" v-model="changePasswordForm.password" placeholder="Enter your password"></b-input>
                        <b-input type="password" v-model="changePasswordForm.passwordConfirmation" placeholder="Confirm your password"></b-input>
                        <b-button v-on:click="changePassword()">Change password!</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import accountStore from "../../store/accountStore";
    import AuthenticatedHeader from "../../components/shared/AuthenticatedHeader";
    import Avatar from "../../components/blocks/Avatar";

    export default {
        name: "Account",
        components: {
            Avatar,
            AuthenticatedHeader,
        },
        data(){
            return {
                account: {},
                changePasswordForm:{
                    password: '',
                    passwordConfirmation: ''
                }
            }
        },
        methods:{
            changeAvatar: ()=>{
                console.log("Changing avatar, all right!")
            },
            changePassword: ()=>{
                console.log("Changing password, all right!")
            }
        },
        async mounted() {
            this.$data.account = await accountStore.getters.account
        }
    }
</script>
<style scoped lang="scss">
    .page-container{
        height: 100%;

        #account-container {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            height: 100%;

            #left-container {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                width: 40%;
                height: 50%;

                #image-container {
                    height: 70%;
                }

                #edit-image {
                    padding: 5px;
                    height: 10%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;

                    div {
                        width: 60%;
                    }

                    button {
                        width: 35%;
                    }
                }

                #account-info {
                    height: 15%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                }
            }

            #right-container {
                display: block;
                width: 40%;
                height: 25%;

                #change-password-container {
                    height: 100%;

                    .header{
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

                    #change-password-form {
                        height: 75%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                    }
                }
            }
        }
    }

    .container-background{
        color: black;
        background-color: white;
        border-radius: 10px;
        border: black 3px;
    }

    .pad-5{
        padding: 10px;
    }
</style>