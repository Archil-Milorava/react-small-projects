import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
const {isSubmenuOpen} = useGlobalContext();



  return <aside className={`${isSubmenuOpen ? 'submenu show' : 'sumenu'}`}>
    
  </aside>
}

export default Submenu
