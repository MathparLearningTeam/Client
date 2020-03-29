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
                    <p class="title is-4">{{school.schoolAddress}}</p>
                    <p class="subtitle is-6">{{school.schoolName}}</p>
                </div>
            </div>

            <div class="content">
                <strong>Director:</strong> {{school.director.userName}} (<a :href="'mailto:' + school.director.userEmail">{{school.director.userEmail}}</a>)
            </div>
        </div>
        <footer class="card-footer">
            <p class="card-footer-item">Edit</p>
            <p class="card-footer-item">Delete</p>
        </footer>
    </div>
</template>

<script>

    export default {
        name: "school-card",
        props: ['school']
    }
</script>

<style scoped>
    .content {
        text-align: left;
    }
</style>
