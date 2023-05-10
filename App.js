// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { useState, useEffect } from 'react';
// import Dashboard from './Components/Dashboard';
import Dashboard from './components/Dashboard';


function App() {
  const [loginStatus, setLoginStatus] = useState(false)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, [])



  return (
    <div className="App">
      <header className="App-header">

        <h3>Facebook Styled Component</h3>

        {loginStatus ? <Dashboard products={products} setProducts={setProducts} />
          : <Login setLoginStatus={setLoginStatus} loginStatus={loginStatus} />
        }






        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}


      </header>
    </div>
  );
}

export default App;
