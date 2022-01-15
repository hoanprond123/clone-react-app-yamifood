import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import data from './dataBlog'
import {useGlobalContext} from '../context'
function BlogArticle() { 
    const {setArticles} = useGlobalContext()

    const handleArticle = (item) => {
        setArticles(item)
    }

    return (
        <div className="blog">
            <div className="blog-header grid wide">
                <h1>Blog</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="grid wide blog-container">
                <div className="row no-gutters">
                    {data.map((item, i) => {
                        const { title, post, date, article, footer, image } = item
                        return (
                            <div key={i} className="col l-4 m-4 c-12 blog-container-item">
                                <div className="blog-container-item-beside">
                                    <div className="blog-container-img">
                                        <img src={image} />
                                    </div>
                                    <div className="blog-container-content">
                                        <h1>{title}</h1>
                                        <ul>
                                            <li>{post}</li>
                                            <li>|</li>
                                            <li>{date}</li>
                                        </ul>
                                        <p>{article}</p>
                                        <span>{footer}</span>
                                        <Link to="/blog-single" className="btn blog-container-content-btn" onClick={() => handleArticle(item)}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BlogArticle
