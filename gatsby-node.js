const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const {
    data: { contentfulBlog, allContentfulBlogPost },
  } = await graphql(`
    {
      contentfulBlog {
        postPerPage
        slug
      }
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
            publishedDate(formatString: "DD/MM/YYYY")
            pageContent {
              raw
            }
            description
            title
            contentful_id
          }
        }
      }
    }
  `);
  allContentfulBlogPost.edges.forEach((e) => {
    createPage({
      path: `${contentfulBlog.slug}/${e.node.slug}`,
      context: { postId: e.node.contentful_id },
      component: path.resolve("./src/templates/BlogPost/index.js"),
    });
  });
  const numPages = Math.ceil(
    allContentfulBlogPost.edges.length / contentfulBlog.postPerPage
  );
  for (let i = 0; i < numPages.toString(); i++) {
    createPage({
      path: `${contentfulBlog.slug}${i === 0 ? "" : `/${i + 1}`}`,
      component: path.resolve("./src/templates/PageBlogPage/index.js"),
      context: {
        blogSlug: contentfulBlog.slug,
        totalPages: numPages,
        currentPage: i + 1,
        posts: allContentfulBlogPost.edges
          .map((blogPost) => blogPost.node)
          .slice(
            i * contentfulBlog.postPerPage,
            i * contentfulBlog.postPerPage + contentfulBlog.postPerPage
          ),
      },
    });
  }
};
