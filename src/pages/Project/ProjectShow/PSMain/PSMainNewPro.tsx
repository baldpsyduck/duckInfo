import CommentList from 'components/CommentList';
import { comment } from 'types/comment';

export default function PSMainNewPro({comments}:{comments:comment[]}) {
    return (
        <div>
            <CommentList comments={comments}/>
        </div>
    )
}
