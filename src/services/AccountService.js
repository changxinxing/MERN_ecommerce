import http from '../httpurl'
const login = (data) => {
    return http.post("/login", data, {
      withCredentials: true,
      credentials: "include",
    });
  };
  const signup = (data) => {
    return http.post("/signup", data, {
      withCredentials: true,
      credentials: "include",
    });
  };
  const edit = (data) => {
    return http.post("/edit", data, {
      withCredentials: true,
      credentials: "include",
    });
  };
  export const accountService = {
    login,
    signup,
    edit
  };