import { gql } from 'graphql-tag'

export const PRESTAS = gql`
  query Prestations {
    prestations {
      nodes {
        date
        title
        modifiedGmt
        miniature {
          altText
          mediaItemUrl
        }
        description
        prix
        principe
        programme
        equipement
        lieux
        slug
      }
    }
  }
`

export const MEMBRES = gql`
  query Membres {
    membres {
      nodes {
        databaseId
        title
        roles
        ordre
        photo {
          altText
          mediaItemUrl
        }
      }
    }
  }
`

export const PAGINATED_POSTS = gql`
  query GET_PAGINATED_POSTS(
    $first: Int
    $after: String
    $field: PostObjectsConnectionOrderbyEnum = MODIFIED
    $order: OrderEnum = DESC
  ) {
    posts(
      first: $first
      after: $after
      where: { orderby: { field: $field, order: $order } }
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          title
          excerpt
          slug
          modifiedGmt
          featuredImage {
            node {
              altText
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`

export const SINGLE_POST = gql`
  query SINGLE_POST($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      excerpt
      content
      modifiedGmt
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
      author {
        node {
          name
        }
      }
    }
  }
`
