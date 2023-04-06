import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김솔빈",
        comment: "알열ㅇㄹㅇㄹ",
    },
    {
        name: "유재석",
        comment: "ㄹㄴㅁㄹㄴㅁㅁㄴㄹㄴㅁㄴㅁ",
    },
    {
        name: "강민경",
        comment: "ㄹㄴㅁㄴㅁㄴㅁㄻㄴㄻㄴ",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;