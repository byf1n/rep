import React from 'react';

const PostComponents = (props) => {
    let {userId,id,title} = props;
    return (
        <div>UserId: {userId} id: {id} title: {title}  </div>
    );
};

export default PostComponents;