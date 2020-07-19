<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">Educational Plans
                <b-icon class="is-pulled-right" :icon="'plus'"></b-icon></p>
        </header>
        <b-menu>
            <b-menu-list>
                <b-menu-item v-for="plan in plans" icon="notebook-multiple">
                    <template slot="label" slot-scope="props">
                        {{plan.name}}
                        <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                        <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                            <b-icon icon="dots-vertical" slot="trigger"></b-icon>
                            <b-dropdown-item aria-role="listitem">Edit</b-dropdown-item>
                            <b-dropdown-item aria-role="listitem">Delete</b-dropdown-item>
                        </b-dropdown>
                    </template>
                    <b-menu-item v-for="item in plan.items" :icon="item.type" :disabled="item.expired">
                        <template slot="label">
                            {{item.name}}
                            <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                                <b-icon icon="dots-vertical" slot="trigger"></b-icon>
                                <b-dropdown-item aria-role="listitem">Edit</b-dropdown-item>
                                <b-dropdown-item aria-role="listitem">Delete</b-dropdown-item>
                            </b-dropdown>
                        </template>
                    </b-menu-item>
                </b-menu-item>
            </b-menu-list>
        </b-menu>
    </div>
</template>

<script>
    import {EducationalPlans} from "../../models/EducationalPlan";

    export default {
        name: "SchoolPlans",
        data(){
            return {
                plans: EducationalPlans.sampleData()
            }
        }
    }
</script>

<style lang="scss">
    .content {
        .card-header-title {
            span {
                margin-left: auto;
            }
        }
        .menu {
            padding-bottom: 1em;

            .menu-list {
                list-style: none !important;
                margin-left: 0;
                text-align: left;

                li ul {
                    list-style: none;
                    margin-top: 0.5em;
                    margin-left: 2em;
                }
            }
        }
    }
</style>
