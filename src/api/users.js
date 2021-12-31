import client from "./client";

const register = (userInfo) => client.post("/register", userInfo);
const verify = (userInfo) => client.post("/verify", userInfo);


export default {register};
