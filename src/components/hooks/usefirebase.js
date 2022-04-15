import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.init";

const useFirebase = () => {
  const [user, setUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
      })
    }, []);
    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{})
    }
  const auth = getAuth(app);
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result)
            console.log(result);
      })
        .catch((error) => {
          console.log(error)
      });
  };
  return { user,setUser, handleGoogleSignIn,handleSignOut };
};
export default useFirebase;
