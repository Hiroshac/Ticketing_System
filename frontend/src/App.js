import React from "react";
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import { Home } from "./component/admin/Home";
import { AddInvalidToken } from "./component/admin/Inspector/AddInvalidToken";
import { NavBar } from "./component/common/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          {/* Client */}
          <Route path={'/'} exact element={<Home/>}/>
          {/* <Route path={'/'} exact element={<Home/>}/> */}
          {/* Inspector */}
          <Route path={'/addinvalid'} exact element={<AddInvalidToken/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
