import React from 'react'
import Header from '../header/header.jsx';
import { Helmet } from 'react-helmet';
import Footer from '../footer/footer.jsx';

const Layout = ({children, title, desc}) => {
  return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={desc} />
        </Helmet>
        <Header />
          <main>{children}</main>
        <Footer />

    </div>
  )
}

Layout.defaultProps = {
    title: "Smart Press",
  };
  

export default Layout