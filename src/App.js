import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './componetns/Header';
import Footer from './componetns/Footer';

function App() {
  return (
      <>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
      </>
  );
}

export default App;
