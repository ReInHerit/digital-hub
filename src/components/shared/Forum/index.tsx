import React from "react"

/**
 * Handles embedment / provision of links etc. of the digital hub forum
 * and chat functionalities.
 * @returns 
 */
const Forum: React.FC = () => {
  return (
    <div>
      <h2>ReInHerit Forum</h2>
      <p><a target="_blank" href="https://gitter.im/ReInHerit">All ReInHerit chat rooms</a></p>
      <h3>Public chat (currently under redevelopment)</h3>
      <embed
        style={{ height: 500, width: 750 }}
       // src="https://gitter.im/ReInHerit/community/~embed"
      ></embed>
    </div>
  )
}

export default Forum
