import React from "react";
import local from "../image/local.jpeg";
import visitor from "../image/vistor.jpeg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div
        className=""
        style={{ marginTop: "3%", marginLeft: "20%", width: "60%" }}
      >
        <h3 className="text-center my-5">Generate Token</h3>
        <div className="row text-center">
          <div className="col" src="">
            <Link to="/reg">
              <button className="bg-transparent border-0" style={{ height: "50%" }}>
                <img src={local} style={{ height: "100%" }} />
                <h5 className="mt-2">Local</h5>
              </button>
            </Link>
          </div>
          <div className="col" src="">
            <Link to="/visitlog">
              <button className="bg-transparent border-0" style={{ height: "50%",width:"50%" }}>
                <img src={visitor} style={{ height: "100%",width:"100%" }} />
                <h5 className="mt-2">Visitor</h5>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
