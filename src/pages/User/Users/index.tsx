import { Typography } from "antd";
import styled from "@emotion/styled";
import { UserCardList } from "./userCard";
import { user } from "types/user";
import { useAppSelector } from 'store/hooks';
import "./users.css"
import MoveDiv from 'components/MoveDiv';

export default function Users() {
  const userListSelector = useAppSelector(store => store.userList);

  let adminUserList: user[] = [];;
  let memberUserList: user[] = [];

  userListSelector.userList.forEach((user: user, index: any) => {
    if (user.authority===10) {
      adminUserList.push(user);
    } else {
      memberUserList.push(user);
    }
  });

  return (
    <div className="userCardList">
        users...
    </div >
  );
};
