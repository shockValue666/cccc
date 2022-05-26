import React from 'react'
import { Typography } from '@mui/material'
import Navbar from '../comps/Navbar'
import Header from '../comps/Header'
import Footer from '../comps/Footer'
import RoadMapExplained from '../comps/RoadMapExplained'
import BottomPic from '../comps/p1/BottomPic'  

function roadmapMain() {
  return (
      <div style={{background:"black",color:"white"}}>
      <Navbar/>
      <Header/>

      <Typography variant="h2" gutterBottom component="div" >
        roadmap
      </Typography>
      <Typography variant="h6" gutterBottom component="div" sx={{paddingBottom:"7%"}} >
        our roadmap explained (we need to find something more edgy for the description)
      </Typography>

      <RoadMapExplained/>

    <div>roadmapMain</div>
    <BottomPic/>
    <Footer/>
    </div>
  )
}

export default roadmapMain