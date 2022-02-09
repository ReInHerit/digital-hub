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
      <br />
      <SideMainLayout
        side={
          <div className="p-4 border reincard">
            <p>All news relevant for Reinherit ... </p>
            <p>Scroll down / click on card etc. ... </p>
          </div>
        }
      >
        <NewsFeed />
      </SideMainLayout>
    </BaseLayout>
  )
}

export default NewsPage
