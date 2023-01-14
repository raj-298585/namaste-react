import React from 'react';
import ReactDOM from 'react-dom/client';


const heading = <h1>Namaste React!</h1>

// Functional Component
const Header2 = ({title}) => (<h2>Namaste {title}!</h2>)

function buttonClick() {
  alert('Clicked');
}


// Component Composition && Passing Props to Componenet
const Container = () => (<div> <Header2 title='Rajendra'> </Header2> {heading} <button onClick={()=>buttonClick()}>ClickMe!</button></div>)

const root = ReactDOM.createRoot(document.getElementById('root'));

//overrides the root element children
root.render(<Container/>);
