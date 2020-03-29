import api from '../api'
import store from '../store'

export const userMixin = {
    methods: {
        authenticate(data) {
            api.authentication.authenticate(data).then(response => {
                localStorage.setItem('token', response.token);
                store.state.token = response.token;
                // @ts-ignore
                this.$router.push('/profile');
            })
        },
        createSchool(data) {
            api.authentication.createSchool(data).then(response => {
                localStorage.setItem('token', response.token.token);
                store.state.token = response.token;
                // @ts-ignore
                this.$router.push('/profile');
            })
        },
        restore(data) {
            return api.authentication.restore(data);
        },
        setPassword(data) {
            return api.authentication.setPassword(data);
        }
    }
};
