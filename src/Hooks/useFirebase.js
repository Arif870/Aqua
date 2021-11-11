import React, { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/Firebase.init";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";

//////
firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  //==================== Observe
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  //==================== Registration
  const registerUser = (email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log(user);

        //----------
        Swal.fire("Good job!", "Registration done successfully", "success");
        //----------
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };
  //==================== LogIn
  const loginUser = (email, password, history, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        //----------
        Swal.fire("Good job!", "LogIn successfully", "success");
        const destination = location.state?.from || "/";
        history.push(destination);
        //----------
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //==================== LOG OUT
  const logoutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        //----------
        Swal.fire("log Out!", "See you again", "success");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //
  //
  //
  //
  //
  //
  //==================== RETURN
  return {
    user,
    isLoading,
    registerUser,
    loginUser,
    logoutUser,
  };
};

export default useFirebase;
