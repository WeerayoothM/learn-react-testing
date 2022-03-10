import React from "react";
import { Avatar } from "./Avatar";
import "./Avatar.css";

function AvatarGroup({ children, max }) {
  return (
    <div style={{ display: "flex" }}>
      <ul className="avatars">
        <li className="avatar">
          <Avatar
            arial-label="meow"
            size="sm"
            style={{
              border: "1.5px solid gray",
              backgroundColor: "#D3D3D3",
            }}
          >
            +{children.length - max}
          </Avatar>
        </li>
        {children
          .slice(0, max)
          .reverse()
          .map((Components, index) => {
            return (
              <li key={index} className="avatar">
                {Components}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default AvatarGroup;
