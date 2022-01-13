import React from 'react';

const CommentsComponenets = (props) => {
    let {commentId,id,name,email} = props;
    return (
        <div>
            CommentId: {commentId} id: {id} name: {name}  email: {email}
        </div>
    );
};

export default CommentsComponenets;