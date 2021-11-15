import { project } from 'types/project';

export const proInfo: project = {

    id: 'web123',
    name: '我是一个项目', 
    description: '目我是一个项目我是一个项目我是一个项目',
    tags: ['前端', '后端', '人工智能', '创新项目评审', '黑客松项目'],
    likes: 0,
    dislikes: 0,
    stars: 0,
    watches: 0,
    startAt: '2021/1/1',
    endAt: '2021/2/1',
    members: [{ username: '123', role: 'leader' }, { username: '456', role: '前端' }, { username: '789', role: '前端' }, { username: '233', role: '前端' }, { username: '45sa6', role: '前端' }, { username: '78912', role: '前端' }, { username: '23331919', role: '前端' }, { username: '452326', role: '前端' }, { username: '78988', role: '前端' }, { username: '231321233', role: '前端' }, { username: '258', role: '后端' }, { username: '369', role: '后端' }],
    links: ["https://github.com/baldpsyduck/openproject", 'https://www.yuque.com/openlab2020'],
    projectTree: [{
        title: '项目开始',
        date: '2021/2/5',
        key: '0',
        members:[{ username:'789', role: '前端'},{ username:'456', role: '前端'}],
        children: [{
            title: 'Idea提出',
            key: '0-0',
            members:[{ username:'123', role: '前端'}],
            children: [{
                title: 'Idea提出',
                members:[{ username:'123', role: '前端'},{ username:'789', role: '前端'},{ username:'456', role: '前端'}],
                key: '0-0-0',
                children:[]
            }]
        }, {
            title: '创新性分析论证',
            members:[{ username:'123', role: '前端'},{ username:'789', role: '前端'},{ username:'456', role: '前端'}],
            key: '0-1',
            children:[]
        },]
    }, {
        title: '环境搭建',
        date: '2021/2/5',
        key: '1',
        members:[{ username:'123', role: '前端'}],
        children: [{
            title: 'Idea提出',
            members:[{ username:'123', role: '前端'}],
            key: '1-0',
            children: [{
                title: 'Idea提出',
                members:[{ username:'123', role: '前端'}],
                key: '1-0-0',
                children:[]
            }, {
                title: '创新性分析论证',
                members:[{ username:'123', role: '前端'}],
                key: '1-0-1',
                children:[]
            },]
        }, {
            title: '创新性分析论证',
            members:[{ username:'123', role: '前端'}],
            key: '1-1',
            children:[]
        },]
    }, {
        title: '测试交付',
        date: '2021/2/5',
        members:[{ username:'123', role: '前端'},{ username:'789', role: '前端'},{ username:'456', role: '前端'}],
        key: '2',
        children: [{
            title: 'Idea提出',
            members:[{ username:'123', role: '前端'}],
            key: '2-0',
            children: [{
                title: 'Idea提出',
                members:[{ username:'123', role: '前端'},{ username:'789', role: '前端'}],
                key: '2-0-0',
                children:[]
            }, {
                title: '创新性分析论证',
                members:[{ username:'123', role: '前端'},{ username:'789', role: '前端'},{ username:'456', role: '前端'}],
                key: '2-0-1',
                children:[]
            },]
        }, {
            title: '创新性分析论证',
            members:[{ username:'456', role: '前端'}],
            key: '2-1',
            children:[]
        },]
    }, {
        title: '测试交付',
        date: '2021/2/5',
        members:[{ username:'123', role: '前端'}],
        key: '2',
        children:[]
    }],
    
}

export const blankPro:project={
    id: "",
    name: "",
    description: "",
    tags: [],
    likes: 0,
    dislikes: 0,
    stars: 0,
    watches: 0,
    startAt: "",
    endAt: "",
    members: [],
    links: [],
    projectTree: []
  } 