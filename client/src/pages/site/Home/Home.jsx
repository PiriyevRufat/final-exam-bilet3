import React from 'react'
import Carousel from '../../../components/site/Carousel/Carousel'
import About from '../../../components/site/About/About'
import Crud from '../../../components/site/Crud/Crud'
import Guest from '../../../components/site/Guest/Guest'
import Blog from '../../../components/site/Blog/Blog'
import {Helmet} from "react-helmet";
const Home = () => {
  return (
    <React.Fragment>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Carousel/>
        <About/>
        <Crud/>
        <Guest/>
        <Blog/>
    </React.Fragment>
  )
}

export default Home