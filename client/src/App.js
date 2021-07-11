import React from 'react';
import Layout from './core/Layout';
import {Link} from 'react-router-dom';
import './styles/app.css';

const App = () => {
  return (
    <Layout>
      <div className="app">
        <div className="app-hero">
          <p>What is happiness is somewhere you will find out what makes you happy.</p>
          <p>It is simple. Everyday you are asked to enter some values. By time, you are going to find out what makes you happy.</p>
        </div>
        <div className="app-main">
          
        </div>
        <div className="app-auth">
          <Link to='/'>Register</Link>
          <Link to='/'>Login</Link>
        </div>
      </div>
    </Layout>
  )
}

export default App
