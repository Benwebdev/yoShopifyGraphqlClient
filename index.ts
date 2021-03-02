import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const httpLink = (uri, AccessToken) => {
    return createHttpLink({
        uri: uri,
        headers: {
            'X-Shopify-Storefront-Access-Token': AccessToken
        }
    });
}
export function yoShopifyGraphqlClient(uri, accessToken) {
    return new ApolloClient({
        link: httpLink(uri, accessToken),
        cache: new InMemoryCache()
    })
}
