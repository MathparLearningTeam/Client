import api from '../api/api'

export const SchoolMixin = {
    data() {
        return {
            school: null,
            schoolUsers: null
        }
    },
    methods: {
        getSchool() {
            api.school.school().then(response => {
                this.school = response;
            })
        },
        getUsers() {
            api.school.users().then(response => {
                this.schoolUsers = response;
            })
        },
        createStudent(data) {
            return api.school.createStudent(data);
        },
        createTeacher(data) {
            return api.school.createTeacher(data);
        },
        createHeadTeacher(data) {
            return api.school.createHeadTeacher(data);
        }
    }
};
