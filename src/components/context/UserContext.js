import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();

const UserContext = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState({})

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut=()=>{
        return signOut(auth)
    }

    const authInfo ={user, createUser, signIn, logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;