import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage';
import Product from './pages/ProductPage';

import './css/style.css';

function App() {
	return (
    	<BrowserRouter>
    		<Routes>
        		<Route path="/" Component={Home} />
          		<Route path="/product/:productId" Component={Product} />
      		</Routes>
    	</BrowserRouter>
  	);
}

export default App;
