import { fetchHttp } from "utils/http";
import { user } from "types/user";
import { project } from "types/project";
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

export const proRegist = (props: project) => {
  return fetchHttp("api/project/register", {
    method: "POST",
    data: props,
  });
};

export const proProjectList = (props: {
  page: number;
  sort: string;
  search?: string;
}) => {
  return fetchHttp("api/project/list", { data: props });
};

export const proGetProject = (props: { id: string }) => {
  return fetchHttp("api/project/info", { data: props });
};

export const proSetInfo = (props: project) => {
  return fetchHttp("api/project/setInfo", {
    method: "POST",
    data: props,
  });
};
