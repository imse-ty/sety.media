import React from 'react';

function MenuItem(props) {
  return (
    <li className="transition pr-9 hover:text-wireframeRed focus:text-wireframeRed">
      <a href="#">{props.children}</a>
    </li>
  );
}

export default function Navigation() {
  return (
    <nav>
      <ul className="flex text-xl font-semibold text-frameworkGray">
        <MenuItem>Work</MenuItem>
        <MenuItem>Info</MenuItem>
        <MenuItem>Blog</MenuItem>
      </ul>
    </nav>
  );
}
