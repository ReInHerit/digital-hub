import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import SideMainLayout from "../../components/shared/Layout/SideMainLayout"
import NewsFeed from "../../components/shared/NewsFeed"
import BaseLayout from "../../components/static/BaseLayout"

const NewsPage: React.FC = () => {
  return (
    <BaseLayout>
      <h1>News</h1>
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
