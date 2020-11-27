import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TableOfContents from '../components/TableOfContents';
import './blog-post.css';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <Layout>
      <SEO title={post.frontmatter.title + ' Book Summary'} description={post.excerpt} />
      <div>
        <h1 className="BlogPost__title"><i>{post.frontmatter.title}</i>{': Book Summary'}</h1>
        <span className="BlogPost__date">{post.frontmatter.date}</span>
        <div className="BlogPost__image-wrapper">
          <Img fluid={featuredImgFluid} alt={post.frontmatter.title + ' book cover'} />
        </div>
        <TableOfContents contentsHtml={post.tableOfContents} />
        <div className="BlogPost__content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      tableOfContents(absolute: false, maxDepth: 2)
      excerpt
    }
  }
`