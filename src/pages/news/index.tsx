import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import SideMainLayout from "../../components/shared/Layout/SideMainLayout"
import NewsFeed from "../../components/shared/NewsFeed"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const NewsPage: React.FC = () => {
  return (
    <BaseLayout>
      <MainHeading subHeading="General news about recent ReInHerit developments and event announcements">
        News
      </MainHeading>
      <p>Here you'll find <b style={{color:"#2eacc8"}}>explicit news</b> messages provided by the ReInHerit team, not necessarily related to actual content on the digital hub.</p>
      <NewsFeed></NewsFeed>
    </BaseLayout>
  )
}

export default NewsPage
