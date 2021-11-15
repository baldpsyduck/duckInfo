import { cardProject } from 'types/project';

export const testCardInfo1: cardProject = {
  name: "OpenProject",
  id: "WEB123123",
  members: [
    {
      username: "qer",
      officialID: "OL-123",
      role: "leader",
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      tags: [],
    },
    {
      username: "Criheacy",
      officialID: "OL-233",
      tags: [],
      role: "front-end",
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
      username: "duckduckduck",
      officialID: "OL-345",
      tags: [],
      role: "front-end",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
  ],
  description: "兴趣开放实验室项目管理网站",
  startAt: "2021-04-15",
  endAt: "2021-09-01",
  tags: ["web","项目管理"],
  likes: 233,
  dislikes: 0,
  stars: 21,
  watches: 19,
};

export const testCardInfo2: cardProject = {
  name: "OpenProject",
  id: "WEB123456",
  members: [
    {
      username: "qer", 
      officialID: "OL-123",
      tags: [],
      role: "leader",
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
      username: "Criheacy",
      officialID: "OL-233",
      tags: [],
      role: "front-end",
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
      username: "duckduckduck",
      officialID: "OL-345",
      tags: [],
      role: "front-end",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
  ],
  description: "兴趣开放实验室项目管理网站",
  startAt: "2021-04-15",
  endAt: "2021-09-01",
  tags: [ "web","项目管理"],
  likes: 233,
  stars: 21,
  watches: 19,
  dislikes: 0,
};

export const testCardInfo: cardProject[] = [testCardInfo1, testCardInfo2]