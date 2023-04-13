import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// import Header from "./Header";

// It is funcational compoent because it return react element


function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" className="nav-logo" alt="" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div className="div-main">
      <h1>Reason learning React</h1>
      <ol className="div-list-items">
        <li>Highly useful</li>
        <li>Easy to use</li>
        <li>
          Once I learn react and start working on the projects My pacakage will
          increase. I will create my own site.
        </li>
      </ol>
    </div>
  );
}



function Footer() {
  return (
    <footer className="footer">
      <small>© 2023 Satyajit Bhapkar development. All rights reserved.</small>
    </footer>
  );
}

function App1() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

//Other way of declaring the functions
//ReactDOM.render(TemporaryName(), document.getElementById("root"));

//ReactDOM.render(<TemporaryName />, document.getElementById("root"));

// ReactDOM.render(<App />, document.getElementById("root"));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//ReactDOM.render(<h1>Test the code</h1>, document.getElementById("root"));


