import { comment } from './comment';
import {infos} from './inform';

export type simpleUser = {
    username: string;
    nickname?: string; 
    avatar?: string;
}

export interface cardUser extends simpleUser {
    authority: number;//0游客 1学生 2官方频道 3管理员
    email: string;
}

export interface user extends cardUser {
    description?: string; 
    SESSIONID?: string; 
    password?: string;
    studentID?: number;//学工号
    realname?: string;//真实姓名
    infos?: infos[];//参与的项目
    comments?: comment[];//评论
}
