import React from 'react'
import { Routes,Route, Link} from 'react-router-dom'
import Cards from '../component/Cards'
import Details from '../component/Details'
import Form from '../component/Form'

const Routing = () => {
  return (
    <>
        
        <Routes>
            
            <Route path='/'  element={<Cards/>} />
            <Route path='/details/:id'  element={<Details/>} />
            <Route path='/create' element={<Form/>}/>

        </Routes>

    </>
  )
}

export default Routing