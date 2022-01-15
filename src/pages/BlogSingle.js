import React from 'react'
import Header from '../components/Header'
import HomeContact from '../components/HomeContact'
import HomeFooter from '../components/HomeFooter'
import BlogDetails from '../components/BlogDetails'
function BlogSingle({handleArticle}) {
    const heading = 'Blog'
    return (
        <>
            <Header heading={heading} />
            <BlogDetails handleArticle={handleArticle} />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default BlogSingle
