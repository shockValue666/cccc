// import {useState} from "react";
// import {Typography,Button,TextField,AppBar,Toolbar,Menu,MenuItem,Tabs,Tab,Card,CardContent,CardActions,Box,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Modal,Link,Container,List,ListItem,ListItemButton,ListItemText,ListItemIcon} from "@mui/material"
// import Navbar from "../comps/Navbar";
// import Header from "../comps/Header";
// import MainPage from "../comps/MainPage";
// import CardDefinition from "../comps/CardDefinition"
// import RoadMap from "../comps/RoadMap";
// import Footer from "../comps/Footer";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );




// const social = ({}) => {
//     const [subs,setSubs] = useState(0)
//     const [inputs,setInputs] = useState({
//         name:"",
//         email:"",
//         password:"",
//         test:""
//     })

//     const [anchorElement,setAnchorElement] = useState(null);
//     const [open,setOpen] = useState(false) 
//     const handleClose = () => {
//         setAnchorElement(null)
//         setOpen(false);
//     }
//     const handleMenuClick = (e) => {
//         setAnchorElement(e.currentTarget);
//         setOpen(true)
//     }

//     const handleChange = (e) => {
//         setInputs((prevState)=>({
//             ...prevState,
//             [e.target.name] : e.target.value
//         }))
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(inputs)
//     }


//     const [tabValue,setTabValue] = useState();
//     const handleTabChange = () => {

//     }

//     const [openModal,setOpenModal] = useState(false)

//     const [openOtherModal,setOtherOpenModal] = useState(false)
//     const handleModalOpen = () => {
//         setOtherOpenModal(true)
//     }
//     const handleModalClose = () => {
//         setOtherOpenModal(false)
//     }

//         return (<div style={{background:"black", color:"white"}}>
//             <Navbar/>
//             <Header/>
//             <Typography variant="h5" fontSize="20px" align="center" sx={{color:"red",border:"2px solid green"}}>
//                 social + subs: {subs}
//             </Typography>
//             <Button variant="contained" size="large" sx={{margin:3}} color="error" onClick={(e)=>{console.log(e)}}>
//                 First
//             </Button>
//             <Button variant="outlined" size="medium" sx={{margin:3}} color="success">
//                 Second
//             </Button>
//             <Button variant="text" size="small" sx={{margin:3}} color="info">
//                 Third
//             </Button>
//             <form onSubmit={handleSubmit}>
//                 <TextField name="name" sx={{margin:3}} type={`text`} placeholder="Name" variant="outlined" value={inputs.name} onChange={handleChange}/>
//                 <TextField name="email" sx={{margin:3}} type={`email`} placeholder="Email" variant="standard" onChange={handleChange} />
//                 <TextField name="password" sx={{margin:3}} type={`password`} placeholder="Password" variant="filled"  onChange={handleChange}/>
//                 <TextField name="test" sx={{margin:3}} type={`text`} placeholder="test" variant="filled" onChange={handleChange} />
//                 <Button type="submit">submit</Button>
//             </form>


//             <Button variant="contained" onClick={handleMenuClick} sx={{marginTop:"100px"}}> open menu </Button>
//             <Menu anchorEl={anchorElement} open={open} onClose={handleClose}>
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleClose}>balance</MenuItem>
//                 <MenuItem onClick={handleClose}>logout</MenuItem>
//             </Menu>

//             <Tabs value={tabValue} indicatorColor="secondary" textColor="primary" onChange={(e,val)=>{setTabValue(val)}}>
//                 <Tab label="first tab"/>
//                 <Tab label="second tab "/>
//                 <Tab label="third tab"/>
//             </Tabs>
//             put the tabs inside the toolbar and crate a navigation bar
//             <MainPage/>
//             <Card sx={{ minWidth: 275 }}>
//                 <CardContent>
//                     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                     Word of the Day
//                     </Typography>
//                     <Typography variant="h5" component="div">
//                     be{bull}nev{bull}o{bull}lent
//                     </Typography>
//                     <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     adjective
//                     </Typography>
//                     <Typography variant="body2">
//                     well meaning and kindly.
//                     <br />
//                     {'"a benevolent smile"'}
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                     <Button size="small">Learn More</Button>
//                 </CardActions>
//             </Card>
//             <CardDefinition/>

//             <Button onClick={()=>setOpenModal(true)}>open dialog</Button>
//             <Dialog open={openModal} onClose={()=>setOpenModal(false)}  > 
//             hideBackdrop, maybe on Dialog
//                 <DialogTitle>This is my dialog </DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         a dialog is a pop up window which can ask user sth like an information or confirmation
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={()=>setOpenModal(false)}>Cancel</Button>
//                     <Button>Agree</Button>
//                 </DialogActions>
//             </Dialog>

//             <Button onClick={handleModalOpen}>Open modal</Button>
//             <Modal
//             open={openOtherModal}
//             onClose={handleModalClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//             >
//             <Box>
//                 <Typography id="modal-modal-title" variant="h6" component="h2">
//                 Text in a modal
//                 </Typography>
//                 <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                 Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                 </Typography>
//             </Box>
//             </Modal>


//             <Link href="www.google.com" underline="hover" color="secondary" variant="h2" >visit google</Link>


//             <Box display="flex" margin={10} border={10} borderColor="red" borderRadius={10} padding={10} flexDirection="column">
//                 <Typography>this is inside box</Typography>
//                 <Button>click me</Button>
//                 <TextField></TextField>
//             </Box>

//             <Container sx={{background:"green"}} maxWidth="xs" >
//                 xs
//             </Container>
//             <br />
//             <Container sx={{background:"green"}} maxWidth="sm" >
//                 sm
//             </Container>
//             <br />
//             <Container sx={{background:"green"}} maxWidth="md" >
//                 md
//             </Container>
//             <br />
//             <Container sx={{background:"green"}} maxWidth="lg" >
//                 lg
//             </Container>
//             <br />
//             <Container sx={{background:"green"}} maxWidth="xl" >
//                 xl
//             </Container>
//             <br />

//             <List sx={{width:300, background:"grey"}}>
//                 <ListItemButton>
//                     <ListItem>
//                         <ListItemIcon>{">"}</ListItemIcon>
//                         <ListItemText primary="First"  />
//                     </ListItem>
//                 </ListItemButton>
//             </List>
//             <Navbar/>
//             <RoadMap/>


//             <Footer/>

//         </div>);
// }

// export default social;


import React from 'react'

function social() {
  return (
    <div>
      soc
    </div>
  )
}

export default social
