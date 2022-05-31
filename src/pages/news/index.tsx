import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import SideMainLayout from "../../components/shared/Layout/SideMainLayout"
import NewsFeed from "../../components/shared/NewsFeed"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const NewsPage: React.FC = () => {
  return (
    <BaseLayout>
      <MainHeading subHeading="All relevant news for the digital hub">
        News
      </MainHeading>
      <p>Here you'll find <b style={{color:"#2eacc8"}}>explicit news</b> messages provided by the ReInHerit team. This page is not meant as display of recent activity</p>
      <NewsFeed></NewsFeed>
    </BaseLayout>
  )
}

export default NewsPage
