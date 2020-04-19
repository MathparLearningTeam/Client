import API from './apiClient'

const school = {
    school: () => API.get(`/school`),
    users: () => API.get(`/school/users`),
    createStudent: (params: any) => API.post(`/school/createStudent`, params),
    createTeacher: (params: any) => API.post(`/school/createTeacher`, params),
    createHeadTeacher: (params: any) => API.post(`/school/createHeadTeacher`, params)
};

export default school;
