import React, { createElement, useMemo, useState } from 'react';
import { Modal, Comment, Space } from 'antd';
import { MessageOutlined, DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useAppSelector } from 'store/hooks';
import { comment } from 'types/comment';
import CommentList from './index';

const { confirm } = Modal;

const IconText = (props: { icon: any, text: string }) => (
    <Space>
        {React.createElement(props.icon)}
        {props.text}
    </Space>
);


export default function MyComment(props: comment) {

    const [likes, setlikes] = useState<number>(props.likes);
    const [dislikes, setdislikes] = useState<number>(props.dislikes);
    const [action, setaction] = useState<string>('');
    const [publish, setpublish] = useState<boolean>(true);
    const author = props.author;
    const userName = useAppSelector(store => store.me.data.username)
    
    useMemo(()=>{ 
        setlikes(props.likes)
        setdislikes(props.dislikes)
        setaction('')
    },[props])

    const deleteComment = () => {
        confirm({
            title: '是否删除该动态？',
            icon: <ExclamationCircleOutlined />,
            okText: '是',
            okType: 'danger',
            cancelText: '否',
            onOk() {
                setpublish(false);
            },
            onCancel() {
            },
        });
    }

    const like = () => {
        if (likes === props.likes) {
            setlikes(props.likes + 1);
            setaction('liked');
        } else {
            setaction('');
            setlikes(props.likes);
        }
        setdislikes(props.dislikes);
    };

    const dislike = () => {
        if (dislikes === props.dislikes) {
            setdislikes(props.dislikes + 1)
            setaction('disliked');
        } else {
            setdislikes(props.dislikes);
            setaction('');
        }
        setlikes(props.likes);
    };

    const actions = [
        <span onClick={like}>
            {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
            <span className="comment-action">{likes}</span>
        </span>,
        <span onClick={dislike}>
            {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
            <span className="comment-action">{dislikes}</span>
        </span>,
        <span  key="comment-basic-reply-to"><IconText icon={MessageOutlined} text={`${props.comments || 0}`} key="list-vertical-message" /></span>,
        (author === userName) && <span onClick={() => deleteComment()}><DeleteOutlined />删除</span>,
    ];

    return (
        <>
            {publish && <Comment
                datetime={props.date}
                actions={props.content ? actions : undefined}
                {...props}
            />
            }
        </>
    )
}
