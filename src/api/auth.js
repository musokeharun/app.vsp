import client from "./client";

const login = (form) => client.post("/auth", form);

export default {
    login,
};
