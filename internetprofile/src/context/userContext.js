import { useMutation, useQuery } from "@apollo/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { LOGIN, REGISTER } from "../graphql";

const UserContext = React.createContext(null);

const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const navigation = useNavigate();

  useEffect(() => {
    if (!window) return;
    const token = window.localStorage.getItem("token");
    const isLoggedInL = window.localStorage.getItem("isLoggedIn");
    if (token && isLoggedInL) {
      const cUser = window.localStorage.getItem("userId");
      setUserId(cUser);
      setIsLoggedIn(true);
      navigation("/Resultpage");
    } else {
      navigation("/login");
    }
  }, []);
  const [signUp, { data: signUpUserData, error: signUpUserError }] =
    useMutation(REGISTER);

  const [signIn, { data: signInUserData, error: signInUserError }] =
    useMutation(LOGIN);
  const value = {
    signUp: { signUp, data: signUpUserData, error: signUpUserError },
    signIn: { signIn, data: signInUserData, error: signInUserError },
    userId,
    setCurrentUser,
    currentUser,
  };
  return (
    <>
      {isLoading ? (
        <div>
          <h4>Loading... </h4>
        </div>
      ) : (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
      )}
    </>
  );
};

const useUserContent = () => {
  const context = React.useContext(UserContext);
  if (!context) return;
  return context;
};

export { UserContextProvider, useUserContent };
