import React from "react"

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css"
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core"
import { useReinTheme } from "../../../hooks/contexts/useReinTheme"
import GitterSiderCar from "../../shared/GitterSideCar"
config.autoAddCss = false /* eslint-disable import/first */

interface Props {
  children: JSX.Element | JSX.Element[]
}

/**
 * Handles base setup of PageComponents fr the Reinherit project via Gatsby.
 */
const Base: React.FC<Props> = props => {
  const { ReinheritThemeProvider } = useReinTheme()
  return (
    <ReinheritThemeProvider>
      {/* <GitterSiderCar></GitterSiderCar> */}
      {props.children}
    </ReinheritThemeProvider>
  )
}

export default Base
