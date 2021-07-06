import { createStore } from 'redux';

const store = createStore(() => {
    return {
        id: 3,
        name: 'João',
        email: 'victor_jv380@hotmail.com',
    };
});

export default store;
