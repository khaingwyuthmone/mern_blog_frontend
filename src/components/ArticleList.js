import React from 'react'
import { Link } from 'react-router-dom'

const ArticleList = ({articles}) => {
  return (
    <>
        {articles.map(article => (
            <div className='article-list-item' key={article.name}>
                <Link to={article.name}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0,150)}</p>
                </Link>
            </div>
        ))}
    </>
  )
}

export default ArticleList