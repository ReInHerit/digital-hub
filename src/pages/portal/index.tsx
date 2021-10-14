import React from "react";
import { useLocation } from '@reach/router';

const PortalPage = () => {

  // --> has to be solved via gatsby's graphql layer and not via reading out location?
  // see https://www.gatsbyjs.com/docs/adding-pagination/
  // see https://www.gatsbyjs.com/docs/adding-app-and-website-functionality/
  const loc = useLocation();

  const [modeVal, setModeVal] = React.useState(0);

  // gatsby wouldn't run useffect 
  React.useEffect(() => {
    setModeVal(handleLoc());
  }, []);

  const handleLoc = () => {
    if (typeof window === "undefined") return 1;
    
    let url = new URL(loc.href);
  
    console.log(url.searchParams.get("mode"));
    let modeVal = parseInt(url.searchParams.get("mode"));
    return modeVal;
  }

 

  return <p style={{color: modeVal < 100 ? "red" : "green"}}>Portal page</p>

  

}

export default PortalPage;