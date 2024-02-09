import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import { Route, HashRouter as Router, Routes } from 'react-router-dom'; // Import HashRouter
import { Home, About, Contact, Github, User } from './components/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="github" element={<Github />} />
          <Route path="user/:username/:email" element={<User />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
