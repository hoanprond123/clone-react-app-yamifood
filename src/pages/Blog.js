import React from 'react'
import Header from '../components/Header'
import HomeContact from '../components/HomeContact'
import BlogArticle from '../components/BlogArticle'
import HomeFooter from '../components/HomeFooter'
import Navbar from '../components/Navbar'

function Blog() {
    const heading = "Blog"
    return (
        <>
            <Navbar />
            <Header heading={heading} />
            <BlogArticle />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default Blog
