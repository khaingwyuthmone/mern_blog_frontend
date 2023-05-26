import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import CommentForm from '../components/CommentForm';
import useUser from '../hook/useUser';

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({upvotes : 0, comments : [], canUpvote : false});
  const canUpvote = articleInfo.canUpvote;
  const {articleId}     = useParams();
  const article         = articles.find(article => article.name === articleId);
  const {user, isLoading} = useUser();

  useEffect(()=>{
    const fetch = async () =>{
      try{
        const token     = user && await user.getIdToken();
        const headers   = token ? {authToken : token} : {}
        const response  = await axios.get(`http://localhost:8000/api/articles/${articleId}`, {
          headers : headers
        });
        console.log("Response :", response);
        const article   = response.data;
        if(article){
          setArticleInfo(article);
        }
      }catch(err){
        console.log(err)
      }
      
    }
    if(!isLoading){
      fetch();
    }
   
    
}, [user, isLoading, articleId]);

  const addUpvote   = async() =>{
    const token     = user && await user.getIdToken();
    const headers   = token ? {authToken : token} : {}
    const response = await axios.put(`http://localhost:8000/api/articles/${articleId}/upvote`, null, {headers});
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  }


  
  return (
    <>
        {article ? 
            <>
                <h1>{article.title}</h1>
                <div id='upvotes-section'>
                  {user ? 
                    <button onClick={addUpvote}>{canUpvote ? 'Upvote' : 'Already upvoted'}</button> : 
                    <button>Log in to upvote</button>}
                  
                  <p>This article has {articleInfo.upvotes} upvotes.</p>
                </div>
                
                {article.content.map(paragraph => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </> : <NotFoundPage />}
          {user ? <CommentForm article={articleId} onArticleUpdated={setArticleInfo}/> : <button>Log in to comment</button>}
          <CommentsList comments={articleInfo.comments}/>
        
    </>
  )
}

export default ArticlePage