import { onAuthStateChanged } from "firebase/auth"; 
import { auth } from "../../firebase/Firebase";
import { useEffect, useState } from "react";

const AuthUser = () => {
    
    const [authUser , setAuthUser] = useState(null);

    useEffect(()=> {
        
        // Get the current user when the component mounts and store it in `authUser'
        const listen = onAuthStateChanged(auth, (user) => {
        
            user ?  setAuthUser(user) : setAuthUser(null);
        
        });

        return () => {
            listen();
        };
    },[])

    
    return ( 
        <>
            { authUser ? <p>Sign in</p> : <p>Sign out</p> }
        </>
     );
}
 
export default AuthUser;