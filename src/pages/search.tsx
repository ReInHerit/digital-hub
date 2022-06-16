import React from "react"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"
import { useFlexSearch } from "react-use-flexsearch"
import { graphql, useStaticQuery } from "gatsby"

const SearchPage: React.FC = () => {
  const GRAPHQL_RESPONSE: SearchGraphqlResponse.Data = useStaticQuery(
    SEARCH_QUERY
  )

  const result: SearchGraphqlResponse.SearchResult[] = useFlexSearch("how", GRAPHQL_RESPONSE.localSearchPages.index, GRAPHQL_RESPONSE.localSearchPages.store);

  return (
    <BaseLayout>
      <MainHeading>Search</MainHeading>
      <ul>
        {result.map(result => <li>{result.title}</li>)}
      </ul>
    </BaseLayout>
  )
}

export default SearchPage

const SEARCH_QUERY = graphql`
  query SEARCH_QUERY {
    localSearchPages {
      index
      store
    }
  }
`

declare module SearchGraphqlResponse {

  export interface SearchResult {
      pageId: string
      type: string
      title: string
  }

  export interface Store {
    [property: string]: SearchResult
  }

  export interface LocalSearchPages {
    index: string
    store: Store
  }

  export interface Data {
    localSearchPages: LocalSearchPages
  }

  export interface Extensions {}

  export interface RootObject {
    data: Data
    extensions: Extensions
  }
}
