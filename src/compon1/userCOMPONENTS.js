import React from 'react';

const UserComponents = (props) => {
    let {id,name,username,email} = props;
    return (
        <div>
            id: {id} name: {name} username: {username} email: {email}
        </div>
    );
};

export default UserComponents;