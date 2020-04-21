import api from '../api/api'
import authenticationStore from '../store/authenticationStore'
import accountStore from '../store/accountStore'

const accountMixin = {
    methods: {
        authenticate(data) {
            api.account.authenticate(data).then((response: any) => {
                authenticationStore.commit('setToken', response.token)
                //@ts-ignore
                this.$router.push('/account');
            })
        },
        createAccount(data: any) {
            api.account.createAccount(data).then((response:any) => {
                authenticationStore.commit('setToken', response.authentication.token)
                accountStore.commit('set', response);
                //@ts-ignore
                this.$router.push('/account');
            })
        },
        restore(data) {
            return api.account.restore(data);
        },
        setPassword(data) {
            return api.account.setPassword(data);
        }
    }
};

export default accountMixin;
