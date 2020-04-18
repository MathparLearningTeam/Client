<template>
    <kinesis-container>
        <div class="background">
            <kinesis-element style="height: 100%" :strength="50"><img class="background__img" src="../assets/back.svg"
                                                                      alt=""></kinesis-element>
        </div>
        <div class="home-dialog">
            <div class="card home-dialog__card">
                <div class="card-content">
                    <p class="title">“Hello, I'm Mathpar!”</p>
                    <p class="subtitle">Such beautiful much title</p>
                </div>
                <footer class="card-footer">
                    <p class="card-footer-item">
                        <router-link to="/login">I know right!</router-link>
                    </p>
                    <p class="card-footer-item">
                        <router-link to="/registration">I'm a young padawan...</router-link>
                    </p>
                </footer>
            </div>
        </div>
    </kinesis-container>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style lang="scss">
    .home-dialog {
        .title, .subtitle {
            color: black;
        }

        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &__card {
            width: 50%;
            height: 300px;
            display: flex;
            flex-direction: column;

            .card-footer {
                margin-top: auto;
            }
        }

    }

    .background {
        overflow: hidden;
        opacity: .5;
        height: 100vh;

        &__img {
            width: 100%;
            transform: scale(1.2);
        }
    }
</style>
