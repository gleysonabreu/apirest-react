import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Renders Routes
import Main from './pages/Main';
import User  from './pages/User';
import Add from './actions/Add';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/users" element={<User />}>
        <Route path="add" element={<Add />} />
        <Route path="edit/:id" element={<h>EDIT</h>}/>
    </Route>
    <Route path="*" element={<h1>Not Found</h1>} />
  </Routes>
);

export default MainRoutes;