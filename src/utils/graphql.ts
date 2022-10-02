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

export const getUserRepositories = `
  query {
    search(query: "user:louisandrew", first: 100, type: REPOSITORY) {
      edges {
        node {
          ... on Repository {
            name
            description
            languages(first: 20) {
              edges {
                node {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getRepository = `
  query ($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      name
      description
      languages(first: 20) {
        edges {
          node {
            name
            color
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

export const getPinnedItems = `
  query {
    user(login: "louisandrew") {
      pinnedItems(first: 6, types: REPOSITORY) {
        ... on PinnableItemConnection {
          edges {
            node {
              ... on Repository {
                name
              }
            }
          }
        }
      }
    }
  }
`;
