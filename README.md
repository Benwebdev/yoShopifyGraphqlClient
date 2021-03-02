# yoShopifyGraphqlClient

npm install @benline/yoShopifyGraphqlClient

Shopify Storefront Graphql Client Package

```typescript

const makeMeAShopifyClient = yoShopifyGraphqlClient("Your Shopify URL", "YOUR ACCESS TOKEN"); 

makeMeAShopifyClient.query({query: fetchProducts}).then(({data}) => {
    const products = data.shop.products.edges;
    // Do things
    // setState whatever
})

```

```typescript
const fetchProducts = gql`
  {
    shop {
      products(first: 250) {
        edges {
          node {
            availableForSale
            handle
            id
            productType
            title
            vendor
            images(first: 10) {
              edges {
                node {
                  altText
                  id
                  originalSrc
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  compareAtPrice
                  availableForSale
                  image {
                    id
                    altText
                    originalSrc
                  }
                  price
                  product {
                    id
                    handle
                  }
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;
```
