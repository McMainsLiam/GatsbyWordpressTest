import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import '../resources/styles/all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    {/* Helmet is used for SEO, adds meta tags to your website and is configurable and dynamic */}
    <Helmet title="Home | Gatsby + WordPress" />

    {/* Add the navbar to the top of the page and then render the child content */}
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
