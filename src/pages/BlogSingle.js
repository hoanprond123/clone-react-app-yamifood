import React from 'react'
import Header from '../components/Header'
import HomeContact from '../components/HomeContact'
import HomeFooter from '../components/HomeFooter'
import BlogDetails from '../components/BlogDetails'
import Navbar from '../components/Navbar'

function BlogSingle({handleArticle}) {
    const heading = 'Blog'
    return (
        <>
            <Navbar />
            <Header heading={heading} />
            <BlogDetails handleArticle={handleArticle} />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default BlogSingle
