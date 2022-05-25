// import Head from 'next/head'
// import Image from 'next/image'
import Footer from '../comps/Footer'
import Header from '../comps/Header'
import MainPage from '../comps/MainPage'
import Navbar from '../comps/Navbar'
import RoadMap from '../comps/RoadMap'
// import styles from '../styles/Home.module.css'
import CardDefinition from '../comps/CardDefinition'


export default function Home() {
  return (
    <div style={{background:"black", color:"white"}}>
      <Navbar/>
      <Header/>
                  <MainPage/>
            <CardDefinition/>
            <RoadMap/>


            <Footer/>
    </div>
  )
}
