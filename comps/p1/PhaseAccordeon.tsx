import { Box,Grid,Typography } from '@mui/material'
import React from 'react'

function PhaseAccordeon() {
  return (
    <Grid container spacing={5} height="90vh" width="90vw">
        <Grid sx={{border:"2px solid black",background:"#826882"}}  item xs={6}>
                <Box padding="15%">
                    <Typography variant="h3" marginBottom="20%">
                        p ∫∫∫∫∫ 1
                    </Typography>
                    <Typography variant="h5" marginBottom="20%">
                        someshit about the first phase which is going to be 
                    </Typography>
                    <Typography variant="body1">
                        some other shit about the first phase
                    </Typography>
                </Box>
        </Grid>
        <Grid sx={{border:"2px solid black"}}  item xs={6}>
                mikri
        </Grid> 
    </Grid>
  )
}

export default PhaseAccordeon