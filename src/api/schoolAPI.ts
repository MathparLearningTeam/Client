import API from './apiClient'

const school = {
    createSchool: (data: any) => API.post('/school/api/', data),
    getSchool: () => API.get('/school/api/'),
    getProfiles: () => API.get('/school/api/getAllProfiles'),
    getProfile: (profileId) => API.get('/api/profile', {params: {profileId: profileId}}),
    getSchoolUsers: () => API.get('/school/api/schoolProfiles'),
    createStudent: (params: any) => API.post('/school/createStudent', params),
    createTeacher: (params: any) => API.post('/school/createTeacher', params),
    createHeadTeacher: (params: any) => API.post('/school/createHeadTeacher', params)
};

export default school;
