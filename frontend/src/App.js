import React from "react";
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import { Home } from "./component/admin/Home";
import { AddInvalidToken } from "./component/admin/Inspector/AddInvalidToken";
import { ViewInvalidToken } from "./component/admin/Inspector/ViewInvalidToken";
import { AddTimeTables } from "./component/admin/PublicTransportManager/AddTimeTables";
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
          <Route path={'/getinvalid'} exact element={<ViewInvalidToken/>}/>
          <Route path={'/addtable'} exact element={<AddTimeTables/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
