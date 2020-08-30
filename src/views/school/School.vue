<template>
    <div>
        <authenticated-header></authenticated-header>
        <section class="sidebar-layout">
            <school-sidebar v-bind:school="school"></school-sidebar>
            <div class="content">
                <p class="title white">School: {{school.schoolName}}!</p>
                <div>
                    <transition name="slide-fade" mode="out-in">
                        <router-view class="view"></router-view>
                    </transition>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    import {SchoolMixin} from "../../mixins/school";
    import SchoolUsers from "../../components/school/SchoolUsers";
    import {School} from "../../models/School";
    import SchoolSidebar from "../../components/school/SchoolSidebar";
    import schoolStore from "../../store/schoolStore";
    import AuthenticatedHeader from "../../components/shared/AuthenticatedHeader";

    export default {
        name: "SchoolProfile",
        mixins: [SchoolMixin],
        components: {
            SchoolSidebar,
            SchoolUsers,
            AuthenticatedHeader
        },
        data() {
            return {
                school: School.placeholder()
            }
        },
        async mounted() {
            this.school = await schoolStore.getters.get;
        }
    }
</script>

<style scoped lang="scss">
    .sidebar-layout {
        display: flex;
        height: 100vh;

        .content {
            padding: 20px;
            width: 100%;
        }
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(10px);
        opacity: 0;
    }
</style>
