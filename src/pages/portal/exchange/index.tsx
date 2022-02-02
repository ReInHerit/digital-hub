import React from "react"
import SideBarsLayout from "../../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../../components/static/BaseLayout"

const ExchangePage = () => {
  return (
    <BaseLayout>
      <h1>Exchange Page</h1>
      <p>How to communicate using the digital-hub</p>
      <SideBarsLayout
        left={<>
          <h2 className="h5">Links</h2>
        <ul>
          <li>
            <a href="https://github.com/ReInHerit/digital-exchange/issues" target="_blank">Forum / Issues</a>
          </li>
          <li>
            <a href="https://gitter.im/ReInHerit/community" target="_blank">Public main chat room</a>
          </li>
          <li>
            <a href="https://gitter.im/ReInHerit" target="_blank">Chatroom overview</a>
          </li>
        </ul></>}
      >
        <h2 className="h5">Exchange</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </SideBarsLayout>
    </BaseLayout>
  )
}

export default ExchangePage
