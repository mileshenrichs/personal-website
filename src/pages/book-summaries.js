import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BookSummaryThumbnailLink from '../components/BookSummaryThumbnailLink';
import './book-summaries.css';

const BookSummariesPage = ({ data: { allMarkdownRemark: { edges } } }) => {
    const posts = edges.map(edge => <BookSummaryThumbnailLink 
        key={edge.node.id} 
        bookTitle={edge.node.frontmatter.title} 
        imgFixed={edge.node.frontmatter.featuredImage.childImageSharp.fixed}
        slug={edge.node.fields.slug} />
    );

    return (
        <Layout includeFooter={false}>
            <SEO title="Book Summaries" description="Miles Henrichs' book summaries." />
            <h2 className="BookSummaries__heading">Book Summaries</h2>
            <div>{posts}</div>
        </Layout>
    );
};

export default BookSummariesPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
                childImageSharp {
                  fixed(width: 200, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
          }
        }
      }
    }
  }
`