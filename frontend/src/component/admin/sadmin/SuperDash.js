import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbaradmin } from "../../common/Navbaradmin";

export const SuperDash = () => {
  const [inspector, setInspector] = useState([]);
  const [manager, setManager] = useState([]);
  const typei = "Inspector";
  const typem = "PTM";

  useEffect(() => {
    inspectoradmin(typei);
    manageradmin(typem);
  });

  const inspectoradmin = (typei) => {
    axios
      .post("http://localhost:5000/auth/user", { type: typei })
      .then((res) => {
        setInspector(res.data);
        // console.log(inspector)
      });
  };
  const manageradmin = (typem) => {
    axios
      .post("http://localhost:5000/auth/user", { type: typem })
      .then((res) => {
        setManager(res.data);
        // console.log(manager);
      });
  };
  return (
    <div>
      <Navbaradmin/>
      <div className="border-1" style={{width:"50%",marginLeft:"25%",marginTop:"2%"}}>
        <h3 className="text-center">Inspector</h3>
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">NIC</th>
              <th scope="col">Contact No</th>
            </tr>
          </thead>
          <tbody>
            {inspector.map((b) => {
                return(

                <tr>
                    <td>{b.fullname}</td>
                    <td>{b.email}</td>
                    <td>{b.nic}</td>
                    <td>{b.contactno}</td>
                </tr>
                )
            })}
           
          </tbody>
        </table>
      </div>
      <div className="border-1" style={{width:"50%",marginLeft:"25%",marginTop:"2%"}}>
        <h3 className="text-center">Public Transport Manager</h3>
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">NIC</th>
              <th scope="col">Contact No</th>
            </tr>
          </thead>
          <tbody>
            {manager.map((b) => {
                return(

                <tr>
                    <td>{b.fullname}</td>
                    <td>{b.email}</td>
                    <td>{b.nic}</td>
                    <td>{b.contactno}</td>
                </tr>
                )
            })}
           
          </tbody>
        </table>
      </div>
    </div>
  );
};
