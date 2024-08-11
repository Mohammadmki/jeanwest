import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Checkout from '../pages/Checkout'
import DitalesPage from '../pages/DitalesPage'

import Notfoundpage from '../pages/Notfoundpage'

function Router() {
  return (
    <Routes>
       <Route index element={<Homepage/>} />
       <Route path='/checkout' element={<Checkout/>} />
       <Route path='/:id' element={<DitalesPage/>} />
       <Route path='*' element={<Notfoundpage/>} />
    </Routes>
  )
}

export default Router