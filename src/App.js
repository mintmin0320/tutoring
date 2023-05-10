import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './component/auth/Login';
import LoginAnser from './component/auth/LoginAnswer';
import MemberList from './component/admin/MemberList';
import MemberListAnser from './component/admin/MemberListAnser';
import Home from './component/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/auth/login"
          element={
            <Login />
          }
        />
        <Route
          path="/auth/answer"
          element={
            <LoginAnser />
          }
        />
        <Route
          path="/admin/list"
          element={
            <MemberList />
          }
        />
        <Route
          path="/admin/answer"
          element={
            <MemberListAnser />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
