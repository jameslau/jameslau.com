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
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;



// import React from 'react'
// import { graphql } from 'gatsby'

// import Layout from '../components/layout'

// export default function PostTemplate({ data, pageContext }) {
//   const { slug } = pageContext;
//   const postNode = data.markdownRemark;
//   const post = postNode.frontmatter;
//   if (!post.id) {
//     post.id = slug;
//   }

//   return (
//     <Layout>
//       <h1>{data.markdownRemark.frontmatter.title}</h1>
//       <p>{data.markdownRemark.frontmatter.date}</p>

//       <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
//     </Layout>
//   );
// }

// /* eslint no-undef: "off" */
// export const pageQuery = graphql`
//   query ProjectPostBySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//       fields {
//         slug
//       }
//     }
//   }
// `;