import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../../public/firebase.config";

export const userAuth = createContext(null);
const googleProvider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }
    

    useEffect( () => {

        return onAuthStateChanged(auth, correntUser => {
            console.log('Corrent User', correntUser);
            setUser(correntUser)
            setLoading(false)
        })

        

    } , [])

    



    const allData = {createUser, loginUser, googleLogin, logOut, user, loading}

    return (

        <userAuth.Provider value={allData}>
            {children}
        </userAuth.Provider>

    )
}

export default AuthProvider;