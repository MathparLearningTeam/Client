import API from './apiClient'

const school = {
    createSchool: (data: any) => API.post('/school/api/', data),
    getSchool: () => API.get('/school/api/'),
    getProfiles: () => API.get('/school/api/getAllProfiles'),
    users: () => API.get('/school/users'),
    createStudent: (params: any) => API.post('/school/createStudent', params),
    createTeacher: (params: any) => API.post('/school/createTeacher', params),
    createHeadTeacher: (params: any) => API.post('/school/createHeadTeacher', params)
};

export default school;
