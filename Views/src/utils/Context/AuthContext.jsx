import { createContext, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostRequest, hostUrl } from "../Request_Http/Resquest";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(sessionStorage.getItem("User"));
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    nom: "",
    prenom: "",
    email: "",
    pays: "",
    tel: "",
    siteWeb: "",
    role: ``,
    incubateur: "",
    description: ""
  });

  const [file, setFile] = useState({
    file: ""
  });

  const updateRegisterImageUrl = useCallback((url) => {
    setFile(url);
  }, []);
  const formData = new FormData();
  formData.append('data', registerInfo);
  formData.append('file', file);
  console.log(registerInfo);


  const [loginError, setLoginError] = useState(sessionStorage.getItem("User"));
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const user = sessionStorage.getItem("User");

    setUser(JSON.parse(user));
  }, []);

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);
  const updateUser = useCallback((response) => {
    sessionStorage.setItem("User", JSON.stringify(response));

    setUser(response);
  }, []);

  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();
      setIsRegisterLoading(true);
      setRegisterError(null);
      console.log(registerInfo)
      const response = await PostRequest(
        `${hostUrl}/utilisateur/signUp`,
        JSON.stringify(registerInfo)
      );

      setIsRegisterLoading(false);

      if (response.error) {
        return setRegisterError(response);
      }

      sessionStorage.setItem("User", JSON.stringify(response));
      setUser(response);
    },
    [registerInfo]
  );

  const loginUser = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoginLoading(true);
      setLoginError(null);

      const response = await PostRequest(
        `${hostUrl}/utilisateur/signIn`,
        JSON.stringify(loginInfo)
      );

      setIsLoginLoading(false);

      if (response.error) {
        return setLoginError(response);
      }

      sessionStorage.setItem("User", JSON.stringify(response));
      setUser(response);
      if (response.role === "ceo" && response.numberConnexion <= 1) {
        setTimeout(() => {
          navigate(`/onboarding`)
        }, 2000);
      } else {
        setTimeout(() => {
          navigate(`/dashboard/${response.role}`)
        }, 2000);
      }

    },
    [loginInfo]
  );

  const logoutUser = useCallback(() => {
    sessionStorage.removeItem("User");
    setUser(null);
    navigate("/connexion")
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        registerUser,
        loginUser,
        registerInfo,
        updateRegisterInfo,
        loginInfo,
        updateLoginInfo,
        loginError,
        isLoginLoading,
        registerError,
        isRegisterLoading,
        logoutUser,
        updateRegisterImageUrl,
        file,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};



/*
import { useContext, useEffect, useCallback } from "react";
import { createContext, useState } from "react";
import * as React from "react";
export const authContext = createContext();

function useAuth() {
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = sessionStorage.getItem("User");

    setUser(JSON.parse(user));
  }, []);
  const updateUser = useCallback((response) => {
    window.sessionStorage.clear();
    window.sessionStorage.setItem("User", JSON.stringify(response));
    setUser(response);
  }, [])

  return {
    user,
    updateUser,
    authed,
    register(registerInfos) {
      return new Promise((res) => {
        window.sessionStorage.clear();
        window.sessionStorage.setItem("User", JSON.stringify(registerInfos));
        res();
      })

    },
    login(loginInfos) {
      return new Promise((res) => {
        setAuthed(true);
        updateUser(loginInfos);
        window.sessionStorage.setItem("User", JSON.stringify(loginInfos));
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        window.sessionStorage.removeItem("User");
        res();
      });
    },
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export default function AuthConsumer() {
  return useContext(authContext);
}

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const user = sessionStorage.getItem("User");

    setUser(JSON.parse(user));
  }, []);

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);
  const updateUser = (response) => {
    sessionStorage.setItem("User", JSON.stringify(response));
  };
  /*
    const registerUser = useCallback(
      async (e) => {
        e.preventDefault();
  
        setIsRegisterLoading(true);
        setRegisterError(null);
  
        const response = await postRequest(
          `${baseUrl}/users/register`,
          JSON.stringify(registerInfo)
        );
  
        setIsRegisterLoading(false);
  
        if (response.error) {
          return setRegisterError(response);
        }
  
        sessionStorage.setItem("User", JSON.stringify(response));
        setUser(response);
      },
      [registerInfo]
    );
  
  const loginUser = (response) => {

    sessionStorage.setItem("User", JSON.stringify(response));
    setUser(response);
  }


  const logoutUser = useCallback(() => {
    sessionStorage.removeItem("User");
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginUser,
        registerInfo,
        updateRegisterInfo,
        loginInfo,
        updateLoginInfo,
        loginError,
        isLoginLoading,
        registerError,
        isRegisterLoading,
        logoutUser,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};*/