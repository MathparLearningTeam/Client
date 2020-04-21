import API from './apiClient'

const account = {
    checkEmail: (email: any) => API.get("/account/api/emailAvailable", {params: {email: email}}),
    createAccount: (params: any) => API.post("/account/api/", params),
    getAccount: () => API.get("/account/api/"),
    authenticate: (params: any) => API.post("/account/api/authenticate", params),
    restore: (data: any) => API.post("/account/api/restoreCredentials", data),
    setPassword: (params: any) => API.post("/account/api/changePassword", params),
    getDetails: (accountIds: string[]) => API.get("/account/api/getPublicInfo", {params: {accountIds: accountIds}})
};

export default account;
