import TitleBar from "components/TitleBar";
import Tree from "components/Tree";
import PSMainNewPro from "./PSMainNewPro";
import PSMainPic from "./PSMainPic";
import PSMainTeam from "./PSMainTeam";
import {branch,member} from 'types/project';
import { comment } from "types/comment";

interface propsType{
    isAdmin:boolean,
    members:member[],
    projectTree:branch[], 
    linkId:string,
    comments:comment[],
}

export default function Main(props:propsType) {

    const {isAdmin,members,projectTree,linkId,comments} = props;

    return (
        <>
            <div className="psMain_Pic">
                <PSMainPic />
            </div>

            <div className="psMain_teamForm">
                <TitleBar lcChild="团队架构" size={30} rcChild={`${isAdmin ? '编辑' : ''}`} button={isAdmin} />
                <div className="team">
                    <PSMainTeam members={members} isAdmin={isAdmin} />
                </div>
            </div>

            <div className='psMain_NewPro'> 
                <TitleBar lcChild="最新进展" size={30} />
                <PSMainNewPro comments={comments}/>
            </div>

            <div className="psMain_Progress" >
                <TitleBar lcChild="完成进度" size={30} rcChild='查看详情' button link={`/project/show/${linkId}/proTree`}/>
                <Tree list={projectTree} />
            </div>
        </>
    )
}
