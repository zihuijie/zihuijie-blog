import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

import { routes } from './SiteRoutes'
import config from '../../data/SiteConfig'
import SiteNavi from '../components/SiteNavi'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => (
  <div className="wrapper">
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    <SiteNavi routes={routes} />
    {children()}
    <Footer />
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.func,
}

export default MainLayout
