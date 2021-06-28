import React, { Component } from "react";
import "./reserve.css";
import {Tables} from "./Tables"

export default class Reserve extends Component {
  render() {
    return (
      <div className="reserve">
          <div className="title">
              <h4>
                  Book Your Tables!!!
              </h4>
          </div>
          <div className="Tables">
              <Tables/>
          </div>
      </div>
    );
  }
}

