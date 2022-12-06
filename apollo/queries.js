import { gql } from 'graphql-tag'

export const PRESTAS = gql`
  query Prestations {
    prestations {
      edges {
        node {
          date
          title
          modifiedGmt
          miniature {
            altText
            mediaItemUrl
            title
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
  }
`
