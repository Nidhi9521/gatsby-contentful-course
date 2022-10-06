import React from "react";
import { Layout, RichText, Seo } from "components";
import { graphql } from "gatsby";
export default function ContentfulPage(props) {
  return (
    <Layout>
      <Seo
        title={props.data.contentfulPage.title}
        description={props.data.contentfulPage.description}
      />
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
    contentfulPage(id: { eq: $id }) {
      slug
      title
      description
      pageContent {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            gatsbyImageData(layout: FULL_WIDTH)
          }
          ... on ContentfulHero {
            __typename
            contentful_id
            heading
            subHeadig
            backgroundImage {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          ... on ContentfulPriceGroup {
            __typename
            contentful_id
            priceOption {
              id
              title
              amountPerMonth
              description {
                raw
              }
              mostPopular
            }
          }
        }
      }
    }
  }
`;
