import React from "react"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"
import { useFlexSearch } from "react-use-flexsearch"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Container, FormControl, InputGroup } from "react-bootstrap"


const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("")

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
    <BaseLayout
      pageTitle="Search | ReInHerit Digital Hub"
    >
      <MainHeading
        subText="Fulltext search across the digital hub."
        subHeading="Search values have to be exact matches and are based on exact occurences."
        breadCrumb={[
          {label:"Search", value:"/search"}
        ]}
      >Search</MainHeading>
      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
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
      <ul style={{listStyle:"none"}} className="p-0">
        {result.map(result => (
          <li>
            <h4 className="h6 p-0 m-0"><Link to={buildCMSItemUrl(result)}>{result.title ? result.title : result.question}</Link></h4>
            <p className="p-0 m-0"><small>{result.type}</small></p>
            <p>{result.excerpt}</p>
          </li>
        ))}
      </ul>
      </Container>
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