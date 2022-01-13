
import './App.css';
import {useEffect, useState} from "react";
import UserComponents from "./compon1/userCOMPONENTS";
import PostComponents from "./compon1/postComponents";
import CommentsComponenets from "./compon1/commentsComponenets";
import {getUsers} from "./compon1/service/userService";

function App() {


    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => {setUsers(value)})
    }, [])



    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value)
            })
    }, [])

    let [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value)
            })
    })


    return (
        <div className="App">

             <div className={'top'}>
                 <div className={'users'}>{
                    users.map(user => <UserComponents key={user.id} id={user.id} name={user.name} username={user.username} email={user.email} />
                    )
                }</div>

                <div className={'posts'}>
                    {
                        posts.map(post => <PostComponents key={post.id} userId={post.userId} id={post.id} title={post.title}/>
                        )
                    }
                </div>
             </div>

            <div className={'comments'}>
                {
                    comments.map(comment => <CommentsComponenets key={comment.id} commentId={comment.comment} id={comment.id}
                    name={comment.name} email={comment.email}
                        />
                    )
                }


            </div>


        </div>
    );
}

export default App;
