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
      <Typography.Title level={3}>行政组</Typography.Title>
      <div className="administrator">
        {adminUserList.length !== 0 &&
          <>
            <UserCardList userList={adminUserList} />

          </>
        }
      </div>

      <Typography.Title level={3}>成员</Typography.Title>
      <div className="userMember">
        {memberUserList.length !== 0 &&
          <>
            <UserCardList userList={memberUserList} />
          </>
        }
      </div>

    </div >
  );
};
