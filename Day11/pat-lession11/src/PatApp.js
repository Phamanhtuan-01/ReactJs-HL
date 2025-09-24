import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PatNavBar from './components/PatNavBar';
import PatHome from './pages/PatHome';
import PatAbout from './pages/PatAbout';
import PatContact from './pages/PatContact';
import PatProduct from './pages/PatProduct';
import PatProductDetail from './pages/PatProductDetail';
import PatNotFound from './pages/PatNotFound';
import PatUsers from './pages/PatUsers';
import PatUserAdd from './pages/PatUserAdd';
import PatUserEdit from './pages/PatUserEdit';
import PatCategories from './pages/PatCategories';

export default function PatApp() {
  return (
    <div className="container border">
      <h1>React Route - Demo [Phạm Anh Tuấn]</h1>
      <hr/>
        <BrowserRouter>
            <PatNavBar />
            <Routes>
                <Route path='/' element={<PatHome />} />
                <Route path='/about' element = {<PatAbout />} />
                <Route path='/contact' element = {<PatContact />} />

                {/* Nested route  */}
                <Route path='/products' element = {<PatProduct />} >
                  <Route path=":id" element = {<PatProductDetail />} />
                </Route>

                <Route path='/users' element = {<PatUsers />}> </Route>
                <Route path="/users/add" element = {<PatUserAdd />} />
                <Route path="/users/edit/:id" element = {<PatUserEdit />} />

                <Route path='/categories' element = {<PatCategories />}> </Route>

                {/* 404 page  */}
                <Route path='*' element = {<PatNotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}