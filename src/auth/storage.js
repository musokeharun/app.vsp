import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import logger from "../utils/logger";

const key = "authToken";
const registerKey = "passKey";

const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (error) {
        logger.log("Error storing the auth token", error);
    }
};

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log("Error getting the auth token", error);
    }
};

const getUser = async () => {
    const token = await getToken();
    return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log("Error removing the auth token", error);
    }
};


const storeRegister = async (register) => {
    try {
        await SecureStore.setItemAsync(registerKey, JSON.stringify(register));
    } catch (e) {
        logger.log(e);
    }
};


export const getRegister = async (temp = true) => {
    try {
        let s = await SecureStore.getItemAsync(registerKey);
        if (temp)
            await SecureStore.deleteItemAsync(registerKey);
        return JSON.parse(s);
    } catch (e) {
        logger.log(e);
        return "";
    }
};

export default {getToken, getUser, removeToken, storeToken, getRegister, storeRegister};