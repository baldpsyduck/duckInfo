import styled from "@emotion/styled";
import { useAppSelector } from 'store/hooks';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';


import './LeftBar.css';

export default function LeftBar() {

  const loc = useAppSelector(store => store.loc)
  const userName = useAppSelector(store => store.me.data.username)

  return (
    <>
      {
        (loc.location === "/project/list" && userName) &&
        <Container className="leftBar">
          <LeftMenu
            defaultSelectedKeys={['2']}
            mode="inline"
          >
            <Menu.Item key="1" >
              <ProjectInner activeClassName="active" className="projectInner" to={`/project/newP`} >
                新建项目
              </ProjectInner>
            </Menu.Item>
            <Menu.Item key="2">
              <ProjectInner activeClassName="active" className="projectInner" to={`/project/list`} >
                所有项目
              </ProjectInner>
            </Menu.Item>
            <Menu.Item key="3">
              <ProjectInner activeClassName="active" className="projectInner" to={`/project/list`} >
                我参与的项目
              </ProjectInner>
            </Menu.Item>
            <Menu.Item key="4">
              <ProjectInner activeClassName="active" className="projectInner" to={`/project/list`} >
                看过的项目
              </ProjectInner>
            </Menu.Item>
            <Menu.Item key="5">
              <ProjectInner activeClassName="active" className="projectInner" to={`/project/list`} >
                收藏的项目
              </ProjectInner>
            </Menu.Item>
          </LeftMenu >
        </Container>
      }
    </>
  )
}

const LeftMenu = styled(Menu)`
  width: 256;
`

const Container = styled.div`
  width: 280px;
  background-color: #ffffff;
`

const ProjectInner = styled(NavLink)`
  font-family    : STZhongsong;
  font-size      : 21px;
`