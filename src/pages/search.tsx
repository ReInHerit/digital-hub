import React from "react"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"
import { useFlexSearch } from "react-use-flexsearch"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FormControl, InputGroup } from "react-bootstrap"

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("how")

  const GRAPHQL_RESPONSE: SearchGraphqlResponse.Data = useStaticQuery(
    SEARCH_QUERY
  )

  const result: SearchGraphqlResponse.SearchResult[] = useFlexSearch(
    searchQuery,
    GRAPHQL_RESPONSE.localSearchPages.index,
    GRAPHQL_RESPONSE.localSearchPages.store
  )

  /**
   * Builds url for given collection item ased on type of item controlled by the CMS.
   * @param collectionItem 
   */
  const buildCMSItemUrl = (collectionItem: SearchGraphqlResponse.SearchResult) => {

    switch(collectionItem.type){
      case "faq":
        return `/doc/${collectionItem.type}/${collectionItem.pageId}`;
      case "howto":
        return `/doc/${collectionItem.type}/${collectionItem.pageId}`;
      case "toolcomponent":
        return `/tools/components/${collectionItem.pageId}`;
      case "toolapp":
        return `/tools/apps/${collectionItem.pageId}`;
      case "webinar":
        return `/webinars/${collectionItem.pageId}`;
      default:
        return `/${collectionItem.type}/${collectionItem.pageId}`;
    }
  }

  return (
    <BaseLayout>
      <MainHeading
        subHeading="Fulltext search across all content provided by the digital-hub."
      >Search</MainHeading>
      <p>Here you'll find a fulltext search across all collection items provided by the digital hub. Search values have to be exact matches and are based on exact occurences in the collection titles.</p>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
          value={searchQuery}
          onChange={(evt) => setSearchQuery(evt.currentTarget.value)}
        />
      </InputGroup>
      <p>Results found: {result.length}</p>
      <ul>
        {result.map(result => (
          <li>
            <Link to={buildCMSItemUrl(result)}>{result.title ? result.title : result.question}</Link>
            <p className="p-0 m-0"><small>{result.type}</small></p>
            <p>{result.excerpt}</p>
          </li>
        ))}
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
