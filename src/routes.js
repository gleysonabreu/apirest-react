import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Renders Routes
import Logout from './pages/Logout';
import Main from './pages/Main';
import User  from './pages/User';
import Add from './actions/Add';
import Delete from './actions/Delete';
import Update from './actions/Update';
import NotFound from './componetns/NotFound';
import Login from './pages/Login';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/login" element={<Login />}/>
    <Route path="/logout" element={<Logout />} />
    <Route path="/users" element={<User />}>
        <Route path="add" element={<Add />} />
        <Route path="delete/:id" element={<Delete />}/>
        <Route path="edit/:id" element={<Update />}/>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default MainRoutes;