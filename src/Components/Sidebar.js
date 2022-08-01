import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="menuContainer">
        <ul className="menu__items">
          <li className="list_item">
            <i className="bi bi-list"></i>
          </li>
          <li className="list_item">
            <i className="bi bi-dropbox"></i>
          </li>
          <li className="list_item">
            <i className="bi bi-bag"></i>
          </li>
          <li className="list_item">
            <i class="bi bi-droplet"></i>
          </li>
          <li className="list_item">
            <i class="bi bi-people"></i>
          </li>
          <li className="list_item">
            <i class="bi bi-envelope"></i>
          </li>
          <li className="list_item">
            <i class="bi bi-journal-bookmark"></i>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
