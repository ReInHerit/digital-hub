import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import Typed from "react-typed"
import { Container } from "@material-ui/core"


const roles = ["on the development of a digital cultural heritage ecosystem, offering an open and collaborative space to experiment, share and innovate. ", "EU", "Team Player", "React JS", "Angular"];
const Hero = () => {
  return (
    <>
    <Grid container spacing={3} style={{ minHeight: 500 }}>
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
        <Typography variant="h4" color="inherit" style={{ marginBottom: 20 }}>
          HORIZON 2020 ReInHerit
        </Typography>

        <Typography variant="subtitle1" style={{ marginBottom: 30 }}>
          Redefining the future of cultural heritage, through a disruptive model of sustainability
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Research Today
        </Button>
      </Grid>
      
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
            <Image alt="Virtual Healthcare for you" filename="rein_logo.jpg" style={{maxWidth: "50%"}}/>
            <Image alt="Virtual Healthcare for you" filename="rein_eu.png" style={{maxWidth: "50%"}}/>
          </div>
        </Grid>
      </Hidden>
    </Grid>
    <Container style={{minHeight:"30vh"}}>
      <Typed
        loop
        typeSpeed={10}
        backSpeed={20}
        strings={roles}
        backDelay={1000}
        loopCount={0}
        showCursor={true}
        className="self-typed"
        cursorChar="|"
        style={{fontSize:"30px", fontWeight:600}}
    ></Typed>
    </Container>
    
  <br></br>
  <br></br>
  <br></br>
  </>
  )
}
export default Hero
