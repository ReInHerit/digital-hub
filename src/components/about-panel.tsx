import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import Bar from "./bar"

const AboutPanel = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 500 }}>
      <Hidden xsDown>
        <Grid
          item={true}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ padding: 10 }}
        >
          <div style={{ width: "100%" }}>
            <Image
              alt="Virtual Healthcare for you"
              filename="about-illustration.png"
            />
          </div>
        </Grid>
      </Hidden>
      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 40, paddingRight: 40 }}
      >
        <Typography variant="h4" color="inherit">
          Leading in cultural heritage
        </Typography>
        <Bar />
        <Typography
          variant="subtitle1"
          style={{ marginBottom: 30, marginTop: 20 }}
        >
          Redefining the future of cultural heritage, through a disruptive model of sustainability ( ReInHerit)
        </Typography>
        <Button variant="outlined" color="primary" size="large">
          Learn More
        </Button>
      </Grid>
    </Grid>
  )
}
export default AboutPanel
