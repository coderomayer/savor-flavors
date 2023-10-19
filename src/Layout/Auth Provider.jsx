import { createContext } from "react"

const AuthProvider = ({children}) => {

    const userAuth = createContext()


    const userInfo = {}


    return (
        <userAuth.Provider value={userInfo}>
            {children}
        </userAuth.Provider>
    )
}

export default AuthProvider;