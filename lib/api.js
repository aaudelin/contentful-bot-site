const POST_GRAPHQL_FIELDS = `
    startImage {
        url
    }
    endImage {
        url
    }
    startTool
    endTool
    name
    description
    sys {
        id
    }
`

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

export async function getActions() {
  const fetchResponse = await fetchGraphQL(
    `query {
      actionCollection {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    false
  )
  return fetchResponse?.data?.actionCollection?.items
}
