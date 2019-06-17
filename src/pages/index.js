import React, { Component } from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby';
import styled from 'styled-components'
import { default as Image } from "gatsby-image"

class HomePage extends Component {
    render() {
        // Using optional chaining, if any of these properties are undefined then it will return undefined instead of giving an error
        let image = this.props?.data?.wordpressPage?.acf?.image?.localFile?.childImageSharp?.fixed;

        // Create a styled title tag
        const Title = styled.h1`
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
        `;

        // Create a styled subtitle tag
        const Subtitle = styled.h1`
          font-size: 16px;
          margin-bottom: 20px;
        `;

        // Create a styled container tag
        const PaddedContainer = styled.div`
            padding: 50px 0px;
            max-width: 1000px;
            margin: 0px auto;
        `;

        // Render the page with some text and image being pulled from advanced custom fields using the graphQL query at the bottom of the file
        return (
            <Layout>
                <PaddedContainer>
                    <Title> Title: {this.props.data?.wordpressPage?.acf?.site_title } </Title>
                    <Subtitle> {this.props.data?.wordpressPage?.acf?.site_subtitle } </Subtitle>
                    {image && 
                      <Image fixed={image} />
                    }
                </PaddedContainer>
            </Layout>
        );
    }
}

// This query is responsible for pulling data about a page using the pageID that wordpress assigns it
export const query = graphql`
query currentPageQuery {
  wordpressPage(wordpress_id: {eq: 7}) {
    title
    content
    slug
    date(formatString: "MMMM DD, YYYY")
    acf {
      site_title
      image {
        localFile {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        source_url
      }
      site_subtitle
    }
  }
}`;

export default HomePage;