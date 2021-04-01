import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../firebaseConfig';
import { GlobalContext } from '../context/GlobalContext';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const { loggedInUser, setloggedInUser } = useContext(GlobalContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const userInfo = {
                    name: user.displayName,
                    email: user.email
                }
                setloggedInUser(userInfo);
                history.replace(from);
            }).catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage);
            });
    }
    return (
        <div className='py-5 text-center'>
            {
                loggedInUser.email || <>
                    <h2 className='text-info py-2'>Login with your google account</h2>
                    <button onClick={handleLogin} className='btn btn-primary px-4'>Login with Google</button>
                </>
            }
            {
                loggedInUser.email && <h4 className='text-success py-3'>User already Logged in</h4>
            }
        </div>
    );
};

export default Login;