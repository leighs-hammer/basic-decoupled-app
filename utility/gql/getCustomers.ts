const GETCUSTOMERS = `query getCustomer(
  $count: Int
  $last: Int 
  $query: String = "",
  $after: String,
  $before: String
) {
  customers(first: $count, last: $last, query:$query, before: $before, after:$after) {
    edges {
      node {
        id,
        email,
        tags,
        ordersCount,
        totalSpent,
				displayName
        defaultAddress {
          country
          city
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

export default GETCUSTOMERS