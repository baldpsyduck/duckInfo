import { user } from "types/user";

export const templateUser: user = {
  username: "张三",
  email: "zhangsan@mail.com",
  avatar: "avatar/template_avatar.png",
  description:
    "思而不行假道理，行而不思空忙碌。每个人心中都有一个火种，不要听任它熄灭，要找到它，点燃它。",
  SESSIONID: "51sa65",
  authority: 0,
};

export const blankUser: user = {
  username: "",
  email: "",
  SESSIONID: "", 
  authority: 0,
};  