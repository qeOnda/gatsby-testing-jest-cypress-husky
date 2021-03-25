import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default function IndexPage({ data }) {
  return ( 
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>    
      <ul>
        {data.allStrapiArticle.edges.map(document => (
          <li key={document.node.id}>
            <h2>
              <Link to={`/${document.node.id}`}>{document.node.title}</Link>
            </h2>
            <p>{document.node.preview}</p>
          </li>
        ))}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}




export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          preview
        }
      }
    }
  }
`