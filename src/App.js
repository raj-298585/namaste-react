import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';


// App Layout
const AppLayout = (props) => {
  return (
    <div className='app'>
      <Header/>
      <Container/>
      <Footer/>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

//overrides the root element children
root.render(<AppLayout/>);
