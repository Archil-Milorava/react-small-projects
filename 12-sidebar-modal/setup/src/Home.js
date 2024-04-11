import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { appContext, useGlobalContext } from './context'


const Home = () => {
const {openSidebar, openMOdal} = useGlobalContext()


  return <main>
    <button className='sidebar-toggle' onClick={openSidebar}>
<FaBars />
    </button>
    <button className='btn' onClick={openMOdal}>show modal</button>
  </main>
}

export default Home
