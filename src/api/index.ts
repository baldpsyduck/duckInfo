import { fetchHttp } from "utils/http";
import { user } from "types/user";
import cookie from "react-cookies";
import Axios from "axios";

export const userRegist = (info: user) => {
  return fetchHttp("api/user/register", {
    method: "POST",
    data: info,
  });
};

export const userLogin = (props: {
  username: string;
  password: string;
  remember: boolean;
}) => {
  return fetchHttp("api/user/login", {
    method: "POST",
    data: props,
  });
};

export const userGetUser = (props?: { who: string }) => {
  return fetchHttp("api/user/getUser", {
    data: props,
  });
};

export const userLogout = () => {
  return fetchHttp("api/user/logout", { method: "POST" });
};
