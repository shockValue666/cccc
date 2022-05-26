import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import React,{useState} from 'react'
import PhaseAccordeon from './PhaseAccordeon';

function PhaseModal2() {
    const [open,setOpen]=useState(false)
  return (
    <div>
        <Button sx={{color:"white" ,fontSize:"30px"}} onClick={()=>{setOpen(true)}}>
            p∫∫∫∫∫∫∫2
        </Button>
      <Dialog open={open} onClose={()=>{setOpen(false)}} maxWidth="100vw"> 
            {/* <DialogTitle>This is my cock</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    diallog content text
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{setOpen(false)}} sx={{fontSize:"13px"}} variant="contained" color="error">
                    x
                </Button>
            </DialogActions> */}
            <PhaseAccordeon/>
      </Dialog>
    </div>
  )
}

export default PhaseModal2
