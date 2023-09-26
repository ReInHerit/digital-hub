import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import SideMainLayout from "../../components/shared/Layout/SideMainLayout"
import NewsFeed from "../../components/shared/NewsFeed"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import {SSRProvider} from '@react-aria/ssr'

const NewsPage: React.FC = () => {
  return (
    <SSRProvider>
    <BaseLayout
    pageTitle="News | ReInHerit Digital Hub"
    >
      <MainHeading breadCrumb={[{label:"News", value:"/news"}]} subHeading="Keep up-to-date with all the ReInHerit activities and outputs!" subText="News, updates, events part of the ReInHerit project and our community.">
        News
      </MainHeading>
      <NewsFeed></NewsFeed>
    </BaseLayout>
    </SSRProvider>
  )
}

export default NewsPage
