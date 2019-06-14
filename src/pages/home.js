import React, { Component } from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby';
import styled from 'styled-components'

class HomePage extends Component {
    render() {
        const Image = styled.img`
            width: 100px;
            height: 100px;
        `;

        const Title = styled.h1`
            font-size: 20px;
            font-weight: bold;
        `;

        return (
            <Layout>
                <Title> Test String: {this.props.data?.wordpressPage?.acf?.test_string } </Title>
                <Image src={this.props.data?.wordpressPage?.acf?.image?.source_url }></Image>
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
            source_url
            }
        }
        }
    }
`;

export default HomePage;