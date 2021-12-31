import Constants from "expo-constants";

const settings = {
    dev: {
        apiUrl: "http://192.168.1.59:5000/api/phone",
    },
    staging: {
        apiUrl: "http://192.168.1.59:9000/api/phone",
    },
    prod: {
        apiUrl: "http://192.168.1.59:9000/api/phone",
    },
};

const getCurrentSettings = () => {
    if (__DEV__) return settings.dev;
    if (Constants.manifest.releaseChannel === "staging") return settings.staging;
    return settings.prod;
};

export default getCurrentSettings();
