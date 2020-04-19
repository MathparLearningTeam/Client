import API from './apiClient'

const account = {
    checkEmail: (email: any) => API.get(`/account/api/emailAvailable?email=${email}`),
    createAccount: (params: any) => API.post(`/account/api/`, params),
    getAccount: () => API.get(`/account/api/`),
    authenticate: (params: any) => API.post(`/account/api/authenticate`, params),
    restore: (params: any) => API.get(`/restoration/restorePassword`, {params}),
    setPassword: (params: any) => API.post(`/restoration/changePassword`, params)
};

export default account;
