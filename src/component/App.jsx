import React from 'react'

import Routing from '../Utils/Routing'
import { Link } from 'react-router-dom'

const App = () => {
  
  return (
    <div>
      <Link to={'/'} className='absolute left-[17%] top-[3px]  text-pink-400 opacity-80 hover:text-pink-700 '>Home</Link>
    <div className='w-screen h-screen flex '>
     <Routing/>
    </div>

    </div>
    
  )
}

export default App