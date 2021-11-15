import styled from "@emotion/styled";
import { Avatar, Card } from "antd";
import { NavLink } from "react-router-dom";
import { cardUser } from 'types/user';

const getRenderPropsByPosition = (position?: number) => {
  switch (position) {
    case 10:
      return {
        color: "#FBC400",
        title: "主席",
      };
    case 2:
      return {
        color: "#00E268",
        title: "实验室成员",
      };
    case 1:
      return {
        color: "#00E2E2",
        title: "学生",
      };
    default:
      return {
        color: "#C0C0C0",
        title: "编外人员",
      };
  }
};

const UserCard = ({
  userProps,
  onSelected,
}: {
  userProps: cardUser;
  onSelected?: (props: cardUser) => void;
}) => {


  const Container = styled(Card)`
    border-left: 8px solid ${getRenderPropsByPosition(userProps.authority).color}
  `

  return (
    <NavLink to={`/user/me/${userProps.username}`}>
      <Container
        className="userCard"
        size={"small"}
        hoverable
        onSelect={() => (onSelected ? onSelected(userProps) : null)}
      >
        <Avatar
          size={64}
          className="userAvatar"
          icon={<img src={userProps.avatar} alt={"UserAvatar"} />}
        />
        <div className="userInfo">
          <div className="titleContent">
            <span className="titleLeft">{userProps.username}</span>
            <span className="titleRight"> - #{userProps.officialID}</span>
          </div>
          <a href={`mailto:${userProps.email}`}>{userProps.email}</a>
          <div>
            {userProps.authority===10 ? "行政组" : "成员"}
            {" · "}
            {getRenderPropsByPosition(userProps.authority).title}
          </div>
        </div>
      </Container>
    </NavLink>
  );
};

export const UserCardList = ({ userList }: { userList: cardUser[] }) => {
  return (
    <div className="cardListContainer">
      {userList.map((item) => (
        <UserCard userProps={item} />
      ))}
    </div>
  );
};

