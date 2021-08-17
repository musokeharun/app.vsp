import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

const user = {};

let useAuth = () => {
    const logIn = (authToken) => {
        const user = jwtDecode(authToken);
        // setUser(user);
        // authStorage.storeToken(authToken);
    };

    const logOut = () => {
        // setUser(null);
        // authStorage.removeToken();
    };

    return {user, logIn, logOut};
};
export default useAuth;
