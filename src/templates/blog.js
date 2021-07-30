import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout'

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    return (
      <Layout>
        <div>
          <div>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
      }
      fields {
        slug
      }
    }
  }
`;
