import { createContext, useContext, useEffect, useState } from "react";
import { firebaseApp } from "../../../firebase/fireBaseAuth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

export const AuthenticationContext = createContext();

export const useAuth = () => {
  const authContext = useContext(AuthenticationContext);
  if (!authContext) throw new Error("there is no authentication");
  return authContext;
}

export const AuthenticationContextProvider = ({ children }) => {
  const firestore = getFirestore(firebaseApp);
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const signup = async (email, password, rol) => {
    const infoUser = await createUserWithEmailAndPassword(auth, email, password).then((userFirebase) => {
      return userFirebase;
    });
    console.log(infoUser.user.uid);
    const docRef = await doc(firestore, `/user/${infoUser.user.uid}`);
    setDoc(docRef, { email: email, rol: rol });
  }

  const login = async (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setIsLoading(false);
    });
  }, [auth]);

  return (
    <AuthenticationContext.Provider value={{ signup, login, user, logout, isLoading }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
