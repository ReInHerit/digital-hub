

/**
 * Collection or Reinherit specific utility methods.
 */
export const ReinUtils = (() => {

  /**
   * Returns true if SSR is in process, false if only client side processing is in progress.
   * @returns 
   */
  const checkSSR = () => typeof window === "undefined";



  return {
    checkSSR
  }


})();