import axios from "axios";

const instance = axios.create({
    baseURL: "https://dummyjson.com/recipes",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000
});

export default instance;
