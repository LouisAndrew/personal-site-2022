export const projectDetailsQuery = `
  query ($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 100) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            resourcePath
            url
            homepageUrl
            defaultBranchRef {
              name
            }
            languages(first: 20) {
              edges {
                node {
                  name
                  color
                }
              }
            }
            collaborators {
              edges {
                node {
                  name
                  url
                  email
                  avatarUrl
                  login
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const searchProjectsQuery = `
  query {
    search(
      query: "Hidden stuff in:readme user:louisandrew"
      type: REPOSITORY
      first: 100
    ) {
      edges {
        node {
          ... on Repository {
            name
            url
          }
        }
      }
    }
  }
`;
