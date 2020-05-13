const fakeAuth = {
    isAuthenticated: false,
    authenticate(callback) {
        fakeAuth.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    sigout(callback) {
        fakeAuth.isAuthenticated = false;
        setTimeout(callback, 100);
    }
};

export default fakeAuth;