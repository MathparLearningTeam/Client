import authenticationStore from '../store/authenticationStore'

const authenticated = function(to, from, next){
    if(to.matched.some(record => record.meta.authenticated)){
        const redirectTo = to.meta.redirectTo || "login";
        if(!authenticationStore.getters.getToken){
            next({name: redirectTo});
            return;
        }
    }
    next();
}

const notAuthenticated = function (to, from, next) {
    if(to.matched.some(record => record.meta.notAuthenticated)){
        const redirectTo = to.meta.redirectTo || "account";
        if(authenticationStore.getters.getToken) {
            next({name: redirectTo});
            return;
        }
    }
    next();
}

export {authenticated, notAuthenticated}
