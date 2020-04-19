import api from '../api/api'
import authenticationStore from '../store/authenticationStore'
import accountStore from '../store/accountStore'

const accountMixin = {
    methods: {
        authenticate(data) {
            api.account.authenticate(data).then(response => {
                authenticationStore.commit('setToken', response.token)
                this.$router.push('/account');
            })
        },
        createAccount(data) {
            api.account.createAccount(data).then(response => {
                authenticationStore.commit('setToken', response.authentication.token)
                accountStore.commit('setAccount', response);
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
