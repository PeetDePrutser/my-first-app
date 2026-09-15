import { defineStore } from "pinia";
import { ref } from "vue";

export const loginStore = defineStore('login', {
    state: () => ({
        username: ref(localStorage.getItem("userName")),
        userKey: ref(localStorage.getItem("userKey")),
    }),
    getters: {
        loggedIn() {
            return !!this.username;
        },
        isAuthenticated() {
            return !!this.userKey;
        }
    },
    actions: {
        login(username, password) {
            localStorage.setItem("userName", username);
        },
        verify(userKey) {
            localStorage.setItem("userKey", userKey);
        }
    }
});
