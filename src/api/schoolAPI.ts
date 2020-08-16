import API from './apiClient'
import CreateProfilePayload from "@/models/payloads/CreateProfilePayload";

const school = {
    createSchool: (data: any) => API.post('/school/api/', data),
    isNameAvailable: (data:any) => API.get('/school/api/isNameAvailable'),
    requestProfile: (data: any) => API.post('/school/api/requestProfile', data),
    getSchool: () => API.get('/school/api/'),
    getProfiles: () => API.get('/school/api/getAllProfiles'),
    getSchoolUsers: () => API.get('/school/api/schoolProfiles'),
    getClasses: () => API.get('/school/api/classes'),
    getGroup: () => API.get('/school/api/group'),
    createProfile: (data: CreateProfilePayload) => API.post('/school/api/profile', data),
};

export default school;
