import { useMemo, useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import SearchBar from "components/SearchBar";
import { useAppDispatch } from "store/hooks";
import { set } from "store/features/projectListSlice";
import { testCardInfo1, testCardInfo2 } from "config/userCard";
import MyPagination from "components/MyPagination/Mypagination";
import styled from "@emotion/styled";

import { useAppSelector } from "store/hooks";
import { ProjectCardList } from "./ProjectCard";
import { proProjectList } from "api";

const initialSeachInfo = { page: 0, sort: "最近一次更新" };

const MenuList = (props: { setKey: (e: string) => void }) => {
  const dispatch = useAppDispatch();

  const setSort = (info: string) => {
    props.setKey(info);

    proProjectList({ ...initialSeachInfo, sort: info }).then((res) => {
      console.log(res);
      dispatch(set(res.projects));
    });
  };

  return (
    <Menu defaultSelectedKeys={["0"]}>
      <Menu.Item key="0">
        <button
          onClick={() => {
            setSort("最近一次更新");
          }}
        >
          最近一次更新
        </button>
      </Menu.Item>
      <Menu.Item key="1">
        <button
          onClick={() => {
            setSort("项目开始时间");
          }}
        >
          项目开始时间
        </button>
      </Menu.Item>
      <Menu.Item key="2">
        <button
          onClick={() => {
            setSort("最多收藏");
          }}
        >
          最多收藏
        </button>
      </Menu.Item>
      <Menu.Item key="3">
        <button
          onClick={() => {
            setSort("最多点赞");
          }}
        >
          最多点赞
        </button>
      </Menu.Item>
      <Menu.Item key="4">
        <button
          onClick={() => {
            setSort("最多查看");
          }}
        >
          最多查看
        </button>
      </Menu.Item>
    </Menu>
  );
};

export default function ProjectList() {
  const [page, setpage] = useState<number>(0);
  const [sort, setsort] = useState<string>("最近一次更新");
  const [search, setsearch] = useState<string>("");

  const dispatch = useAppDispatch();

  useMemo(() => {
    console.log(initialSeachInfo);

    proProjectList(initialSeachInfo).then((res) => {
      dispatch(set(res.projects));
    });
  }, []);

  const projectList = useAppSelector((store) => store.projectList.projectList);

  return (
    <Container className="projectList">
      <div className="plMain">
        <PlSearchBar className="plSearchBar">
          <SearchBar
            color="black"
            height={50}
            width={800}
            placeholder="请输入要搜索的项目"
            onBtnClick={(e, text?: string) => {
              proProjectList({ ...initialSeachInfo, search: text }).then(
                (res) => {
                  dispatch(set(res.projects));
                }
              );
            }}
          />

          <PlPulldown className="plPulldown">
            <Dropdown
              overlay={<MenuList setKey={(e: string) => setsort(e)} />}
              trigger={["click"]}
            >
              <PulldownText>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  {sort} <DownOutlined />
                </a>
              </PulldownText>
            </Dropdown>
          </PlPulldown>
        </PlSearchBar>

        <ProjectCardList projectList={projectList} />

        <div>
          {(projectList || []).length >= 18 && (
            <MyPagination
              total={270}
              onChange={(e) => {
                proProjectList({ ...initialSeachInfo, page: e }).then((res) => {
                  dispatch(set(res.projects));
                });
              }}
            />
          )}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px;
  overflow-y: scroll;
`;

const PlSearchBar = styled.div`
  width: 100%;
  min-width: 800px;
`;

const PlPulldown = styled.div`
  width: 800px;
  margin-top: 20px;
`;

const PulldownText = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: row-reverse;
`;
