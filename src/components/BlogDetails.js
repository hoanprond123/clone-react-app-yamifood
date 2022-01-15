import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { useGlobalContext } from '../context'
import data from './dataBlog'
function BlogDetails() {
    const { articles } = useGlobalContext()
    const [posts, setPosts] = useState([data[0], data[1], data[2], data[3]])
    const { id, title, post, date, article, footer, image, name, time, context1, context2, context3, context4 } = articles
    return (
        <div className="blog-details">
            <div className="grid wide blog-details-header">
                <h1>Blog</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="grid wide blog-details-container">
                <div className="row no-gutters">
                    <div className="col l-8 m-8 c-12 blog-details-container-item">
                        <div className="blog-details-container-item-beside">
                            <div className="blog-details-container-image">
                                <img src={image} />
                                <span>{date}</span>
                            </div>
                            <div className="blog-details-container-article">
                                <h1>{title}</h1>
                                <ul>
                                    <li>Post By : <span>{name}</span></li>
                                    <li>|</li>
                                    <li>Time : <span>{time}</span></li>
                                </ul>
                                <p>{context1}</p>
                                <p>{context2}</p>
                                <blockquote>
                                    <p>{context3}</p>
                                </blockquote>
                                <p>{context4}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-4 c-12 blog-details-container-item">
                        <div className="blog-details-container-item-beside">
                            <h1>Search</h1>
                            <div className="blog-details-container-search">
                                <input type="text" placeholder="Search blog" />
                                <button>
                                    <FiSearch />
                                </button>
                            </div>
                            <h1>Category</h1>
                            <div className="blog-details-container-category">
                                <ul>
                                    <li>Food</li>
                                    <li>Pizza</li>
                                    <li>Drink</li>
                                    <li>Lorem Sit</li>
                                    <li>Burger</li>
                                    <li>Music</li>
                                </ul>
                            </div>
                            <h1>Recent Post</h1>
                            <div className="blog-details-container-posts">
                                {posts.map((item, index) => {
                                    const { imagePost, name, time, title } = item
                                    return (
                                        <div key={index} className="blog-details-container-posts-item">
                                            <img src={imagePost} />
                                            <div className="blog-details-container-posts-item-info">
                                                <ul>
                                                    <li>Post By : <span>{name}</span></li>
                                                    <li>|</li>
                                                    <li>Time : {time}</li>
                                                </ul>
                                                <p>{title}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <h1>Recent Tag</h1>
                            <div className="blog-details-container-tag">
                                <ul>
                                    <li>Food</li>
                                    <li>Drink</li>
                                    <li>Nature</li>
                                    <li>Italian</li>
                                    <li>Bootstrap</li>
                                    <li>Fashion</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
