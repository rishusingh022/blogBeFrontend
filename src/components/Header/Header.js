import React from "react";
import "./Header.css";
function Header() {
  return (
    <nav className="body-padding">
      <div>
        <h1>The Artifacts</h1>
        <p>
          <em>Culture & Art Blogs</em>
        </p>
      </div>
      <ul>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
