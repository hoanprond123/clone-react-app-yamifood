import React from 'react'
import Header from '../components/Header'
import HomeContact from '../components/HomeContact'
import BlogArticle from '../components/BlogArticle'
import HomeFooter from '../components/HomeFooter'
function Blog() {
    const heading = "Blog"
    return (
        <>
            <Header heading={heading} />
            <BlogArticle />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default Blog
