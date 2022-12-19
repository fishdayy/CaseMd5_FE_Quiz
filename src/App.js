import './App.css';
import Register from "./page/Register";
import {Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/home/Home";


function App() {
  return (
    <>
      <div className='container-fluid'>
          <Routes>
              <Route path={''} element={<Login/>}/>
              <Route path={'register'} element={<Register/>}/>
              <Route path={'home'} element={<Home/>}>

              </Route>
          </Routes>
      </div>
    </>
  );
}

export default App;
