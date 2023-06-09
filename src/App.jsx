import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import ShowSummary from './screens/ShowSummary';

const App = () => {
  return (

    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary/:id" element={<ShowSummary />} />
      </Routes>
</Router>
  
  
  );
};

export default App;

