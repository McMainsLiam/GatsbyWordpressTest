import React, { Component } from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby';
import styled from 'styled-components'
import { default as Image } from "gatsby-image"

class HomePage extends Component {
    render() {
        let image = this.props?.data?.wordpressPage?.acf?.image?.localFile?.childImageSharp?.fixed;

        const Title = styled.h1`
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
        `;

        const PaddedContainer = styled.div`
            padding: 50px 0px;
            max-width: 1000px;
            margin: 0px auto;
        `;

        return (
            <Layout>
                <PaddedContainer>
                    <Title> Test String: {this.props.data?.wordpressPage?.acf?.test_string } </Title>
                    <Image fixed={image} />
                </PaddedContainer>
            </Layout>
        );
    }
}

export const query = graphql`
query currentPageQuery {
    wordpressPage(wordpress_id: {eq: 7}) {
      title
      content
      slug
      date(formatString: "MMMM DD, YYYY")
      acf {
        test_string
        image {
          localFile {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }  
`;

export default HomePage;