const GETORDERS = `query getOrders(
  $count: Int
  $last: Int 
  $query: String = "",
  $after: String,
  $before: String,
  $sortKey: OrderSortKeys,
  $reverse: Boolean
) {
  orders(first: $count, last: $last, query:$query, before: $before, after:$after, sortKey: $sortKey, reverse: $reverse) {
    edges {
      node {
        createdAt
        id
        name
        currencyCode
        tags
        customer {
          displayName
        }
        totalPriceSet {
          shopMoney {
            amount
            currencyCode
          }
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage,
      hasPreviousPage
    }
  }
}`

export default GETORDERS