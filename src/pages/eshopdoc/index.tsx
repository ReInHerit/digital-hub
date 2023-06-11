import React from "react"
import { Container } from "react-bootstrap"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const eShopDoc = () => {
  return (
    <BaseLayout
    pageTitle="eShop Documentation | ReInHerit Digital Hub"
    >
      <MainHeading subHeading="Documentation about the ReInHerit eShop"
        breadCrumb={[
          {label:"Resources", value:"/resources"},
          {label:"eShop Documentation", value:"/eshopdoc"}
        ]}        
      >eShop Documentation</MainHeading>

      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
     
<h2>The ReInHerit eShop</h2>
<p>The ReInHerit eShop and its process will foster: a) collaboration among CH professionals, b) the communication between museums and their audiences, c) the creation of new cultural and artistic content. This will also reassert the sector’s relevance in contemporary European societies. Through this online shop the collections of the partners museums involved will be known to the public and will be accessible in different forms.</p>
<p>The three partner museums of the ReInHerit consortium – the Cycladic Museum, the Graz Museum and the Bank of Cyprus Cultural Foundation have proposed a few of the artefacts from their collections to serve as the inspiration for the ReInHerit’s E-shop products. The aim is to create a sustainably managed E-shop where needed services for the CH are provided. Taking this into account, printable digital items were created.</p>
<p>Through this shop users, especially young audiences, are invited to read the instructions that are given for each product, download and print them in 2D or 3D. They will then experiment with the products depending on their use or play with them, as most of them are games for young generations.</p>
<p>The ReInHerit E-shop process could constitute a guide on how to develop an e-shop. This could enable other small and mid-sized museums to understand and develop their own e-shop responding, thus, to social imperatives combined with financial pressure such as growth of companies and raise of entrepreneurial initiatives. The chart below documents briefly the development of the ReInHerit E-shop including the ‘how to’ process.</p>

<img alt="eShop graphical representation of the process" src="/images/eShopDoc.png" height={"auto"} width={"65%"}></img>

<h4>Establishment of the E-shop as a destination to purchase personal and corporate gifts based on:</h4>
<ul>
<li>Multiple and multi-layered options in value and type</li>
<li>Aesthetic "marriage" of the cultural element with merchandise for an attractive result.</li>
</ul>

<h4>Important factors to consider:</h4>
<b>BRANDING</b>
<ul>
<li>To give a name to the e-shop</li>
<li>To create a logo design in conjunction with the logo of the Museum</li>
<li>To project the gifts with in pop-up stores that will work during the events with high traffic in museums</li>
<li>Promotion of the objects through photos and videos</li>
<li>Change the wrapping of the products</li>
</ul>

<b>MERCHANDISE</b>
<ul>
<li>Promotion of the museum’s collections</li>
<li>Price range</li>
<li>Call for interest with 'Limited edition' collaborations</li>
<li>Quality & imagination in the craftsmanship</li>
<li>Flexibility in shipping</li>
<li>Continuous upgrade of the range</li>
<li>Qualitative research on the species aiming at the right choice</li>
</ul>

<b>PROMOTION</b><br />
Communication objectives:
<ul>
<li>Create awareness for the E-shop</li>
<li>Connecting the store and the products with different 	concepts</li>
<li>Attracting visitors to the website and selling items</li>
</ul>
    
        </Container>
    </BaseLayout>
  )
}

export default eShopDoc
