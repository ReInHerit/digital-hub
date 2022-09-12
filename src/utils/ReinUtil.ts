/**
 * Usual GraphQL data returned asking for all markdown entries in Reinherit.
 * Just focuses on given tags. 
 */
export interface TaggedGraphQLData {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          tags: string[]
        }
      }
    }[]
  }
}

/**
 * Collection or Reinherit specific utility methods.
 */
export const ReinUtils = (() => {
  /**
   * Returns true if SSR is in process, false if only client side processing is in progress.
   * @returns
   */
  const checkSSR = () => typeof window === "undefined"

  /**
   * Returns a list of unique tags from given graphql data result.
   * (needed for creating a list of actual used tags in given graphql results like in tool-component overview)
   * If no data is available will return an empty array.
   * @returns
   */
  const extractUniqueTags = (data: TaggedGraphQLData): string[] => {
    let allGivenTags: string[] = []
    data.allMarkdownRemark.edges.forEach(edge => {
      if (!edge.node.frontmatter.tags) return
      edge.node.frontmatter.tags.forEach(curTag => {
        allGivenTags.push(curTag)
      })
    })
    let uniqueTagsSet = new Set(allGivenTags)
    let uniqueTagsArray = Array.from(uniqueTagsSet)
    return uniqueTagsArray
  }

  return {
    checkSSR,
    extractUniqueTags,
  }
})()
