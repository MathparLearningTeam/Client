<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">Student Groups</p>
        </header>
        <b-tabs position="is-centered" class="block">
            <b-tab-item label="Classes">
                <b-table :data="classes"
                        ref="table"
                        :opened-detailed="[1]"
                        detailed
                        detail-key="name"
                        @details-open="(row, index) => $buefy.toast.open(`Expanded ${row.name}`)"
                        show-detail-icon>

                    <template slot-scope="props">
                        <b-table-column field="name" label="Name">{{ props.row.name }}</b-table-column>
                    </template>

                    <template slot="detail" slot-scope="props">
                        <article class="media" v-for="student in props.row.students">
                            <figure class="media-left">
                                <p class="image is-64x64">
                                    <img src="../../assets/def-avatar.png">
                                </p>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                    <p><strong>{{ student.name }}</strong><br>{{ student.info }}</p>
                                </div>
                            </div>
                        </article>
                    </template>
                </b-table>
            </b-tab-item>
            <b-tab-item label="Groups">
                <b-table :data="groups"
                         ref="table"
                         :opened-detailed="[1]"
                         detailed
                         detail-key="name"
                         @details-open="(row, index) => $buefy.toast.open(`Expanded ${row.name}`)"
                         show-detail-icon>

                    <template slot-scope="props">
                        <b-table-column field="name" label="Name">{{ props.row.name }}</b-table-column>
                        <b-table-column field="teacher" label="Teacher">{{ props.row.teacher }}</b-table-column>
                    </template>

                    <template slot="detail" slot-scope="props">
                        <article class="media" v-for="student in props.row.students">
                            <figure class="media-left">
                                <p class="image is-64x64">
                                    <img src="../../assets/def-avatar.png">
                                </p>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                    <p><strong>{{ student.name }}</strong><br>{{ student.info }}</p>
                                </div>
                            </div>
                        </article>
                    </template>
                </b-table>
            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script>
    import api from "../../api/api";

    export default {
        name: "SchoolGroups",
        data() {
            return {
                classes: [
                    {
                        name: 'PI',
                        students: [{name: 'Student1', info: 'SOme student info'}, {name: 'Student2', info: 'SOme student info'}]
                    }
                ],
                groups: [
                    {
                        name: 'PI1',
                        teacher: 'Ivanenko',
                        students: [{name: 'Student1', info: 'SOme student info'}, {name: 'Student2', info: 'SOme student info'}]
                    },
                    {
                        name: 'PI2',
                        teacher: 'Ivanenko',
                        students: [{name: 'Student3', info: 'SOme student info'}, {name: 'Student4', info: 'SOme student info'}]
                    }
                ]
            }
        },
        async mounted() {
            api.school.getClasses().then(classes => {

            })
        }
    }
</script>

<style scoped>

</style>
