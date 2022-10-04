import React from "react";
import { Layout, RichText } from "components";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export default function ContentfulPage(props) {
  console.log(props.data.contentfulPage.title);
  return (
    <Layout>
      {!!props.data.contentfulPage.pageContent && (
        <RichText
          references={props.data.contentfulPage.pageContent.references}
          raw={props.data.contentfulPage.pageContent.raw}
        />
      )}
    </Layout>
  );
}

export const query = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }, homePage: {}) {
      slug
      title
      pageContent {
        raw
        references {
          ... on ContentfulHero {
            heading
            subHeadig
            backgroundImage {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;
