import axios from 'axios';
import React, { useState } from 'react'
import useUser from '../hook/useUser';

const CommentForm = ({article, onArticleUpdated}) => {
    // const [name, setName ] = useState("");
    const [comment, setComment ] = useState("");
    const {user} = useUser();

    const addComment = async() =>{
        const token     = user && await user.getIdToken();
        const headers   = token ? {authToken : token} : {};
        const response = await axios.post(`http://localhost:8000/api/articles/${article}/comments`,{

            postedBy : user.email,
            text     : comment
        }, {headers});
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);
        setComment('');
    }
    return (
        <>
            <div id='add-comment-form'>
                <h3>Add a comment </h3>
                {/* <label>
                    Name : 
                    <input type='text' 
                            value={name} 
                            onChange={e => setName(e.target.value)}/>
                </label> */}
                {user && <p>You are posting as {user.email}</p>}
                <label>
                    <textarea rows="4" cols="15" 
                        onChange={e => setComment(e.target.value)} value={comment} />
                </label>
                <button onClick={addComment}>Add Comment</button>
            </div>
        </>
    )
}

export default CommentForm