import { AppBar,Fab,Box, Button, Toolbar, Typography,Container,IconButton,Drawer,ListItemButton,ListItemText,List,ListItem,ListItemIcon,Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState,useEffect} from 'react'
import Link from "next/link";


const Navbar = ({}) => {

        const [state,setState] = useState({
                mobileView:false,
                drawerOpen: false,
        })

        const {mobileView,drawerOpen} = state;

        useEffect(()=>{
                const setResponsiveness = () => {
                return window.innerWidth < 900 
                        ? setState((prevState)=>({...prevState,mobileView:true}))
                        : setState((prevState)=>({...prevState,mobileView:false}))
                }
                setResponsiveness()
                window.addEventListener("resize",()=> setResponsiveness())
                return ()=>{
                window.removeEventListener("resize",()=> setResponsiveness())
                }
        },[])

        const displayDesktop = () => {
                return (<Toolbar>
                                <Container sx={{background:"black" ,display:"flex", justifyContent:"flex-end",flexWrap:"wrap"}} maxWidth="xl">
                                        <Link href="/" >
                                                <Button variant="contained" size="medium" sx={{fontSize:"18px",margin:3,background:"rgba(66, 245, 236,0.1)"}} color="info">
                                                home
                                                </Button>
                                        </Link>

                                        <Link href="/roadmap">
                                                <Button variant="outlined" size="medium" sx={{fontSize:"18px",margin:3,background:"rgba(66, 245, 236,0.1)"}} color="info">
                                                        roadmap
                                                </Button>
                                        </Link>
                                        {/* <Button variant="outlined" size="medium" sx={{fontSize:"18px",margin:3,background:"rgba(66, 245, 236,0.1)"}} color="info">
                                                sth else
                                        </Button> */}

                                        <Button href="https://discord.gg/vKaB2B8v" variant="outlined" size="small" sx={{fontSize:"18px",margin:3,background:"rgba(179, 66, 245,0.2)"}} color="info">
                                                discord
                                        </Button>
                                        <Button variant="outlined" size="small" sx={{fontSize:"18px",margin:3,background:"rgba(179, 66, 245,0.2)"}} color="info">
                                                twitter
                                        </Button>
                                        <Button variant="outlined" size="small" sx={{fontSize:"18px",margin:3,background:"rgba(179, 66, 245,0.2)"}} color="info">
                                                Magic Eden
                                        </Button>
                                        
                                </Container>
                        </Toolbar>)
        }

        const displayMobile = () => {
                const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
                const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));
                return (<Toolbar>
                                {/* <IconButton
                                        {...{
                                        edge: "start",
                                        color: "inherit",
                                        "aria-label": "menu",
                                        "aria-haspopup": "true",
                                        }}
                                >
                                        <MenuIcon />
                                </IconButton> */}
                                <Button onClick={handleDrawerOpen}>
                                        <Fab color="primary" aria-label="edit">
                                                <MenuIcon />
                                        </Fab>
                                </Button>
                                <Drawer
                                        {...{
                                        anchor: "left",
                                        open: drawerOpen,
                                        onClose: handleDrawerClose,
                                        }}
                                        >     
                                <List>
                                        <ListItem disablePadding>
                                                <ListItemButton>
                                                        <ListItemText primary="Home" />
                                                </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                                <ListItemButton>
                                                        <ListItemText primary="Roadmap" />
                                                </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                                <ListItemButton>
                                                        <ListItemText primary="sth else" />
                                                </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                                <ListItemButton>
                                                        <ListItemText primary="Discord" />
                                                </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                                <ListItemButton>
                                                        <ListItemText primary="Twitter" />
                                                </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                                <ListItemButton>
                                                        <ListItemText primary="Magic Eden" />
                                                </ListItemButton>
                                        </ListItem>
                                        
                                        </List>
                                <Divider />
                                </Drawer>
                        </Toolbar>)
        }

        return (
        <Box sx={{marginBottom:"80px"}}>
                <AppBar sx={{background:"black"}}>
                        {mobileView ? displayMobile():displayDesktop()}
                </AppBar>
        </Box>
        );
}

export default Navbar;





{/*<AppBar>
                <Toolbar>
                    <Typography>Logo</Typography>
                    <Button sx={{marginLeft:"auto"}} variant="contained" color="warning">hello</Button>
                </Toolbar>
</AppBar>*/}
