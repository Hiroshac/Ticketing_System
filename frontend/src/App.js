import React from "react";
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import { Home } from "./component/admin/Home";
import { AddInvalidToken } from "./component/admin/Inspector/AddInvalidToken";
import { ViewInvalidToken } from "./component/admin/Inspector/ViewInvalidToken";
import { AddTimeTables } from "./component/admin/PublicTransportManager/AddTimeTables";
import { AllocateInspector } from "./component/admin/PublicTransportManager/AllocateInspector";
import { NavBar } from "./component/common/NavBar";
import { ViewTimeTables } from "./component/user/common/ViewTimeTables";
import Login from "./component/common/login/Login";
// import { Login } from "./component/common/login/Login";
import { Registation } from "./component/common/registation/Registation";
import { Visitorlog } from "./component/user/Guest/Visitorlog";
import { Dashlocal } from "./component/user/Local/Dashlocal";
import { AddCredit } from "./component/user/Guest/AddCredit";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          {/* Client */}
          <Route path={'/'} exact element={<Home/>}/>
          <Route path={'/gettable'} exact element={<ViewTimeTables/>}/>
          <Route path={'/reg'} exact element={<Registation/>}/>
          <Route path={'/login'} exact element={<Login/>}/>
          <Route path={'/localdash'} exact element={<Dashlocal/>}/>
          <Route path={'/visitlog'} exact element={<Visitorlog/>}/>
          <Route path={'/addcredit'} exact element={<AddCredit/>}/>


          {/* <Route path={'/'} exact element={<Home/>}/> */}
          {/* Inspector */}
          <Route path={'/addinvalid'} exact element={<AddInvalidToken/>}/>
          <Route path={'/getinvalid'} exact element={<ViewInvalidToken/>}/>
          {/* Public Transport Manager*/}
          <Route path={'/addtable'} exact element={<AddTimeTables/>}/>
          <Route path={'/allocate'} exact element={<AllocateInspector/>}/>
          {/* SAdmin*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
