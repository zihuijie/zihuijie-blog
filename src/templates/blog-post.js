import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import {
  Avatar,
  Card,
  CardTitle,
  CardSubTitle,
  CardContent,
  Wrapper,
} from '../components/Wrapper'
import Bio from '../components/Bio'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <section id="blog-post" className="main">
        <Wrapper>
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <Card>
            <CardTitle>
              <h1> {post.frontmatter.title}</h1>
            </CardTitle>
            <CardSubTitle>
              <h5> -- {post.frontmatter.date} --</h5>
            </CardSubTitle>
            <CardContent>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </CardContent>
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <Bio />
          </Card>
        </Wrapper>
      </section>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
