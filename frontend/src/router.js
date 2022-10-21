import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/home'
import ProductDetails from './pages/productDetails/productDetails'

function Routers() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={ <Home /> }/>
          <Route exact path='/detalhes-do-produto/:id' element={ <ProductDetails /> }/>
        </Routes>
      </Router>
  );
}

export default Routers;