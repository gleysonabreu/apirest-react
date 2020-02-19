import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Renders Routes
import Main from './pages/Main';
import User  from './pages/User';
import Add from './actions/Add';
import Delete from './actions/Delete';
import Update from './actions/Update';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/users" element={<User />}>
        <Route path="add" element={<Add />} />
        <Route path="delete/:id" element={<Delete />}/>
        <Route path="edit/:id" element={<Update />}/>
    </Route>
    <Route path="*" element={<h1>Not Found</h1>} />
  </Routes>
);

export default MainRoutes;