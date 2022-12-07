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
