import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(`http://localhost:3001/api`).then((res) => {
      console.log(res.data);
      setData(res.data.message);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
