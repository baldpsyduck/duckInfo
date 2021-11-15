import { comment } from './comment';
import { simpleUser } from './user';


export interface member extends simpleUser {
    role: string;
}

export type members = member[]

export type simpleProject = {
    id: string;
    name: string;
    description: string;
    tags: string[];
    likes: number;
    dislikes: number;
    stars: number;
    watches: number;
    startAt: string;
    endAt: string;
}

export interface cardProject extends simpleProject {
    members: members;
}

export interface branch {
    title: string,
    key: string,
    date?: string,
    members?: members; 
    children: branch[]
} 

export interface project extends simpleProject {
    members: members;
    projectTree: branch[];
    links?: string[];//项目主页链接github等
    golry?: [];//项目荣誉
    comments?: comment[];
}