import React from "react";
import { graphql } from "gatsby";
import { Layout, RichText, Seo } from "components";

const BlogPost = (props) => {
  console.log("blogpost page");
  console.log(props);
  return (
    <Layout>
      <Seo
        title={props.data.contentfulBlogPost.title}
        description={props.data.contentfulBlogPost.description}
      />
      <RichText raw={props.data.contentfulBlogPost.pageContent.raw} />
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery {
    contentfulBlogPost {
      publishedDate(formatString: "DD MMM YYYY")
      pageContent {
        raw
      }
      description
      title
      contentful_id
      slug
    }
  }
`;

export default BlogPost;
