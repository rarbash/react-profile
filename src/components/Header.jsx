import React from "react";
import pic from "../images/pic.png"

export default function Header() {
  return (
    <div className="header">
      <img src={pic} className="pic" />
      <h1 className="text header--name text-center">Laura Smith</h1>
      <h4 className="text header--position text-center">Frontend Developer</h4>
      <h6 className="text header--link text-center">laurasmith.website</h6>
    </div>
  );
}
