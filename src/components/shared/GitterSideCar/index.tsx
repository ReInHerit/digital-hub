import React from "react"


/**
 * Component adds gitter functionality to the page via embedment.
 * - based on: https://sidecar.gitter.im/
 * - places an iframe of gitter on the page
 * @returns 
 */
const GitterSiderCar: React.FC = () => {
    
  return (
    <>
      {/* <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          ((window.gitter = {}).chat = {}).options = {
            room: '${props.room ? props.room : 'Testcommunit/community'}'
            showChatByDefault: ${props.showChatByDefault ? props.showChatByDefault : 'false'},
            activationElement: '${props.activationElemClass ? props.activationElemClass : '.gitter-open-chat-button'}',
          };
        `,
        }}
      />
      <script
        src={props.scriptLoc ? props.scriptLoc : 'https://sidecar.gitter.im/dist/sidecar.v1.js'}
        async
        defer
      ></script> */}
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          ((window.gitter = {}).chat = {}).options = {
            room: 'ReInHerit/community'
          };
        `}} />
    <script src="https://sidecar.gitter.im/dist/sidecar.v1.js" async defer></script>
    </>
  )
}

export default GitterSiderCar
