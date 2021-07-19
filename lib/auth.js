import React, {useState, useEffect, useContext, createContext} from 'react';
import firebase from './firebase'

const authContext = createContext();

export function ProvideAuth({children}) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    // const actionCodeSettings = {
    //     url:
    //     // this must be true
    //     handleCodeInApp: true,
    //     iOS: {
    //         bundleId: 
    //     },

    // }

    const createUserWithEmailAndPassword = (email, password) => {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
            });
    };

    const signInWithEmailAndPassword = (email, password) => {
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
            });
    };

    const signInWithEmailLink = (email, actionCodeSettings) => {
     return firebase
     .auth()
     .sendSignInLinkToEmail(email, actionCodeSettings)
    .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    setUser(response.user)
    return response.user;
    // ...
  });
    }


    // const signup = (email, password) => {
    //     return firebase
    //         .auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((response) => {
    //             setUser(response.user);
    //             return response.user;
    //         });
    // };

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(false);
            });
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return {
        user,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signout,
    };
}