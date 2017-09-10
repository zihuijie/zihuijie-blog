import React from 'react'
import Link from 'gatsby-link'

const Page404 = () => (
  <div>
    <h1>Page is not found</h1>
    <p>
      {' '}
      Please go back to
      <Link to="/"> Main</Link>
    </p>
  </div>
)
export default Page404
