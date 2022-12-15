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
    $categoryName: String
  ) {
    posts(
      first: $first
      after: $after
      where: {
        orderby: { field: $field, order: $order }
        categoryName: $categoryName
      }
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

export const CATEGORIES = gql`
  query GET_PAGINATED_POSTS {
    categories {
      nodes {
        id
        name
        slug
      }
    }
  }
`

export const GET_PAGE = gql`
  query GET_PAGE($id: ID!) {
    page(id: $id, idType: URI) {
      extrait
      content
      parcours
      collecte
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
`

export const GET_MENU = gql`
  query GET_MENU {
    menus(where: { slug: "menu-principal" }) {
      nodes {
        id
        databaseId
        name
        menuItems {
          edges {
            node {
              id
              label
              path
            }
          }
        }
      }
    }
  }
`

export const SEND_MAIL = gql`
  mutation SEND_EMAIL($replyTo: String, $subject: String, $body: String) {
    sendEmail(
      input: {
        to: "paidge_cs@hotmail.com"
        replyTo: $replyTo
        from: "noreply@havredevers.fr"
        subject: $subject
        body: $body
        clientMutationId: "test"
      }
    ) {
      origin
      sent
      message
    }
  }
`
