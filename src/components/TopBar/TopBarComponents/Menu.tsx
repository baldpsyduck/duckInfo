import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import {basicColor} from 'config/color';

export default function Menu() {
  return (
    <div className="menu">
      <MenuInner activeClassName="active" className="menuInner" to="/home">
        首页
      </MenuInner>

      <MenuInner activeClassName="active" className="menuInner" to="/project">
        组织列表
      </MenuInner>

      <MenuInner activeClassName="active" className="menuInner" to="/user">
        志愿招募
      </MenuInner>

      <MenuInner activeClassName="active" className="menuInner" to="/user">
        热点活动
      </MenuInner>
    </div>
  );
}

const MenuInner = styled(NavLink)`
  padding: 0px 30px;
  font-family: STZhongsong;
  font-size: 1.8rem;
  color: ${basicColor};
  height: 7.48rem;
`;
