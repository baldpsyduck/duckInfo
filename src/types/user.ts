import { simpleProject } from './project';
import { comment } from './comment';

export type simpleUser = {
    username: string;
    nickname?: string;
    avatar?: string;
    tags?: string[];
    officialID?: string;
}

export interface cardUser extends simpleUser {
    authority: number;//0游客 1学生 2实验室成员 10管理组
    email: string;
}

export interface user extends cardUser {
    description?: string; 
    SESSIONID?: string; 
    password?: string;
    studentID?: number;//学工号
    contactDetail?: string;//联系方式
    realname?: string;//真实姓名
    projects?: simpleProject[];//参与的项目
    comments?: comment[];//评论
}
