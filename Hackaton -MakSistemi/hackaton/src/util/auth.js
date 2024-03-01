import { redirect } from "react-router-dom";



export const getAuthEmailLogin = () => {
  const emailLogin = localStorage.getItem("emailLogin");

  if (!emailLogin) {
    return null;
  }


  return emailLogin;
};

export const checkAuthLoader = () => {
  const checkEmailLogin = getAuthEmailLogin();

  if (!checkEmailLogin) {
    return redirect("/register");
  }

  return null;
};

export const checkToHome = () => {
    const checkEmailLogin = getAuthEmailLogin();

  if (checkEmailLogin) {
    return redirect("/");
  }

  return null;
}