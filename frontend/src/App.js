import React from "react";
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import { Home } from "./component/admin/Home";
import { AddInvalidToken } from "./component/admin/Inspector/AddInvalidToken";
import { ViewInvalidToken } from "./component/admin/Inspector/ViewInvalidToken";
import { AddTimeTables } from "./component/admin/PublicTransportManager/AddTimeTables";
import { AllocateInspector } from "./component/admin/PublicTransportManager/AllocateInspector";
import { AddInspector } from "./component/admin/SAdmin/AddInspector";
import { AddPublicManager } from "./component/admin/SAdmin/AddPublicManager";
import { NavBar } from "./component/common/NavBar";
import { ViewTimeTables } from "./component/user/common/ViewTimeTables";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          {/* Client */}
          <Route path={'/'} exact element={<Home/>}/>
          <Route path={'/gettable'} exact element={<ViewTimeTables/>}/>
          {/* <Route path={'/'} exact element={<Home/>}/> */}
          {/* Inspector */}
          <Route path={'/addinvalid'} exact element={<AddInvalidToken/>}/>
          <Route path={'/getinvalid'} exact element={<ViewInvalidToken/>}/>
          {/* Public Transport Manager*/}
          <Route path={'/addtable'} exact element={<AddTimeTables/>}/>
          <Route path={'/allocate'} exact element={<AllocateInspector/>}/>
          {/* SAdmin*/}
          <Route path={'/inspector'} exact element={<AddInspector/>}/>
          <Route path={'/manager'} exact element={<AddPublicManager/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
