import API from './apiClient'
import CreateProfilePayload from "@/models/payloads/CreateProfilePayload";

const school = {
    createSchool: (data: any) => API.post('/school/api/', data),
    getSchool: () => API.get('/school/api/'),
    getProfiles: () => API.get('/school/api/getAllProfiles'),
    getSchoolUsers: () => API.get('/school/api/schoolProfiles'),
    createProfile: (data: CreateProfilePayload) => API.post('/school/api/profile', data),
};

export default school;
