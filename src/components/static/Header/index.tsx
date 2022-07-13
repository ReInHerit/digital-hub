import React from "react"
import { Container } from "react-bootstrap"

const Header: React.FC = () => {
  return (
    <div className="bg-white pt-3 mt-4 text-center">
      <div>
        <img
          className="pb-0 mb-0"
          style={{ maxWidth: "15vw", minHeight: "18vh" }}
          src="/images/thumbnails/make_it_your_own.JPG"
        ></img>
        <h2 style={{ marginTop: "-2vh", color: "grey" }} className="h4 pb-4">
        ReInHerit Digital Hub
        </h2>
      </div>
    </div>
  )
}

export default Header
