import React from 'react'
import { Routes,Route, Link} from 'react-router-dom'
import Cards from '../component/Cards'
import Details from '../component/Details'

const Routing = () => {
  return (
    <>
        
        <Routes>
            
            <Route path='/'  element={<Cards/>} />
            <Route path='/details/:id'  element={<Details/>} />

        </Routes>

    </>
  )
}

export default Routing