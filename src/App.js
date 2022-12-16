import './App.css';
import Register from "./page/Register";
import {Route, Routes} from "react-router-dom";
import Login from "./page/Login";


function App() {
  return (
    <>
      <div className='container-fluid'>
          <Routes>
              <Route path={''} element={<Login/>}/>
              <Route path={'/register'} element={<Register/>}/>
          </Routes>
      </div>
    </>
  );
}

export default App;
