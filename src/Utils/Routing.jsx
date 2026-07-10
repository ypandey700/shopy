import React from 'react'
import { Routes,Route, Link} from 'react-router-dom'
import Cards from '../component/Cards'
import Details from '../component/Details'
import Form from '../component/Form'
import { Edit } from '../component/Edit'

const Routing = () => {
  return (
    <>
        
        <Routes>
            
            <Route path='/'  element={<Cards/>} />
            <Route path='/details/:id'  element={<Details/>} />
            <Route path='/create' element={<Form/>}/>
            <Route path='/Edit/:id' element={<Edit/>}/>

        </Routes>

    </>
  )
}

export default Routing