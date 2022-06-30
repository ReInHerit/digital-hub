import React from "react"
import { Button } from "react-bootstrap"
import ReinCardGrid from "../../shared/ReinCardGrid";
import ReinCard from "../../shared/ReinCardGrid/ReinGridCard";

const ExhibitionCollection: React.FC = () => {
  return (
    <>
      <div className="mb-md-5">
        <Button variant="dark" className="m-1 ps-5 pe-5">
          Topic
        </Button>
        <Button variant="dark" className="m-1 ps-5 pe-5">
          Place
        </Button>
        <Button variant="dark" className="m-1 ps-5 pe-5">
          Period
        </Button>
      </div>
      <div className="bg-light p-3 rounded border">
        <p className="mb-md-5">
          The ReInHerit proposed model will be based on the development of a
          digital cultural heritage ecosystem, where all the key stakeholders
          (museums, heritage sites, policy makers, professionals and
          communities) will have an open and collaborative space to experiment,
          share and innovate. This will be achieved through the creation of an
          innovative Digital Hub. Tools and resources (on training, tourism,
          conservation, preservation, knowledge creation, content use reuse,
          illicit trafficking of goods) necessary for sustainable management
          will be shared through the digital platform that will host the
          ecosystem. This ecosystem will also be the experiential open-ended
          space that will support and generate entrepreneurial initiatives,
          knowledge produced through co-creation, curation of digital content
          and visitor experiences. The proposed work plan includes a variety of
          key activities that will enable the collaboration of museums and
          cultural heritage sites, real-time.
        </p>

        <ReinCardGrid></ReinCardGrid>
        
      </div>
    </>
  )
}

export default ExhibitionCollection
