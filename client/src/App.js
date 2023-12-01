import Header from "./components/Header";
import Login from "./components/Login";
import {Routes, Route} from "react-router-dom"
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
