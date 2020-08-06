<template>
    <div>
        <authenticated-header></authenticated-header>
        <section class="modal-card-body">
            <InvitationCard></InvitationCard>
        </section>
    </div>
</template>

<script>
    import AuthenticatedHeader from "../../components/shared/AuthenticatedHeader";
    import InvitationCard from "./InvitationCard";
    export default {
        name: "ApplyForPositionCard",
        components: {InvitationCard, AuthenticatedHeader}
    }
</script>

<style scoped>

</style>