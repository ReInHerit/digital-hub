import { Link } from "gatsby";
import React from "react";
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout";
import BaseLayout from "../../components/static/BaseLayout";
import DocNav from "../../components/static/DocNav";

const Requirements = () => {

  return <BaseLayout>
    <SideBarsLayout
      left={<DocNav/>}
      right={
      <ul className="sticky-top">
        <li>
          <Link to="#use_case">Use case diagram</Link>
        </li>
        <li>
          <Link to="#desc">Description</Link>
        </li>
      </ul>
      }
    >
      <h1>Requirement Analysis</h1>
      <p>Praesent vel aliquet justo, sagittis egestas nunc.</p>
      <br/>
      <h2 id="use_case" className="h3">UML Use case diagram</h2>
      <p>uat tortor. Curabitur ornare ligula in ante accumsan, nec venenatis est luctus. Praesent vel aliquet justo, sagittis egestas nunc. Aliquam vitae felis blandit ex tempus facilisis. Nam imperdiet, lorem condimentum facilisis efficitur, felis justo commodo lorem, commodo tincidunt nisl felis nec quam.</p>
      <p>uat tortor. Curabitur dnt vel aliquet justo, sagittis egestas nunc. Aliquam vitae felis blandit ex tempus facilisis. Nam imperdiet, lorem condimentum facilisis efficitur, felis justo commodo lorem, commodo tincidunt nisl felis nec quam.</p>
      <br />
      <a href="/images/diagrams/use_case.JPG" target="_blank"><img src="/images/diagrams/use_case.JPG" alt="UML use case diagram" style={{maxWidth: "100%"}}></img></a>
      <p>uat tortor. Curabitur dnt vel aliquet justo, sagittis egestas nunc. Aliquam vitae felis blandit ex tempus facilisis. Nam imperdiet, lorem condimentum facilisis efficitur, felis justo commodo lorem, commodo tincidunt nisl felis nec quam.</p>
      <br />
      <h2 id="desc" className="h3">Detailed description of the use-cases</h2>
      <p>uat tortor. Curabitur dnt vel aliquet justo, sagittis egestas nunc. Aliquam vitae felis blandit ex tempus facilisis. Nam imperdiet, lorem condimentum facilisis efficitur, felis justo commodo lorem, commodo tincidunt nisl felis nec quam.</p>
      <p>Proin in commodo neque. Curabitur feugiat, tellus nec porttitor rutrum, mi est iaculis tellus, porttitor tempor nunc nisi id diam. Etiam nec lorem dignissim, dictum quam non, suscipit libero. Vestibulum mauris sapien, semper in massa eu, interdum scelerisque magna. Pellentesque condimentum nisl sapien, quis scelerisque lorem euismod non. Aenean vulputate nisl orci, sit amet interdum nunc eleifend ut.</p>
      <br />
      <h2 id="business" className="h3">Derived business logic</h2>
      <p>Nec venenatis est luctus. Praesent vel aliquet justo, sagittis egestas nunc. Aliquam vitae felis blandit ex tempus facilisis. Nam imperdiet, lorem condimentum facilisis efficitur, felis justo commodo lorem, commodo tincidunt nisl felis nec quam.</p>
    </SideBarsLayout>
  </BaseLayout>

}

export default Requirements;