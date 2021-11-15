import { Avatar, Card, Empty, Popover } from "antd";
import {
  EyeOutlined,
  LikeOutlined,
  StarOutlined,
  SwapRightOutlined,
} from "@ant-design/icons";
import { cardProject } from "types/project";

import './ProjectCards.css';
import Tag from 'components/Tag';
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import getRandomColor from 'utils/getRandomColor';

const ProjectCard = ({
  projectProps,
  onSelected,
}: {
  projectProps: cardProject;
  onSelected?: (props: cardProject) => void;
}) => {
  return (
    <NavLink to={`/project/show/${projectProps.id}`}>
      <Card
        title={`${projectProps.name}`}
        extra={`ID:${projectProps.id}`}
        size={"small"}
        hoverable
        onSelect={() => (alert('0'))}
      >
        <div className='paragraphInCard' onClick={(e) => { e.preventDefault() }}>
          {projectProps.members.map((member) => (
            <Popover key={member.username} content={<b>{member.username}</b>}>
              <Avatar src={member.avatar} />
            </Popover>
          ))}
        </div>
        <div className='paragraphInCard'>
          <b>项目周期：</b>
          {projectProps.startAt}
          <SwapRightOutlined />
          {projectProps.endAt}
        </div>
        <div className='paragraphInCard'>
          <b>项目简介：</b>
          {projectProps.description}
        </div>
        <div className='paragraphInCard'>
          {projectProps.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className='paragraphInCard'>
          <ThreeColumns className='threeColumns' onClick={(e) => { e.preventDefault() }}>
            <div className='block' >
              <LikeOutlined /> {projectProps.likes}
            </div>
            <div className='block'>
              <StarOutlined /> {projectProps.stars}
            </div>
            <div className='block'>
              <EyeOutlined /> {projectProps.watches}
            </div>
          </ThreeColumns>
        </div>
      </Card>
    </NavLink>
  );
};


export const ProjectCardList = ({
  projectList,
}: {
  projectList: cardProject[];
}) => {

  return (
    <>
      {(projectList||[]).length === 0 ? (
        <Empty
          description={<EmptyText>没有数据</EmptyText>}
        />
      ) : (
        <CardCointainer className="cardContainer">
          {projectList.map((item) => (
            <ProjectCard key={item.id} projectProps={item} onSelected={(e) => { }} />
          ))}
        </CardCointainer>
      )}
    </>
  );
};

const EmptyText = styled.span`
  color: "#A0A0A0"
`

const CardCointainer = styled.div`
  height: 100%;
`

const ThreeColumns = styled.div`
  font-size      : 1.5rem;
  .block:hover{
    color: #ff0000;
  }
`