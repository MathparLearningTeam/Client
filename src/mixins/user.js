import api from '../api'
import store from '../store'

export const userMixin = {
    methods: {
        authenticate(data) {
            api.account.authenticate(data).then(response => {
                localStorage.setItem('token', response.token);
                store.state.token = response.token;
                // @ts-ignore
                this.$router.push('/profile');
            })
        },
        createAccount(data) {
            api.account.createAccount(data).then(response => {
                localStorage.setItem('token', response.authentication.token);
                store.state.token = response.authentication.token;
                // @ts-ignore
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
