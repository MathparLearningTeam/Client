import api from '../api/api'
import CreateProfilePayload from "../models/payloads/CreateProfilePayload";

export const SchoolMixin = {
    data() {
        return {
            school: null,
            schoolUsers: null
        }
    },
    methods: {
        createProfile(data: CreateProfilePayload) {
            return api.school.createProfile(data);
        }
    }
};
