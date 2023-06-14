import { fetchHttp } from "utils/http";
import { user } from "types/user";
import axios from "axios";

export const userRegist = (info: user) => {
  return axios.post("/api/user/reg", info);
};

export const userGetV = (email: string) => {
  return axios.post("/api/user/active", { email: email });
};

export const userGetFV = (email: string) => {
  return axios.post("/api/user/forget/email", { email: email });
};

export const userChangeP = ({
  email,
  verify,
  password,
}: {
  email: string;
  verify: string;
  password?: string;
}) => {
  return axios.post("/api/user/forget", {
    email: email,
    verify: verify,
    password: password || "",
  });
};

export const userLogin = ({
  username,
  password,
  remember,
}: {
  username: string;
  password: string;
  remember: boolean;
}) => {
  return axios.post("/api/user/login", {
    username: username,
    password: password,
    remember: remember,
  });
};

export const userGetUser = (props?: { who: string }) => {
  return axios.post("/api/user/getUser", {
    who: props?.who || "",
  });
};
export const userUpdate = (props: {
  username: string;
  nickname: string;
  description?: string;
  avatar?: any;
}) => {
  const { username, nickname, description, avatar } = props;
  let formdata: any = new FormData();
  formdata.append("avatar", avatar);
  formdata.append("username", username);
  formdata.append("nickname", nickname);
  formdata.append("description", description);

  return axios.post("/api/user/update", formdata, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const userLogout = () => {
  return axios.get("/api/user/logout");
};
