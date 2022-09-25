export const projectDetailsQuery = `
  query ($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      name
      resourcePath
      url
      homepageUrl
      createdAt
      updatedAt
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
`;

// export const getUserRepositories = gql`
//   query {

//   }
// `

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
