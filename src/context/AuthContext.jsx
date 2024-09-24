import { createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UseLocalStorage from '../UseLocalStorage';

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
    const history = useHistory();

    const LSKey = 's11d2';
    const [authInfo, setAuthInfo] = UseLocalStorage(LSKey, {});
    let isLoggedIn = authInfo && authInfo.token;


    const initAuth = (authFormData) => {
        axios
            .post(
                'https://nextgen-project.onrender.com/api/s11d2/login',
                authFormData
            )
            .then((res) => {
                res.data && setAuthInfo(res.data);
            })
            .catch((err) => {
                console.log('authError', err);
            });
    };

    const logOut = () => {
        history.push('/friendsLogin');
        setAuthInfo({});
    };

    return (
        <AuthContext.Provider value={{ initAuth, logOut, authInfo, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const AuthContext = createContext();
export default AuthContextProvider;