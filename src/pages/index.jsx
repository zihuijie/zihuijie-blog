import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import glamorous from 'glamorous';

import { rhythm } from '../utils/typography';
import { colors } from '../utils/constants';

import PageHeader from '../components/Header';
import { Wrapper } from '../components/Wrapper';
import bg from '../components/Header/blog_bg.jpg';


const HeaderContainer= glamorous.div({
  height:'200px',
  backgroundImage:`url(${bg})`,
backgroundSize:'100% 100%',
backgroundRepeat:'no-repeat',
backgorundPosition:'center center',
backgroundBlendMode:'luminosity',
backgroundAttachment:'fixed',
borderBottom: '1px solid #ccc',
boxShadow: '0 1px 1px 0 rgba(0,0,0,.2)',
});


class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <section id="blog" className='main'>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
      <HeaderContainer>
        <PageHeader>{siteTitle}</PageHeader>
        </HeaderContainer>
      <Wrapper>
        <article className='site-content'>
        <div>
        {posts.map(post => {
          if (post.node.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.path
            return (
              <div key={post.node.frontmatter.path}>
                <h3
                  key={post.node.frontmatter.path}
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: 'none',
                    fontFamily: 'Raleway',
                    fontWeight:'bold',
                    color: `${colors.TOMATO_DARK}`}}
                    to={post.node.frontmatter.path}
                  >
                    {title}
                  </Link>
                </h3>
                <small>
                  {post.node.frontmatter.date} 
                </small>
                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              </div>
            )
          }
        })}
        </div>
        </article>
        </Wrapper>
      </section>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.element,
}

export default BlogIndex
/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`