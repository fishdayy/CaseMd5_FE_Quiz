import axios from "axios";

const API_URL = "http://localhost:3001/";

const register = (username, password) => {
    return axios.post(API_URL + "register", {
        username,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "login", {
            username,
            password,
        })
        .then((response) => {
            if (response.data) {
                localStorage.setItem("user", response.data.message.account_id);
                localStorage.setItem("token", response.data.message.token);
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const authService = {
    register,
    login,
    logout,
};

export default authService;