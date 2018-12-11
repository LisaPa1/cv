import React, { Component } from "react";
import Typed from "typed.js";

class TypedName extends Component {
  componentDidMount() {
    const options = {
      strings: ["Elizaveta <br/>Patrusheva <br/>"],
      typeSpeed: 100
    };
    this.typed = new Typed(this.el, options);
  }

  render() {
    return (
      <div className="type-wrap">
        <span
          ref={el => {
            this.el = el;
          }}
        />
      </div>
    );
  }
}

export default TypedName;
